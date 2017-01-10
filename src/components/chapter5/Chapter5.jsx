import React from 'react';
import Example from './Example2';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default class Chapter5 extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <Example />
      </div>
    )
  }
}