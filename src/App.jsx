import Timer from './Components/Timer'

export default function App () {
  return (
    <div className="App">
      <Timer
        config={[
          { id: 1, totalSeconds: 120 },
          { id: 2, totalSeconds: 240 }
        ]}
      />
    </div>
  )
}