import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let op = this.props.opacity
    if(op > 0.2){
      return (
        <div className="color-box" style={{opacity: op /*replace null with the value*/}}>
          
          {/* <div className="color-box" style={{opacity: null}> */}
          {/* your conditional code here! */}
          <ColorBox opacity={op - 0.1}/>
          {/* </div> */}
        </div>
      )
    }
  }

}

