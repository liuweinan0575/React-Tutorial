import React from 'react';

function Welcome({name, lang}) {

  // default speak English
  let hello = 'Hello';

  if (lang === 'ch') {
    hello = '你好';
  } else if (lang === 'fr') {
    hello = 'Boujour';
  } else if (lang === 'ja') {
    hello = 'Ohayou';
  }

  var callbacks = [];
  for (let i = 0; i <= 10; i++) {
      callbacks[i] = function() { return i * 2; };
  }

  // console.log(callbacks[0]());
  

  const welcome = `${hello}, ${name}`;
  return <button onClick={() => {alert(welcome)}}>{welcome}</button>
}

export default class Chapter5 extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Sara" lang="ch"/>
        <Welcome name="Cahal" lang="fr"/>
        <Welcome name="Edite" />
      </div>
    )
  }
}