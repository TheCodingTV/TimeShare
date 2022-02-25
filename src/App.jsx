import Timer from './Components/TimerSingle'
import TimerMultiple from './Components/TimerMultiple'

function App () {
  return (
    <div className="App">
      <Timer totalSeconds={240} />
      <Timer 
        totalSeconds={240} 
        cover={'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      />
      <TimerMultiple
        cover={'https://images.unsplash.com/photo-1645193584649-570f8f1eaddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        config={[
          { id: 1, totalSeconds: 120, title: '正方', color: '#364fc7' },
          { id: 2, totalSeconds: 240, title: '反方', color: '#0b7285' }
        ]}
      />
      <TimerMultiple
        cover={'https://images.unsplash.com/photo-1645240661865-6f6b77ee61e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'}
        config={[
          { id: 1, totalSeconds: 120, title: '甲方', color: '#364fc7' },
          { id: 2, totalSeconds: 240, title: '乙方', color: '#0b7285' },
          { id: 3, totalSeconds: 360, title: '丙方', color: '#a61e4d' }
        ]}
      />
    </div>
  )
}

export default App
