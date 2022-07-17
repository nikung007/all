import React,{useState} from 'react';
import { UserOutlined , PhoneOutlined , MailOutlined} from '@ant-design/icons';
import { Input ,Radio,Button } from 'antd';
import {Link} from "react-router-dom";
import Hedder from './Hedder';
import "./curd.css"
import "antd/dist/antd.css"


const Display = () => {
    const [values, setValue] = useState({id: new Date().getTime().toString(), fname:'', lname:'', phone:'', email:'', redio:'', });
    const onChange = (e) => {
      setValue({...values,[e.target.name]: e.target.value})
    }
    
    
    // console.log(values);
    return (
        <div>
            <Hedder />  
            <div>
                <div className='form-add'>
                      <h1>Hello</h1>
                      <div className='fn'>
                        <UserOutlined />
                        <Input placeholder="Enter a Full name" name='fname' onChange={onChange} value={values.fname} />
                      </div>
                      <div className='ln'>
                        <Input placeholder="Enter a Last name" name='lname' onChange={onChange} value={values.lname} />
                      </div>
                      <div className='fn'>
                        <PhoneOutlined />
                        <Input placeholder="Enter a Phone Number" name='phone' onChange={onChange} value={values.phone}/>
                      </div>
                      <div className='fn'>
                        <MailOutlined />
                        <Input placeholder="Enter a Email Address" name='email' onChange={onChange} value={values.email}/> 
                      </div>
                      <div className='rd'>
                        <Radio.Group name='redio' onChange={onChange} value={values.redio}>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
                        </Radio.Group>
                      </div>
                      <div className='bt'>
                        <Button type="primary"><Link to="/">Back</Link></Button>
                      </div>
                  </div>  
            </div>
        </div>
    );
}

export default Display;
