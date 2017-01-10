import React, { Component, PropTypes } from 'react';

class Example3 extends Component {

  constructor(props) {
    super(props);
    this.textInput = null;
  }

  // showRefs = () => {
  //   console.log('this.refs', this.refs);
  //   console.log('ref1 value', this.refs.ref1.value);
  //   console.log('this.textInput', this.textInput);
  // }

  showRefs = () => {
    console.log('this.refs', this.refs);
    console.log('ref1 value', this.refs.ref1.value);
    console.log('this.textInput', this.textInput.value);
  }

  changeRef = () => {
    this.refs.ref2.value = 'just like two-way binding';
  }

  render() {
    return <div>
      Ref1 <input ref="ref1"/><br />      
      Ref2 <input ref="ref2"/><br />      
      Ref3 <input ref={(input) => { this.textInput = input; }} /><br />      
      <button onClick={this.showRefs}>SHOW REFS</button>
      <button onClick={this.changeRef}>CHANGE REFS</button>
    </div>
  }
}

export default Example3