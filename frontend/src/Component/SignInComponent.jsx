import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Carousel  } from 'antd';

const Signin = () => {
  const onFinish = values => {
    login(values.email, values.password);
    if (isAuthenticated) window.location = "/";
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    //background: '#364d79',
    border: '2px solid #fff',
    marginTop: '12px'
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
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" style={{ width: '220px' }}/>
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
        {/* <Carousel autoplay dots={false}>
          <div>
            <img style={contentStyle} src="https://images.adsttc.com/media/images/5cdc/9130/284d/d19e/3300/032a/slideshow/_FI.jpg"></img>
          </div>
          <div>
            <img style={contentStyle} src="https://cdn-m2.esoftsystems.com/10100019/CI-OH033/10160879836/220639224/BEST_CROP/3000/2000/72/Paulun_Bolig_CI-OH033_015.jpg"></img>
          </div>
          <div>
            <img style={contentStyle} src="https://cdn-m2.esoftsystems.com/10100019/CI-OH033/10160879836/220661047/BEST_CROP/3000/2000/72/Paulun_Bolig_CI-OH033_021.jpg"></img>
          </div>
        </Carousel> */}
        </Col>
      </Row>
    </div>
  );
};

export default Signin;