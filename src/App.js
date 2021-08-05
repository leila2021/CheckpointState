import React, { Component } from 'react'
import Countr from './Compoints/Countr'

export class App extends Component {
  state = {show:false, };
  toggel= () => {
    this.setState({show:!this.state.show})
    
  }
  render() {
    return (
      <div>
        <button onClick={this.toggel}> {this.state.show? "hide" : "show" } </button> {
          this.state.show ? <Countr/> : "Clique pour affiche le coopteure"
        }
      </div>
    )
  }
}

export default App

