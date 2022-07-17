import React, {useState} from 'react';
import {Table} from 'antd';
import { Input,Button} from 'antd';
import { Space} from 'antd';
import Hedder from './Hedder';
import {Link} from "react-router-dom";
import { upDate} from './CommonDataStore';
import {DesktopOutlined , FormOutlined , DeleteOutlined} from '@ant-design/icons';
// import { GetArrayData } from './CommonDataStore';
import {editeData} from './CommonDataStore';

import "./curd.css"
import "antd/dist/antd.css"
const { Search } = Input;


const CurdData = () => {

  const [alldata,setAllData]=useState([])
  const deleteItem = (key) =>{
      const newData = alldata.filter((item)=>item.key !== key);

      // console.log("New-Dataaaaaaa------------>",newData);
      setAllData(newData);
      upDate(newData);
  };

  const edit = (key) =>{
    const editNew = alldata.find((ele) => ele.key === key)
    editeData(editNew);
    // console.log("pppppppppppppppppp----->",editNew);
  }


  // console.log("hwwwwww------>",alldata);
   const columns = [
        {
          title: 'First Name',
          dataIndex: 'fname',
          key: 'fname',
        },
        {
          title: 'Last Name',
          dataIndex: 'lname',
          key: 'lname',
        },
        {
          title: 'Email Address',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone Number',
          key: 'phone',
          dataIndex: 'phone',
        },
        {
          title: 'Gender',
          key: 'redio',
          dataIndex: 'redio',
        },
        {
          title: 'Hobbies',
          key: 'chbox',
          dataIndex: 'chbox',
        },
        {
          title: 'contry',
          key: 'options',
          dataIndex: 'options',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
            <Link to="/display"><DesktopOutlined className='icon' /></Link>
            <Link to="/edit"><FormOutlined className='icon' onClick={()=>edit(record.key)}/></Link>
            <DeleteOutlined className='icon' onClick={()=>deleteItem(record.key)} />
            </Space>
          ),
        },
      ];
    return (
        <div>
            <Hedder />
             <div>
                <div className='table-data'>
                    <div className='srch'>
                        <Search placeholder="input search text" enterButton />
                        <Button type="primary" className='crt'><Link to="/create">Create</Link></Button>
                    </div>
                    <div>
                        <Table columns={columns} dataSource={alldata} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurdData;