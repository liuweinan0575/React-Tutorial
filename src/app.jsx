import styles from './index.scss';
import React from 'react';
import { Navbar, NavItem , Nav, Grid } from 'react-bootstrap';
import { Link } from 'react-router';
import 'react-widgets/lib/scss/react-widgets.scss';
import 'font-awesome/css/font-awesome.min.css';
import routers from './components';
// import Chapter3 from './components/chapter3/Chapter3';
// import Chapter4 from './components/chapter4/Chapter4';
// import Chapter5 from './components/chapter5/Chapter5';
// import Chapter6 from './components/chapter6/Chapter6';
// import Chapter7 from './components/chapter7/Chapter7';


// <div>
//   <div>This is the header</div>
// </div>

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar style={{backgroundColor: '#eee', borderRadius: 0, marginBottom: 10}} >
          <Navbar.Header>
            <Navbar.Brand style={{color: '#00d8ff'}}>
              React入门
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight style={{float: 'left', marginTop: 6, marginLeft: 50}} >
            {routers.map((route, i)=><NavItem style={{float: 'left', marginRight: 10}} key={i} href={'#/'+route.key}>{route.key}</NavItem>)}
         </Nav>
        </Navbar>
        <div >
        {children}
        </div>
      </div>
    )
  }
}
