import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root.jsx';

render( <AppContainer><Root/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./root.jsx', () => {
    const Root = require('./root.jsx').default;
    render(
      <AppContainer>
        <Root/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
