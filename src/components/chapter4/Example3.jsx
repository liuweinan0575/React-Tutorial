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

InSide.defaultProps = {
  outsideProps: 'props is set inside'
};

export default OutSide;