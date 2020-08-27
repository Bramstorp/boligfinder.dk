import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Row, Col, Select } from 'antd';

const ListingForm = () => {
    let type = 'FOR_SALE';
    const [formData, setFormData] = useState({
        slug: '',
        agent: null,
        title: '',
        description: '',
        sale_type: type,
        price: '',
        main_image: null
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { slug, agent, title, description, sale_type, price, main_image} = formData;

    const onFinish = values => {
        
        const config = {
            headers: {
            }
        };

        axios.post("http://127.0.0.1:8000/api/listing/create/", { slug, agent, title, description, sale_type, price, main_image }, config)
        .then(response => {
            if (response.data.error == null || response.data.error == ""){
                alert('Added a new listing!');
                window.location = "/";
            }
            else 
                alert(response.data.error);
        })
        .catch(error => {
            console.log(error);
            alert("Cannot add a new listing. Please try again later!")
        })
    };
    
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    function onTypeChange(value) {
        type = value;
    }
    function onSubmit(){
        var form = document.getElementById("form1").value;
        console.log(form)
    }

    const { Option } = Select;
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
                <h2>Add listing</h2>
                 
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Slug"
                    name="slug"
                    rules={[{ required: true, message: 'Please input slug!' }]}
                  >
                    <Input placeholder="Slug" style={{ width: '250px', marginLeft: "27px" }} name="slug" onChange={e => onChange(e)}/>
                  </Form.Item>
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                  >
                    <Input placeholder="Title" style={{ width: '250px', marginLeft: "27px" }} name="title" onChange={e => onChange(e)}/>
                  </Form.Item>
                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input description!' }]}
                  >
                    <Input.TextArea placeholder="Description" style={{ width: '250px', marginLeft: "-20px" }}  name="description" onChange={e => onChange(e)}/>
                  </Form.Item>
    
                  <Form.Item
                    label={<div><span style={{color: 'red', fontFamily: 'Roboto', fontSize: '16px'}}>*</span><span> Sale type</span></div>}
                    name="sale_type"
                    // rules={[{ required: true, message: 'Please select sale type!' }]}
                  >
                    <Select defaultValue="FOR_SALE" style={{ width: '250px', marginLeft: "-5px" }} onChange={onTypeChange}>
                        <Option value="FOR_SALE">For Sale</Option>
                        <Option value="FOR_RENT">For Rent</Option>
                    </Select>
                  </Form.Item>
    
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input price!' }]}
                  >
                    <Input placeholder="Price" style={{ width: '250px', marginLeft: "20px" }}  name="price" onChange={e => onChange(e)}/>
                  </Form.Item>

                  <Form.Item
                    label="Photo"
                    name="main_image"
                    rules={[{ required: true, message: 'Please upload photo!' }]}
                  >
                    <input type='file' style={{marginLeft: "100px" }} name="main_image"></input>
                  </Form.Item>
                  <Form.Item >
                    <Button type="primary" htmlType="submit">
                      Submit
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
    )
}

export default ListingForm