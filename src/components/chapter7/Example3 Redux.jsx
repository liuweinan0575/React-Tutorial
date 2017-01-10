import React, { Component } from "react";

class MyComponent extends Component {

  render() {
    const { mystate, actions } = this.props;
    return (
      <div>
        <button onClick={actions} >CHANGE OUTSIDE</button>
        <hr />
        {mystate}
      </div>
    )
  }
}

class MyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mystate: 'abc'
    }
  }

  actions = () => {
    this.setState({mystate: 'def'})
  }

  render() {
    return (
      <div>
        <MyComponent mystate={this.state.mystate} actions={this.actions} />
      </div>
    )
  }
}

export default MyContainer;
