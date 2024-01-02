/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  /* renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      // eslint-disable-next-line react/button-has-type
      return <button className="button">Subscribed</button>
    }
    // eslint-disable-next-line react/button-has-type
    return <button className="button">Subscribe</button>
  } */

  render() {
    // eslint-disable-next-line no-unused-vars
    const {isSubscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="pera">Thank you!Happy Learning</p>
        <div>
          {isSubscribe && <button className="button">Subscribed</button>}
          {!isSubscribe && <button className="button">Subscribe</button>}
        </div>
      </div>
    )
  }
}

export default Welcome
