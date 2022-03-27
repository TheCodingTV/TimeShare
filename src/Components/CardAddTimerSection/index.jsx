import { useState } from 'react'
import Down from '../../Assets/down.svg'
import Up from '../../Assets/up.svg'
import Delete from '../../Assets/delete.svg'
import './style.css'

export default function CardAddTimerSection ({
  title,
  description,
  onDelete,
  timerConfig = []
}) {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <div className='card-add-section'>
      <div className='card-add-section-header'>
        <div className='flex-row pointer' onClick={() => setOpen(!isOpen)}>
          <img src={isOpen ? Down : Up} className='card-add-section-icon' alt='header-icon' />
          <div className='card-add-section-header-title'>{title}</div>
        </div>
        <div className='flex-row'>
          <div className='icon-button'>
            <img src={Delete} alt='delete-icon' onClick={onDelete} />
          </div>
        </div>
      </div>
      {
        isOpen &&
        <div className='card-add-section-content'>
          <div className='card-add-section-title'>{`环节名称: ${title}`}</div>
          <div className='card-add-section-description'>{`环节描述: ${description}`}</div>
          <div className='flex-row'>
            {
              timerConfig.map((item, idx) => {
                return (
                  <div className='card-add-section-single-timer' key={idx}>
                    <div>{`计时器${idx + 1}`}</div>
                    <div className='mt8'>{`时长: ${item.totalSeconds}秒`}</div>
                    <div className='mt8'>{`组件类型: ${item.componentType === 'card' ? '卡片' : '条形'}`}</div>
                    <div className='mt8'>
                      <div className={`timer-color-demo timer-color-${item.colorType}`} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}