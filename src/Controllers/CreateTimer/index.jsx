import { useState } from 'react'
import Button from '../../Components/Button'
import CardAddTimerSection from '../../Components/CardAddTimerSection'
import CardSelect from '../../Components/CardSelect'
import './style.css'

export default function CreateTimer () {
  const [config, setConfig] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [timerTitle, setTimerTitle] = useState('')
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')
  const [timerLength, setTimerLength] = useState(1)
  const [cardType, setCardType] = useState('row')

  const [lengthOne, setLengthOne] = useState(0)
  const [lengthTwo, setLengthTwo] = useState(0)

  const onChangeLengthOne = e => { setLengthOne(parseInt(e.target.value)) }
  const onChangeLengthTwo = e => { setLengthTwo(parseInt(e.target.value)) }
  const onAdd = () => { setFormOpen(true) }
  const onCancel = () => { setFormOpen(false) }
  const onTitleChange = e => { setSectionTitle(e.target.value) }
  const onDescriptionChange = e => { setSectionDescription(e.target.value) }
  const onTimerTitleChange = e => { setTimerTitle(e.target.value) }
  
  const onClearAll = () => {
    setTimerTitle('')
    setConfig([])
    onCancel()
    window.location.reload()
  }

  const onSectionSave = () => {
    if (!sectionTitle) { return alert('need title') }
    if (!lengthOne || lengthOne <= 0) { return alert('length one need > 0') } 
    if (timerLength ===  2 && lengthTwo <= 0) { return alert('length two need > 0') } 

    let data = {}
    data.title = sectionTitle
    data.description = sectionDescription
    data.timerConfig = [
      { totalSeconds: lengthOne }
    ]

    if (timerLength === 2) {
      data.timerConfig.push({
        totalSeconds: lengthTwo
      })
    }
    
    setConfig(config.concat(data))
    onCancel()
  }

  const onSaveTimer = () => {
    console.log(JSON.stringify(config, null, 2))

    if (!timerTitle) { return alert('need timer title!') }

    const storage = window.localStorage
    const userConfig = storage.getItem('timer-share-local')

    const data = [{
      title: timerTitle,
      config
    }]
    if (!userConfig) {
      storage.setItem('timer-share-local', JSON.stringify(data))
    } else {
      const currentConfig = JSON.parse(userConfig)
      storage.setItem('timer-share-local', JSON.stringify(
        currentConfig.concat(data)
      ))
    }

    onClearAll()
  }

  return (
    <div>
      <div className='create-timer-label-main'>计时器名称</div>
      <input type='text' onChange={onTimerTitleChange} value={timerTitle} className='input-main' placeholder='计时器名称' />
      {config.map((item, idx) => {
        return <CardAddTimerSection {...item} key={idx}/>
      })}
      {formOpen && 
        <div className='create-timer-form'>
          <div className='create-timer-label'>步骤名称</div>
          <input type='text' onChange={onTitleChange} placeholder='给步骤起个名字' />
          <div className='create-timer-label'>步骤描述</div>
          <input type='text' onChange={onDescriptionChange} placeholder='给步骤加个解释'  />
          <div className='create-timer-label'>计时类型</div>
          <div className='flex-row'>
            <CardSelect
              className='mr24'
              title='单倒计时'
              description='固定时长的倒计时'
              selected={timerLength === 1}
              onClick={() => setTimerLength(1)}
            />
            <CardSelect
              title='双倒计时'
              description='一方停止另一方开始计时'
              selected={timerLength === 2}
              onClick={() => setTimerLength(2)}
            />
          </div>
          <div className='create-timer-label'>计时秒数</div>
          <div className='flex-row'>
            <input min={1} type='number' onChange={onChangeLengthOne} className='mr24' placeholder='秒数' />
            {
              timerLength === 2 && <input min={1} type='number' onChange={onChangeLengthTwo} placeholder='秒数2' />
            }
          </div>
          <div className='create-timer-label'>显示类型</div>
          <div className='flex-row'>
            <CardSelect
              className='mr24'
              title='条形'
              description='长条状不断缩短的倒计时'
              selected={cardType === 'row'}
              onClick={() => setCardType('row')}
            />
            <CardSelect
              title='卡片形'
              description='卡片形卡片形卡片形卡片形'
              selected={cardType === 'card'}
              onClick={() => setCardType('card')}
            />
          </div>
          <div className='flex-row mt24'>
            <Button onClick={onSectionSave} style={{ marginRight: 12 }}>确认</Button>
            <Button type='secondary' onClick={onCancel}>取消</Button>
          </div>
        </div>}
      {!formOpen &&
        <Button type='secondary' size='l' full onClick={onAdd}>
          + 添加第{config.length + 1}个流程</Button>}
      {config.length > 0 && !formOpen && <Button className='mt12' full onClick={onSaveTimer}>保存</Button>}
    </div>
  )
}