import { useState } from 'react'
import Button from '../../Components/Button'
import CardAddTimerSection from '../../Components/CardAddTimerSection'
import CardSelect from '../../Components/CardSelect'
import './style.css'

const colorTypes = [
  { title: '渐变1', type: 1 },
  { title: '渐变2', type: 2 },
  { title: '渐变3', type: 3 }
]

const componentTypes = [
  { title: '条形', description: '条形条形条形条形',  component: 'row' },
  { title: '卡片形', description: '卡片形卡片形卡片形', component: 'card' }
]

export default function CreateTimer () {
  const [config, setConfig] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [timerTitle, setTimerTitle] = useState('')
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')
  const [timerLength, setTimerLength] = useState(1)
  const [componentType, setComponentType] = useState(componentTypes[0].component)
  const [colorType, setColorType] = useState(colorTypes[0].type)
  const [colorType2, setColorType2] = useState(colorTypes[1].type)

  const [lengthOne, setLengthOne] = useState(0)
  const [lengthTwo, setLengthTwo] = useState(0)

  const onChangeLengthOne = e => { setLengthOne(parseInt(e.target.value)) }
  const onChangeLengthTwo = e => { setLengthTwo(parseInt(e.target.value)) }
  const onAdd = () => { setFormOpen(true) }
  const onCancel = () => {
    setFormOpen(false)
    setTimerLength(1)
    setComponentType(componentTypes[0].component)
    setColorType(colorTypes[0].type)
    setColorType2(colorTypes[1].type)
  }
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
    data.timerConfig = [{
      totalSeconds: lengthOne,
      componentType,
      colorType
    }]

    if (timerLength === 2) {
      data.timerConfig.push({
        totalSeconds: lengthTwo,
        componentType ,
        colorType: colorType2
      })
    }
    
    setConfig(config.concat(data))
    onCancel()
  }

  const onTimerSave = () => {
    if (!timerTitle) { return alert('need timer title!') }

    const storage = window.localStorage
    const userConfig = storage.getItem('timer-share-local')

    const data = [{ title: timerTitle, config }]
    const nextData = userConfig ? JSON.parse(userConfig).concat(data) : data
    storage.setItem('timer-share-local', JSON.stringify(nextData))

    onClearAll()
  }

  const onSectionDelete = idx => {
    setConfig(config.filter((_, index) => index !== idx))
  }

  return (
    <div>
      <div className='create-timer-label-main'>计时器名称</div>
      <input type='text' onChange={onTimerTitleChange} value={timerTitle} className='input-main' placeholder='计时器名称' />
      {config.map((item, idx) => {
        return <CardAddTimerSection {...item} key={idx} onDelete={() => onSectionDelete(idx)} />
      })}
      {formOpen && 
        <div className='create-timer-form'>
          <div className='create-timer-label'>步骤名称</div>
          <input type='text' onChange={onTitleChange} placeholder='给步骤起个名字' className='mb12' />
          <div className='create-timer-label'>步骤描述</div>
          <input type='text' onChange={onDescriptionChange} placeholder='给步骤加个解释' className='mb12' />
          <div className='create-timer-label'>计时类型</div>
          <div className='flex-row'>
            <CardSelect
              className='mr24 mb12'
              title='单倒计时'
              description='固定时长的倒计时'
              selected={timerLength === 1}
              onClick={() => setTimerLength(1)}
            />
            <CardSelect
              className={'mb12'}
              title='双倒计时'
              description='一方停止另一方开始计时'
              selected={timerLength === 2}
              onClick={() => setTimerLength(2)}
            />
          </div>
          <div className='create-timer-label'>计时秒数</div>
          <div className='flex-row'>
            <input min={1} type='number' onChange={onChangeLengthOne} className='mr24 mb12' placeholder='秒数' />
            {timerLength === 2 && <input min={1} type='number' onChange={onChangeLengthTwo} placeholder='秒数2' className='mb12' />}
          </div>
          <div className='create-timer-label'>组件类型</div>
          <div className='flex-row'>
            {componentTypes.map(item => {
              return (
                <CardSelect
                  key={item.title}
                  className='mr24 mb12'
                  title={item.title}
                  description={item.description}
                  selected={componentType === item.component}
                  onClick={() => setComponentType(item.component)}
                />
              )
            })}
          </div>
          <div className='create-timer-label'>颜色类型</div>
          <div className='flex-row'>
            {colorTypes.map(item => {
              return (
                <CardSelect
                  key={item.title}
                  className='mr24 mb12'
                  title={item.title}
                  Component={<div className={`timer-color-demo timer-color-${item.type}`} />}
                  selected={colorType === item.type}
                  onClick={() => setColorType(item.type)}
                />
              )
            })}
          </div>
          {
            timerLength === 2 &&
              <>
                <div className='create-timer-label'>颜色类型 - 2</div>
                <div className='flex-row'>
                  {colorTypes.map(item => {
                    return (
                      <CardSelect
                        key={item.title}
                        className='mr24 mb12'
                        title={item.title}
                        Component={<div className={`timer-color-demo timer-color-${item.type}`} />}
                        selected={colorType2 === item.type}
                        onClick={() => setColorType2(item.type)}
                      />
                    )
                  })}
                </div>
              </>
          }
          <div className='flex-row mt24'>
            <Button onClick={onSectionSave} style={{ marginRight: 12 }}>确认</Button>
            <Button type='secondary' onClick={onCancel}>取消</Button>
          </div>
        </div>}
      {!formOpen &&
        <Button type='secondary' size='l' full onClick={onAdd}>
          + 添加第{config.length + 1}个流程</Button>}
      {config.length > 0 && !formOpen && <Button className='mt12' full onClick={onTimerSave}>保存</Button>}
    </div>
  )
}