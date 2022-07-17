import React,{useState} from 'react';
import { UserOutlined , PhoneOutlined , MailOutlined , ManOutlined , SmileOutlined,ContainerOutlined } from '@ant-design/icons';
import { Input ,Button ,Radio , Checkbox, Col, Row ,Cascader  } from 'antd';
import {Link} from "react-router-dom";
import Hedder from './Hedder';
import "./curd.css"
import "antd/dist/antd.css"
import { SetArrayData} from './CommonDataStore';

const options = [
    {
      value: 'India',
      label: 'India',
    },
    {
        value: 'Austria',
        label: 'Austria',
    },
    {
        value: 'Egypt',
        label: 'Egypt',
    },
    {
        value: 'Indonesia',
        label: 'Indonesia',
    },
    {
        value: 'Maldives',
        label: 'Maldives',
    },
    {
        value: 'New Zealand',
        label: 'New Zealand',
    },
    {
        value: 'Russia',
        label: 'Russia',
    }, 
]


const Curd = () => {
    const [values, setValue] = useState({key: new Date().getTime().toString(), fname:'', lname:'', phone:'', email:'', redio:'', chbox:'',options:'' });
    const onChange = (e) => {
      setValue({...values,[e.target.name]: e.target.value})
    }
    const onChangeRedio = (Value) =>{
        setValue({...values,chbox:Value.join(', ')})
    }

    const select = (val) =>{    
        setValue({...values,options:val})
    }
    const OnSubmit =()=>{
        SetArrayData(values);
       }
    return (
        <div>
            <Hedder />  
            <div>
                <div className='form-add'>
                      <h1>Hello</h1>
                      <div className='fn'>
                        <UserOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Full name" name='fname' onChange={onChange} value={values.fname} />
                      </div>
                      <div className='ln'>
                        <Input placeholder="Enter a Last name" name='lname' onChange={onChange} value={values.lname} />
                      </div>
                      <div className='fn'>
                        <PhoneOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Phone Number" name='phone' onChange={onChange} value={values.phone}/>
                      </div>
                      <div className='fn'>
                        <MailOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Email Address" name='email' onChange={onChange} value={values.email}/> 
                      </div>
                      <div className='rds'>
                            <ManOutlined style={{ fontSize: '22px'}}/>   
                            <div className='rd'>
                                <Radio.Group name='redio' onChange={onChange} value={values.redio}>
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                </Radio.Group>
                            </div>
                      </div> 
                     <div className='rds chr'>
                        <div className='ch'>
                            <SmileOutlined style={{ fontSize: '22px'}} />
                        </div>
                        <div>
                            <Checkbox.Group onChange={onChangeRedio}>
                                    <Row>
                                        <Col span={10}>
                                            <Checkbox value="Cricket">Cricket</Checkbox>
                                        </Col>
                                        <Col span={10}>
                                            <Checkbox value="Baseball">Baseball</Checkbox>
                                        </Col>
                                        <Col span={10}>
                                            <Checkbox value="Football">Football</Checkbox>
                                        </Col>
                                        <Col span={10}>
                                            <Checkbox value="Hokey">Hokey</Checkbox>
                                        </Col>
                                        <Col span={10}>
                                            <Checkbox value="Khokho">Khokho</Checkbox>
                                        </Col>
                                        <Col span={10}>
                                            <Checkbox value="Kabbdi">Kabbdi</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                        </div>
                     </div>
                     <div className='sel'>
                        <ContainerOutlined style={{ fontSize: '22px'}}  />
                        <Cascader options={options} onChange={select} placeholder="Please select"/>
                     </div>
                      <div className='bt'>
                        <Button type="primary" onClick={OnSubmit}><Link to="/table">Submite</Link></Button>
                      </div>
                  </div>  
            </div>
        </div>
    );
}

export default Curd;
