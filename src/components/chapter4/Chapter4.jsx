import React from 'react';
import Example from './Example4';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default class Chapter4 extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    )
  }
}