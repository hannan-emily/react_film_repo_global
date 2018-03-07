import React, { Component } from 'react';

class Fave extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isFave: false
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling fave clicked")
    this.setState({
      isFave: !this.state.isFave
    })
  }

  render () {

    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}



export default Fave;
