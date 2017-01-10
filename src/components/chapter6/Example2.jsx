import React, { Component, PropTypes } from 'react';

class Example2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nullValue: null,
      inputValue: '',
      inputValueChange: ''
    };
  }

  changeInput = (event) => {
    const value = event.target.value;

    this.setState({inputValueChange: value, undefinedValue: value});
  }

  render() {
    const { hello, inputValue, undefinedValue, nullValue, inputValueChange } = this.state;
    return <div>
      Input with ref <input ref="refInput"/>
      <br />
      Input with undefined Value <input value={undefinedValue} />
      <br />
      Input with null Value <input value={nullValue} />
      <br />
      Input with value <input value={inputValue} />
      <br />
      Input with value and onChange <input value={inputValueChange} onChange={this.changeInput} />
      <br />
    </div>
  }
}

export default Example2