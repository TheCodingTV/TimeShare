import TimerMultiple from './Components/TimerMultiple'

function App () {
  return (
    <div className="App">
      <TimerMultiple
        config={[
          { id: 1, totalSeconds: 120 },
          { id: 2, totalSeconds: 240 }
        ]}
      />
    </div>
  )
}

export default App
