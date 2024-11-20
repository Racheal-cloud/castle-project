// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp';

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Rahul'
    }
  }
  componentDidMount() {
      setInterval(() => {
          this.setState({
              name: 'Rahul'
          })
      }, 3000);
  }

  render() {
    console.log("I'm the parent component")
    return (
      <div>The ParentComp
      <PureComp name={this.state.name} />
      <RegComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp