import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0,}

  Accelerate = () => {
    const {count} = this.state
    if (count === 200) {
      this.setState({count: 200})
    } else {
      this.setState(prstate => ({
        count: prstate.count + 10,
      }))
    }
  }

  ApplyBrake = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prstate => ({
        count: prstate.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="img-t"
          alt="speedometer"
        />
        <h2 className="ppp">Speed is {count}mph</h2>
        <p className="p2">Min limit is 0mph, Max limit is 200mph</p>
        <div className="b">
          <button type="button" className="button1" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button type="button" className="button1" onClick={this.ApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
