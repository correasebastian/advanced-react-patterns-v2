// Building the toggle component

import React from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import { Switch } from '../switch'

class Toggle extends React.Component {
  // 🐨 this toggle component is going to need to have state for `on`
  state = {
    on: false
  }
  toggle = (e) => {
    /* better to use a updater function react will give you the state, 
    this is better because the async thing, run btach, 
    so may be they not in sync with this.state.on */
    this.setState((state) => {
      return { on: !state.on }
    }, () => {
      this.props.onToggle(this.state.on)
    })

  }


  // You'll also want a method to handle when the switch is clicked
  // which will update the `on` state and call the `onToggle` prop
  render() {
    // 🐨 here you'll want to return the switch with the `on` and `onClick` props
    return <Switch on={this.state.on} onClick={this.toggle} />

  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export { Toggle, Usage as default }
