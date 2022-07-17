import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Input, Button , Modal  } from 'antd';
import { Space } from 'antd';
import Hedder from './Hedder';
import { Link } from "react-router-dom";
import { DesktopOutlined, FormOutlined, DeleteOutlined  } from '@ant-design/icons';


import "./curd.css"
import "antd/dist/antd.css"
const { Search } = Input;


const CurdData = () => {
  
  const resvData = JSON.parse(localStorage.getItem("hello"));
  
  const [srech,setSrech]=useState(resvData);
  
  const [local, setLocal] = useState(false)
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dis,setDis]=useState([]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    defaultPageSize: 5, 
    showSizeChanger: true, 
    pageSizeOptions: ['5', '10', '15','20','25','30']
  });

  useEffect(() => {
    
    if (local) {

      setLocal(false);
      
    }
    
  }, [local]);
  
  // Start ----------------------Delete--------------------------------------
  const deleteItem = (key) => {
    
    const newData = resvData.filter((item) => item.key !== key);

    console.log("Deleted------",newData);

    setSrech(newData);
    
    localStorage.setItem("hello", JSON.stringify(newData));
    
    setLocal(true)
  };
  // End ----------------------Delete----------------------------------------

  // Start ----------------------Edit----------------------------------------
  
  const edit = (key) => {

  }
  // End ----------------------Edit------------------------------------------

  //Start-------------------- Display----------------------------------------


  const showModal = (key) => {

    const obj =  resvData.find((ele) => ele.key === key);

    setDis(obj);

    setIsModalVisible(true);
  };

  const handleOk = () => {

    setIsModalVisible(false);
  };

  const handleCancel = () => {

    setIsModalVisible(false);
  };
  //End-------------------- Display------------------------------------------

  // Start-----------------Serch---------------------------------------------


    const change = (e) =>{

      const keyword = e.target.value;

      if (keyword !== '') {

        const result = resvData.filter((element) => {

            return element.fname.toLowerCase().startsWith(keyword.toLowerCase());

            });

            setSrech(result); 
            
            console.log("rrrrrrrrrrrr----",result); 

          } else {

        setSrech(resvData);
    
      }
    }
  // End-----------------Serch----------------------------------------------------------------------------

  // Start-------------------------------------------Table------------------------------------------------
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

         <DesktopOutlined className='icon' onClick={()=>showModal(record.key)} />

         <Modal title="Customer information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className='show-data'>
                <h4>Full Name</h4>
                <pre>{dis.fname}  {dis.lname}</pre>
                <h4>Email</h4>
                <pre>{dis.email}</pre>
                <h4>Phone Number</h4>
                <pre>{dis.phone}</pre>
                <h4>Gender</h4>
                <pre>{dis.redio}</pre>
                <h4>Hobbies</h4>
                <pre>{dis.chbox}</pre>
                <h4>Country</h4>
                <pre>{dis.options}</pre>
            </div>
        </Modal>

          <Link to={`/edit/?id=${record.key&&record.key}`}><FormOutlined className='icon' onClick={() => edit(record.key)} /></Link>

          <DeleteOutlined className='icon' onClick={() => deleteItem(record.key)} />

        </Space>
      ),
      // render: (_, record) => (
        //   <Space size="middle">
        //     <Link to="/display"><DesktopOutlined className='icon' /></Link>
      //     <Link to={`/edit/${record.key&&record.key}`}><FormOutlined className='icon' onClick={() => edit(record.key)} /></Link>
      //     <DeleteOutlined className='icon' onClick={() => deleteItem(record.key)} />
      //   </Space> 
      // ),
    },
  ];
  // End-------------------------------------------Table------------------------------------------------

// Start---------------------------------------------Pagenation-----------------------------------------


  const fetchData = (params = {}) => {

    setSrech(srech);

    setPagination({
      ...params.pagination,
      total: 100
    });
  };

  useEffect(() => {
    fetchData({
      pagination });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters
    });
  };
// End---------------------------------------------Pagenation-------------------------------------------
  

  return (
    <div>
      <Hedder />
      <div>
        <div className='table-data'>
          <div className='srch'>
            <Search placeholder="input search text"  onChange={change} enterButton />
            <Button type="primary" className='crt'><Link to="/create">Create</Link></Button>
          </div>
          <div>
            <Table 
                  columns= {columns} 
                  dataSource= {srech}
                  pagination={pagination}
                  onChange={handleTableChange} />                                           
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurdData;