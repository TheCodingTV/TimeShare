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
    if (prevProps.timerId !== this.props.timerId) {
      return this.reset()
    }

    if (this.state.isRunning) {
      if (this.state.seconds > 0) {
        this.t = setTimeout(() => this.setState({seconds: this.state.seconds - 1}), this.speed)
      } else {
        clearTimeout(this.t)
        this.setState({ isRunning: false })
        if (this.props.onEnd) {
          this.props.onEnd()
        }
      }
    } else {
      clearTimeout(this.t)
    }
  }

  onRunClick = () => {
    if (this.state.isRunning && this.props.onPause) {
      this.props.onPause()
    }

    if (!this.state.isRunning && this.props.onRun) {
      this.props.onRun()
    }

    let newState = { isRunning: !this.state.isRunning }
    if (this.state.seconds === 0) {
      newState.seconds = this.props.totalSeconds
    }
    this.setState(newState)
  }

  stop = () => {
    setTimeout(this.t)
    this.setState({ isRunning: false })
  }

  reset = () => {
    setTimeout(this.t)
    this.setState({ isRunning: false, seconds: this.props.totalSeconds })
  }

  run = () => {
    this.t = setTimeout(() => this.setState({seconds: this.state.seconds - 1}), this.speed)
    this.setState({ isRunning: true })
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
