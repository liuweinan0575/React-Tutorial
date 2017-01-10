import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import routers from './components';
import App from './app.jsx';
import Chapter5 from './components/chapter5/Chapter5';
import Chapter6 from './components/chapter6/Chapter6';


// const routes = {
    //   path: '/',
    //   component: App,
    //   indexRoute: { component: Chapter6 },
    //   childRoutes: [
    //     { path: 'about', component: Chapter6 },
    //     { path: 'chapter5', component: Chapter5 },
    //   ]
    // }

    // <Router history={hashHistory}>
    //     <Route path="/" component={App} >
    //       <IndexRoute component={routers[0].component} />
    //       {routers.map((route, i)=><Route key={i} path={route.key} component={route.component} />)}
    //     </Route>
    //   </Router>

export default class Root extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hash: 'chapter5'
  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener("hashchange", this.doRouterInFront);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('hashchange', this.doRouterInFront);
  // }

  // doRouterInFront = () => {
  //   const { hash } = window.location;
  //   // console.log(hash.substr(2))
  //   this.setState({hash: hash.substr(2)});
  // }

  // getCompByHash(hash) {
  //   const myComponent = routers.filter((route)=>route.key===hash)[0];
  //   // console.log('myComponent', myComponent)
  //   return <div><myComponent.component /></div>;
  // }
  
  // render() {

    

  //   const { hash } = this.state;
  //   return (
  //     <div>
  //       {this.getCompByHash(hash)}
  //     </div>
      
  //   )
  // }

  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={routers[0].component} />
            {routers.map((route, i)=><Route key={i} path={route.key} component={route.component} />)}
          </Route>
      </Router>
    )
  }
}