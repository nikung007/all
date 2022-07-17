import React,{useState} from 'react';
import { UserOutlined , PhoneOutlined , MailOutlined , ManOutlined , SmileOutlined,ContainerOutlined } from '@ant-design/icons';
import { Input ,Button ,Radio , Checkbox, Col, Row ,Cascader  } from 'antd';
import {Link} from "react-router-dom";
// import { SetArrayData } from './CommonDataStore';
import {GetArrayData} from './CommonDataStore'
import Hedder from './Hedder';
import "./curd.css"
import "antd/dist/antd.css"
// import { SetArrayData} from './CommonDataStore';
import { editD } from './CommonDataStore';


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


const Edit = () => {
  
  const [values, setValue] = useState(editD());

  const obj = {...values}

  const [edvalues, setEdValue] = useState({key:obj[0]?.key, fname:obj[0]?.fname, lname:obj[0]?.lname, phone:obj[0]?.phone, email:obj[0]?.email, redio:obj[0]?.redio, chbox:obj[0]?.chbox,options:obj[0]?.options, });

  const onChange = (e) => {
    setEdValue({...edvalues,[e.target.name]: e.target.value})
  }
  const onChangeRedio = (Value) =>{
    setEdValue({...edvalues,chbox:Value.join(', ')})
  }
  const select = (val) =>{    
    setEdValue({...edvalues,options:val})
  }
  
  const upDate =(key)=>{
    console.log("key---------->", key);
    console.log(GetArrayData());
    // SetArrayData(edvalues);
  }

  return (
      <div>
          <Hedder />  
          <div>
              <div className='form-add'>
                    <h1>Edit-Data</h1>
                    <div className='fn'>
                      <UserOutlined style={{ fontSize: '22px'}} />
                      <Input placeholder="Enter a Full name" name='fname' onChange={onChange} value={edvalues?.fname} />
                    </div>
                    <div className='ln'>
                      <Input placeholder="Enter a Last name" name='lname' onChange={onChange} value={edvalues?.lname} />
                    </div>
                    <div className='fn'>
                      <PhoneOutlined style={{ fontSize: '22px'}} />
                      <Input placeholder="Enter a Phone Number" name='phone' onChange={onChange} value={edvalues?.phone}/>
                    </div>
                    <div className='fn'>
                      <MailOutlined style={{ fontSize: '22px'}} />
                      <Input placeholder="Enter a Email Address" name='email' onChange={onChange} value={edvalues?.email}/> 
                    </div>
                    <div className='rds'>
                          <ManOutlined style={{ fontSize: '22px'}}/>   
                          <div className='rd'>
                              <Radio.Group name='redio' onChange={onChange} value={edvalues?.redio}>
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
                          <Checkbox.Group defaultValue={edvalues?.chbox} onChange={onChangeRedio}>
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
                      <Cascader options={options} onChange={select} defaultValue={edvalues?.options} placeholder="Please select"/>
                   </div>
                    <div className='bt'>
                      <Button type="primary" onClick={()=>upDate(edvalues?.key)}><Link to="/table">Update</Link></Button>
                    </div>
                </div>  
          </div>
      </div>
  );
}

export default Edit;
