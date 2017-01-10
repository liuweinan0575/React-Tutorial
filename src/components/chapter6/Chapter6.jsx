import React from 'react';
import Example from './Example3';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default class Chapter6 extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    )
  }
}