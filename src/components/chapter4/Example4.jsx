import React from 'react';

class OutSide extends React.Component {

  render() {
    return (
      <div>
        <InSide />
      </div>
    )
  }
}

class InSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      insideState: 'state is set inside'
    };
  }

  changeOutsideProps = () => {
    try {
      this.props.outsideProps = 'try set';
    } catch (e) {
      console.log('属性不能被重新设置');
    }
    console.log(this.setState({insideState: 'state is changed'}));
  }

  render() {
    const { insideState } = this.state;
    const { outsideProps } = this.props
    return (
      <div>
        <button onClick={this.changeOutsideProps} >CHANGE</button>
        <br />
        {`insideState: ${insideState}`}
        <br />
        {`outsideProps: ${outsideProps}`}
      </div>
    )
  }
}

InSide.defaultProps = {
  outsideProps: 'props is set inside'
};

export default OutSide;