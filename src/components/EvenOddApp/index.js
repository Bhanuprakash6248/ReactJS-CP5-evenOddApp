// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  onIncrement = () => {
    this.setState(prev => {
      const {count} = prev

      const num = count + Math.ceil(Math.random() * 100)
      console.log(num)
      let numType
      if (count % 2 === 0) {
        numType = true
      } else {
        numType = false
      }
      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state
    const content = isEven ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="card">
          <h1>Count {count}</h1>
          <p>Count is {content}</p>
          <div>
            <button className="btn" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increment By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
