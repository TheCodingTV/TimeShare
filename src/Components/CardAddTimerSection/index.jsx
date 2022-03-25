import { useState } from 'react'
import Down from './down.svg'
import Up from './up.svg'
import Delete from './delete.svg'
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
          {timerConfig.length === 1 &&
            <div>
              <div className='card-add-section-length'>{`时长: ${timerConfig[0].totalSeconds}秒`}</div>
              <div className='card-add-section-length'>{`计时器类型: ${timerConfig[0].type === 'card' ? '卡片' : '条形'}`}</div>
            </div>}
          {timerConfig.length > 1 &&
            <div className='flex-row'>
              {
                timerConfig.map((item, idx) => {
                  return (
                    <div className='card-add-section-single-timer' key={idx}>
                      <div>{`计时器${idx + 1}`}</div>
                      <div className='mt8'>{`时长: ${item.totalSeconds}秒`}</div>
                      <div className='mt8'>{`计时器类型: ${item.type === 'card' ? '卡片' : '条形'}`}</div>
                    </div>
                  )
                })
              }
            </div>
           }
        </div>
      }
    </div>
  )
}