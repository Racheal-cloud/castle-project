import React, { Component, PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("I'm the purecomponent")
    return (
      <div>Its the PureComp</div>
    )
  }
}

export default PureComp