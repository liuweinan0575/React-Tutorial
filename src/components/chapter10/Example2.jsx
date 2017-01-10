import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl  } from 'react-bootstrap';
import { DateTimePicker, DropdownList, Multiselect } from 'react-widgets';

class Example2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  // onFieldChange = () => {
  //   this.setState({})
  // }

  // (event)=>this.onFieldChange('userName', event.target.value)

  onFieldChange1 = (e) => {
    const value = e.target.value;
    this.setState({userName: value});
  }

  onFieldChange2 = (e) => {
    const value = e.target.value;
    this.setState({password: value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {

    const { userName, password } = this.state;
    return (
      <Grid style={{marginTop: 10, background: '#f7f7f7'}} fluid>
        <Row style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Col md={4} mdOffset={4}>
            <form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-user-o"></i></InputGroup.Addon>
                  <FormControl type="email" value={userName} onChange={this.onFieldChange1} placeholder="Input your email" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-lock"></i></InputGroup.Addon>
                  <FormControl type="password" value={password} onChange={this.onFieldChange2} />
                </InputGroup>
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
             </form> 
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Example2;
