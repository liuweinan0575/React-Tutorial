import React from 'react';

export default class Example0 extends React.Component {
  render() {
   const array = [1, 2, 3];
    return (
      <div>
        <div>
          {
            [
              <div >1</div>,
              <div >2</div>,
              <div >3</div>,
            ]
          }
        </div>
        <div>
          abc
        </div>
      </div>
    )
  }
}