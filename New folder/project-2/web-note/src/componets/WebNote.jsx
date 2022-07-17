import React, { useState, useEffect } from 'react';
import { PlusCircleFilled, CheckSquareOutlined} from '@ant-design/icons';
import WebNoteED from "./WebNote-ED"

import "./WEbnote.css";

// const getSession =() =>{
//     let allList = sessionStorage.getItem('AllList');
//     if(allList){
//         return JSON.parse(sessionStorage.getItem('AllList'));
//     }
//     else{
//         return [];
//     }
// } 
const getSession = () => {
    let allList = localStorage.getItem('AllList');
    if (allList) {
        return JSON.parse(localStorage.getItem('AllList'));
    }
    else {
        return [];
    }
}

const WebNote = () => {

    const [inputHeadding, setInputHeadding] = useState();
    const [inputDescripition, setInputDescripition] = useState();
    const [error1, setError1] = useState();
    const [error2, setError2] = useState();
    const [toggle, setToggle] = useState(true);
    const [editVal, setEditVal] = useState(null);
    const [allData, setAllData] = useState(getSession());
    const [foundUsers, setFoundUsers] = useState(allData);

    React.useEffect(()=>{},[allData])

    const addItems = () => {
        if (!inputHeadding && !inputDescripition) {
            setError1('Enter a Value of Hedding');
            setError2('Enter a Value of Description');
        }
        else if (!inputHeadding) {
            setError1('Enter a Value of Hedding');
        }
        else if (!inputDescripition) {
            setError2('Enter a Value of Description');
        }
        else if (inputHeadding && inputDescripition && !toggle) {
            setAllData(
                allData.map((element) => {
                    if (element.id === editVal) {
                        return { ...element, hedding: inputHeadding, description: inputDescripition }
                    }
                    return element;
                })
            )
            setFoundUsers(
                allData.map((element) => {
                    if (element.id === editVal) {
                        return { ...element, hedding: inputHeadding, description: inputDescripition }
                    }
                    return element;
                })
            )
            setToggle(true)
            setInputHeadding('');
            setInputDescripition('');
        }
        else {
            const fild = {
                id: new Date().getTime().toString(),
                hedding: inputHeadding,
                description: inputDescripition
            }
            setAllData([...allData, fild])
            setFoundUsers([...allData, fild])
            setInputHeadding('');
            setInputDescripition('');
            setEditVal(null);
        }
    }

    const edit = (id) => {
        const newEdit = allData.find((element) => {
            return element.id === id
        });
        setInputHeadding(newEdit.hedding)
        setInputDescripition(newEdit.description)
        setToggle(false);
        setEditVal(id);
    }

    const remove = (id) => {
        const updateRemove = allData.filter((element) => {
            return id !== element.id;
        });
        setAllData(updateRemove);
        setFoundUsers(updateRemove);
    }

    const serch = (e) => {
            const keyword = e.target.value;
            if (keyword !== '') {
                const result = allData.filter((element) => {
                    return element.hedding.toLowerCase().startsWith(keyword.toLowerCase());
                });
                setFoundUsers(result);   
        
            }
            else {
                setFoundUsers(allData);
            }
        }



    // useEffect(()=>{
    //     sessionStorage.setItem('AllList',JSON.stringify(allData))
    // },[allData])

    useEffect(() => {
        localStorage.setItem('AllList', JSON.stringify(allData))
    }, [allData])

    return (
        <div>
            <div className='main'>
                <div className='main-box'>
                    <h1>Web-Note</h1>
                    <div className='input-data'>
                        <input
                            type="text"
                            className='input-head'
                            placeholder='Enter a Hendiing'
                            value={inputHeadding}
                            onChange={(e) => {
                                setInputHeadding(e.target.value)
                                setError1('')}
                            }
                        />
                        <p>{error1}</p>
                        <textarea
                            type='text'
                            className='input-des'
                            placeholder='Enter a Descripation'
                            value={inputDescripition}
                            onChange={(e) => {
                                setInputDescripition(e.target.value)
                                setError2('')}
                            }
                        />
                        <p>{error2}</p>
                        {
                            toggle ? <PlusCircleFilled className='btn' onClick={addItems} /> : <CheckSquareOutlined className='btn' onClick={addItems} />
                        }
                    </div>
                </div>
            </div>
            <WebNoteED edit={edit} remove={remove} foundUsers={foundUsers}  serch={serch} allData={allData}/>
        </div>

    );
}

export default WebNote;
