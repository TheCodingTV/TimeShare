import React from 'react'
import TimerRow from '../../Components/TimerRow'

export default class TimerController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: props.totalSeconds,
      isRunning: false,
    }
    this.t = null
    this.speed = props.speed || 1000
  }

  componentDidUpdate (prevProps) {
    if (prevProps.sectionId !== this.props.sectionId) {
      return this.reset()
    }
  }

  onRunClick = () => {
    if (this.state.isRunning) {
      this.stop()
      if (this.props.onPause) {
        this.props.onPause()
      }
    } else {
      this.run()
      if (this.props.onRun) {
        this.props.onRun()
      }
    }
  }

  stop = () => {
    clearInterval(this.t)
    this.setState({ isRunning: false })
  }

  reset = () => {
    clearInterval(this.t)
    this.setState({ isRunning: false, seconds: this.props.totalSeconds })
  }

  run = () => {
    this.setState({
      isRunning: true,
      seconds: this.state.seconds === 0 ? this.props.totalSeconds : this.state.seconds
    })

    this.t = setInterval(() => {
      if (this.state.seconds === 0) {
        this.setState({ isRunning: false })
        if (this.props.onEnd) {
          this.props.onEnd()
        }
        clearInterval(this.t)
      } else {
        this.setState({ seconds: this.state.seconds - 1 })
      }
    }, this.speed)
  }
  
  render () {
    const { type = 'primary', totalSeconds, Component = TimerRow } = this.props
    const { seconds, isRunning } = this.state
    return (
      <Component
        onRunClick={this.onRunClick}
        seconds={seconds}
        totalSeconds={totalSeconds}
        isRunning={isRunning}
        type={type}
      />
    )
  }
}
