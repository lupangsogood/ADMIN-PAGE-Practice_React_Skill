import React, { Component } from 'react';
// import { Link,withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Login extends Component {


  state = {
    username: '',
    password: ''
  }

  loginBtn =()=>{
    // console.log(this.state.username)
    // console.log(this.state.password)
    
    this.props.history.push('/dashboard')
  }

  inputTxtLogin=(e)=>{
    var name = e.target.name
    var value = e.target.value
    this.setState({
      [name]:value
    })

  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText >
                          <i className="icon-user"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input name="username" type="text" placeholder="Username" autoComplete="username" onChange={this.inputTxtLogin}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input name="password" type="password" placeholder="Password" autoComplete="current-password" onChange={this.inputTxtLogin} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.loginBtn} >Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
