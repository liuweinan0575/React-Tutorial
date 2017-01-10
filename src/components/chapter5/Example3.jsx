import React from 'react';

function Chinese({name, speak}) {
  return <button onClick={() => speak(`你好, ${name}`)}>{name}</button>
}

function French({name, speak}) {
  return <button onClick={() => speak(`Boujour, ${name}`)}>{name}</button>
}

export default class Chapter5 extends React.Component {
  speak = (hell) => {
    alert(hell);
  }
  render() {
    return (
      <div>
        <Chinese name="Sara" speak={this.speak}/>
        <French name="Cahal" speak={this.speak}/>
      </div>
    )
  }
}