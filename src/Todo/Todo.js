import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Divider, List, Typography } from 'antd';
import { Button } from 'antd';
import './todo.css'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Pagination from '../Pagination/Pagination';
const { Search } = Input;

const Todo = observer(({ store , edit }) => {

   
    const [data, showdata] = useState(store.showtodo);
    
   
    let [currentpage, setcurrentpage] = useState(1);
    let [postperpage] = useState(5);


    const indexoflastpost = currentpage * postperpage;
    const indexoffirstpost = indexoflastpost - postperpage;

    const currentpost = data.slice(indexoffirstpost,indexoflastpost)

    localStorage.setItem('todoitem',JSON.stringify(store.showtodo));

    

    let pushdata = JSON.parse(localStorage.getItem('todoitem'))
    console.log(pushdata, "pushdata");

    useEffect(() => 
    {
    }, [pushdata]
    )

 
    const removetodo = (name) => {
        store.deltodo(name)
        console.log(name);
    }

   

    const onSearch = (value) => {
        if (value.length == 0) {
            showdata(store.showtodo)
        }
        else {
            let fdata = store.showtodo.filter((todo) => {
                if (todo.includes(value)) {
                    return todo
                }
            })
            console.log(fdata);
            showdata(fdata)
        }

    }

    const showpage = (val) => {
        setcurrentpage(val)
    }
    
    return (
        <>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200, position: "relative", right: "-85%", top: -33 }} />
            {currentpost ? currentpost.map((item) => {
                return (
                    <div className='todo_list'>
                        <div>
                            <List.Item key={item}>{item}</List.Item>
                        </div>
                        <div className='todo_list_buttons'>
                            <Button type="primary" onClick={() => removetodo(item)}>Del</Button>
                            <Button type="dashed" onClick={() => edit(item)}>Edit</Button>
                        </div>
                    </div>
                )
            }) : <h1>NO data avilable...</h1>}

           <Pagination store={store} postperpage={postperpage} showpage={showpage}/>

        </>
    )
}
)

export default Todo;