import React from "react";
import axios from 'axios';
import { Form, Input, Button, Row, Col} from 'antd';

const Signup = () => {
  const onFinish = values => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/user/signup/',
      headers: {}, 
      data: {
        name: values.fullname,
        email: values.email,
          password: values.password,
          password2: values.password2, 
      }
    })
    .then((response) => {
      if (response.data.error == null || response.data.error == ""){
        alert(response.data.success);
        window.location = "/signin";
      }
      else 
        alert(response.data.error);
    }, (error) => {
      console.log(error);
      alert("Cannot create account. Please try again later!")
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div style={{backgroundImage: "url('/bg_signin.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Row>
      <Col span={8}></Col>
      <Col span={8}>
          <div style={{ borderRadius: "5px", textAlign: 'center', boxShadow: " 0px 0px 24px 0px rgba(0,48,150,1)", marginBottom: "10px", marginTop: "10px",paddingBottom: "20px", paddingLeft: "15px", backgroundColor: 'white'}}>
            <img 
              src="/LogoSignin.png"
              style={{marginBottom: "-50px", marginTop: "-30px"}}
            ></img>
            <h1>Sign up</h1>
             
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Full name"
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input placeholder="Full name" style={{ width: '250px', marginLeft: "25px" }}/>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" style={{ width: '250px', marginLeft: "50px" }}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" style={{ width: '250px', marginLeft: "25px" }}/>
              </Form.Item>

              <Form.Item
                label="Confirm password"
                name="password2"
                rules={[{ required: true, message: 'Please input your password again!' }]}
              >
                <Input.Password placeholder="Confirm password" style={{ width: '250px', marginLeft: "-30px" }}/>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Sign up
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

export default Signup;