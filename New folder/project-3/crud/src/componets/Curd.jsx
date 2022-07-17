import React,{useState} from 'react';
import { UserOutlined , PhoneOutlined , MailOutlined , ManOutlined , SmileOutlined,ContainerOutlined } from '@ant-design/icons';
import { Input ,Button ,Radio , Checkbox, Col, Row ,Cascader  } from 'antd';
import {useNavigate} from "react-router-dom"
import Hedder from './Hedder';
import "./curd.css"
import "antd/dist/antd.css"

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
    let FinalData = JSON.parse(localStorage.getItem("hello")) || [];

    const navigate = useNavigate();

    const [error1, setError1] = useState();
    const [error2, setError2] = useState();
    const [error3, setError3] = useState();
    const [error4, setError4] = useState();
    const [error5, setError5] = useState();
    const [error6, setError6] = useState();
    const [error7, setError7] = useState();

    const [values, setValue] = useState({key: new Date().getTime().toString(), fname:'', lname:'', phone:'', email:'', redio:'', chbox:'',options:'' });

    const onChange = (e) => {

        setError1(''); setError2(''); setError3(''); setError4(''); setError5(''); setError6('');  setError7(''); 

        setValue({...values,[e.target.name]: e.target.value});
        
    }
    const onChangeRedio = (Value) =>{

        setValue({...values,chbox:Value.join(', ')});

    }

    const select = (val) =>{  

        setValue({...values,options:val})
    }
    const OnSubmit =()=>{
// Start-----------------------------------------------Validation--------------------------------------------
        const emailRegex = /\S+@\S+\.\S+/;
        const phoneno = /^\d{10}$/;
        const regex = /^[A-Z].*$/;
        if(!values.fname){
            setError1('bg');
        }else if(!values.lname){
            setError2('bg');
        }else if(!values.phone){
            setError3('bg');
        }else if(!values.email){
            setError4('bg');
        }else if(!values.redio){
            setError5('Select Gender');
        }else if(!values.chbox){
            setError6('Erorr'); 
        }else if(!values.options){
            setError7('Erorr'); 
        }else if(!regex.test(values.fname)){
            setError1('bg');
        }else if(!regex.test(values.lname)){
            setError2('bg');
        }else if(!phoneno.test(values.phone)){
            setError3('bg');
        }else if (!emailRegex.test(values.email)){
            setError4('bg');
        }
        else{
            // ----------------------Page Change------------------------------------

            navigate("/table");
            //Start -------Data Set ---------------------------
            FinalData.push(values);
            localStorage.setItem("hello", JSON.stringify(FinalData));
            //End -------Data Set ---------------------------
        }
       }
       // End-----------------------------------------------Validation--------------------------------------------
    return (
        <div>
            <Hedder />  
            <div>
                <div className='form-add'>
                      <h1>Hello</h1>
                      <div className='fn'>
                        <UserOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Frist name" name='fname' onChange={onChange} value={values.fname} className={error1} />
                      </div>
                      <div className='ln'>
                        <Input placeholder="Enter a Last name" name='lname' onChange={onChange} value={values.lname} className={error2} />
                      </div>
                      
                      <div className='fn'>
                        <PhoneOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Phone Number" name='phone' onChange={onChange} value={values.phone} className={error3}/>
                      </div>
                      <div className='fn'>
                        <MailOutlined style={{ fontSize: '22px'}} />
                        <Input placeholder="Enter a Email Address" name='email' onChange={onChange} value={values.email} className={error4}/> 
                      </div>
                      <div className='rds'>
                            <ManOutlined style={{ fontSize: '22px'}}/>   
                            <div className='rd'>
                                <Radio.Group name='redio' onChange={onChange} value={values.redio} >
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                </Radio.Group>
                            </div>
                                    <p>{error5}</p>
                      </div> 
                     <div className='rds chr'>
                        <div className='ch' >
                            <SmileOutlined style={{ fontSize: '22px'}} />
                        </div>
                        <div >
                            <Checkbox.Group onChange={onChangeRedio} >
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
                           <p>{error6}</p>
                     </div>
                     <div className='sel' >
                        <ContainerOutlined style={{ fontSize: '22px'}}  />
                        <Cascader options={options} onChange={select} placeholder="Please select"/>
                        <p>{error7}</p>   
                     </div>
                      <div className='bt'>
                            <Button type="primary" onClick={OnSubmit} >Submit</Button>
                      </div>
                  </div>  
            </div>  
        </div>
    );
}

export default Curd;
