import React from 'react';

export default class Example3 extends React.Component {

  testIIFE(){
    let ifElseOutOfReturn = '';
    if(0===0) {
      ifElseOutOfReturn = 'abc';
    }
    return <div>{ifElseOutOfReturn}</div>
  }
  render() {
    return (
      <div>
        <div>
          {
            this.testIIFE()
          }
        </div>
      </div>
    )
  }
}