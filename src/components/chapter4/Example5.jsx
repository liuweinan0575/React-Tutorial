import React from 'react';

class OutSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      outsideState: {
        willChange: 'outsideState before',
      },
      helpChange: 'what i can do'
    };
  }

  changeOutsideState = () => {
    this.setState({helpChange: 'help me render'});
  }

  render() {
    const { outsideState } = this.state;
    return (
      <div>
        <button onClick={this.changeOutsideState} >CHANGE OUTSIDE</button>
        <br />
        {outsideState.willChange}
        <hr />
        <InSide outsideProps={outsideState} />
      </div>
    )
  }
}

class InSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      insideState: 'insideState before'
    };
  }

  changeOutsideProps = () => {
    // this.props.outsideProps 只读，
    // 但是this.props.outsideProps.willChange却是可以修改的
    this.props.outsideProps.willChange = 'it can be changed';
    this.setState({insideState: 'it can be changed'});
  }
  render() {
    const { insideState } = this.state;
    const { outsideProps } = this.props
    return (
      <div>
        <button onClick={this.changeOutsideProps} >CHANGE INSIDE</button>
        <br />
        {`insideState: ${insideState}`}
        <br />
        {`outsideProps: ${outsideProps.willChange}`}
        <br />
      </div>
    )
  }
}

export default OutSide;