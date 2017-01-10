import React, { Component, PropTypes } from 'react';

class Welcome extends Component {

  // 构造器
  constructor(props) {
    super(props);
    this.state = {
      hello: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.speakCh = this.speakCh.bind(this);
  }

  // 生命周期函数
  componentDidMount() {
    this.setState({hello: 'hello'});
  }

  speakCh() {
    this.setState({hello: '你好'});
  }

  speakEn = () => {
    this.setState({hello: 'hello'});
  }

  speakEn = () => {
    return {a:'a'};
  }

  // 渲染页面的方法
  render() {
    const { hello } = this.state;
    const { name } = this.props;

    return <div>
      <button onClick={this.speakCh}>SPEAK CHINESE</button>
      <button onClick={this.speakEn}>SPEAK ENGLISH</button>
      <h1>{hello}, {name}</h1>
    </div>
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Welcome