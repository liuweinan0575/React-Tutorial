import React, { Component, PropTypes } from 'react';

class OutSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      outsideProps: 'what i can do'
    };
  }

  changeOutsideProps = () => {
    this.setState({outsideProps: 'help me render'});
  }

  render() {
    const { outsideProps } = this.state;
    return (
      <div>
        <button onClick={this.changeOutsideProps} >CHANGE OUTSIDE</button>
        <hr />
        { outsideProps !== 'help me render' && <InSide outsideProps={outsideProps} />} 
      </div>
    )
  }
}

class InSide extends React.Component {

  // 组件挂载(Mounting)：
  constructor(props) {
    console.log('print lifecycle function: constructor');
    super(props);
    this.state = {
      insideState: 'insideState before'
    };
  }

  componentWillMount() {
    console.log('print lifecycle function: componentWillMount');
  }

  componentDidMount() {
    console.log('print lifecycle function: componentDidMount');
  }

  changeInsideState = () => {
    this.setState({insideState: 'it can be changed'});
  }

  // 组件更新（Updating）：
  componentWillReceiveProps() {
    console.log('print lifecycle function: componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('print lifecycle function: shouldComponentUpdate');
    return false;
  }
  componentWillUpdate() {
    console.log('print lifecycle function: componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('print lifecycle function: componentDidUpdate');
  }

  // 组件卸载（Unmounting）：
  componentWillUnmount() {
    console.log('print lifecycle function: componentWillUnmount');
  }

  render() {
    const { insideState } = this.state;
    const { outsideProps } = this.props;
    console.log('print lifecycle function: render');
    return (
      <div>
        <button onClick={this.changeInsideState} >CHANGE INSIDE</button>
        <br />
        {`insideState: ${insideState}`}
        <br />
        {`outsideProps: ${outsideProps}`}
      </div>
    )
  }
}

export default OutSide;
