import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl  } from 'react-bootstrap';
import { DateTimePicker, DropdownList, Multiselect } from 'react-widgets';

class Example3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  onFieldChange = (fieldName, fieldValue) => {
    this.setState({[fieldName]: fieldValue});
  }

  // (event)=>this.onFieldChange('userName', event.target.value)

  // onFieldChange1 = (e) => {
  //   const value = e.target.value;
  //   this.setState({userName: value});
  // }

  // onFieldChange2 = (e) => {
  //   const value = e.target.value;
  //   this.setState({password: value});
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {

    const { userName, password } = this.state;
    return (
      <Grid style={{marginTop: 10}} fluid>
        <Row style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Col md={4} mdOffset={4}>
            <form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-user-o"></i></InputGroup.Addon>
                  <FormControl type="email" value={userName} onChange={(e) => this.onFieldChange('userName', e.target.value)} placeholder="Input your email" required/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-lock"></i></InputGroup.Addon>
                  <FormControl type="password" value={password} onChange={(e) => this.onFieldChange('password', e.target.value)} placeholder="Input your password" required/>
                </InputGroup>
              </FormGroup>
              <Button type="submit">
                SUBMIT
              </Button>
              <Button onClick={()=>{this.setState({userName: '', password:''})}}>
                RESET
              </Button>
             </form> 
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Example3;
