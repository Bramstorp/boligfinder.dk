import React from "react";
import axios from 'axios';
import { Form, Input, Button, Checkbox, Row, Col, Carousel  } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Signin = ({ login, isAuthenticated })=> {
  const onFinish = values => {
    login(values.email, values.password);
    if (isAuthenticated) window.location = "/";
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{backgroundImage: "url('/bg_signin.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Row>
      <Col span={9}></Col>
      <Col span={6}>
          <div style={{ borderRadius: "5px", textAlign: 'center', boxShadow: " 0px 0px 24px 0px rgba(0,48,150,1)", marginBottom: "10px", marginTop: "10px",paddingBottom: "20px", paddingLeft: "15px", backgroundColor: 'white'}}>
            <img 
              src="/LogoSignin.png"
              style={{marginBottom: "-50px", marginTop: "-30px"}}
            ></img>
            <h1>Sign in</h1>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" style={{ width: '220px', marginLeft: "30px" }}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" style={{ width: '220px', marginLeft: "5px" }}/>
              </Form.Item>

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={10}>
        </Col>
      </Row>
    </div>
  );
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Signin);