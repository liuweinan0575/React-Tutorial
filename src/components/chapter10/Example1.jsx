import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl  } from 'react-bootstrap';
import { DateTimePicker, DropdownList, Multiselect } from 'react-widgets';

class Example1 extends React.Component {

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

  render() {

    const { userName, password } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col md={4} mdOffset={4}>
            <form>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-user-o"></i></InputGroup.Addon>
                  <FormControl type="text" value={userName} onChange={this.onFieldChange1} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><i className="fa fa-lock"></i></InputGroup.Addon>
                  <FormControl type="password" value={password} onChange={this.onFieldChange2} />
                </InputGroup>
              </FormGroup>
              <Button onClick={()=>{console.log(this.state)}}>
                Submit
              </Button>
             </form> 
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Example1;
