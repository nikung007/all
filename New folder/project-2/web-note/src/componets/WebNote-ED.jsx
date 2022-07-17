import React from 'react';
import { EditOutlined , DeleteOutlined} from '@ant-design/icons';

import "./WEbnote.css" ;

const WebNoteED = (props) => {
    const {edit,remove,foundUsers,serch,allData} = props
    return (
        <div>
        {
            allData.length > 1 ? (
                <div className='serch-div'>
                     <h4>Serch-Note</h4>
                     <input type="text" className='serch-input' onChange={serch}></input>
                </div>
                ) : ( null )
        }
            <div className='data'>
                        {foundUsers && foundUsers.length > 0 ?  
                            (
                                foundUsers.map((element) => (
                                    <div className='show-data'>
                                        <h4>{element.hedding}</h4>
                                        <pre>{element.description}</pre>
                                        <div className='btn-ed-del'>
                                            <EditOutlined className='btn' onClick={() => edit(element.id)} />
                                            <DeleteOutlined className='btn' onClick={() => remove(element.id)} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1>No results found!</h1>
                            )}
                    </div>
        </div>

    );
}

export default WebNoteED;
