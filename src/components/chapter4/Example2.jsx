import React from 'react';

class OutSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      outsideState: 'before change'
    };
  }

  changeOutsideProps = () => {
    this.setState({outsideState: 'just change it'});
  }

  render() {
    const { outsideState } = this.state;
    return (
      <div>
        <button onClick={this.changeOutsideProps} >CHANGE</button>
        <InSide outsideProps={outsideState}/>
      </div>
    )
  }
}

class InSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      insideState: props.outsideProps
    };
  }

  render() {
    const { insideState } = this.state;
    const { outsideProps } = this.props
    return (
      <div>
        {`insideState: ${insideState}`}
        <br />
        {`outsideProps: ${outsideProps}`}
      </div>
    )
  }
}

export default OutSide;