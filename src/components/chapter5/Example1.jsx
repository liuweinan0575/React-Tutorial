import React from 'react';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function Welcome({name, ...leftOjb}) {
//   return <h1>Hello, {name}</h1>;
// }

// function Welcome(props) {
//   const { name } = props;
//   return <h1>Hello, {name}</h1>;
// }

function Welcome({name}) {
  return <button onClick={() => {alert(`Hello, ${name}`)}}>Hello, {name}</button>;
}

class Example1 extends React.Component {

  render() {
    return (
      <div>
        <Welcome name="ProfLiu" />
      </div>
    )
  }
}

export default Example1;