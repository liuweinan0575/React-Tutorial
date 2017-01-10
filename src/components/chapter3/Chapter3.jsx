import React from 'react';
import { Grid } from 'react-bootstrap';

// format 1： using component with class
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// format 2： using stateless function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default class Chapter3 extends React.Component {
  render() {
    return (
      <Grid>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </Grid>
    )
  }
}