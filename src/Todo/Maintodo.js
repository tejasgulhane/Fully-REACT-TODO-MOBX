import React, { useEffect, useState } from "react";
import Todo from './Todo'
import { observer } from 'mobx-react'
import { useNavigate } from "react-router-dom";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Indexstore } from "../store/Indexstore";

const { Search } = Input;

const Maintodo = observer(() => {

  const [inputvalue , setinputvalue] = useState();
  const [editbtn , seteditbtn] = useState(false);

  const store = Indexstore()

  const navigate = useNavigate();

  const addtotodo = (values) => {
    console.log(values);
    if(store.todostore.showtodo.includes(values)){
      alert('opps')
    }else{
    store.todostore.addtodo(values);
    }
    setinputvalue("")
  };

  useEffect(() => {
    const isAuthenticated=localStorage.getItem('isAuthenticated')
    if ( !isAuthenticated) {
      navigate("/login")
    }
    else{
      navigate("/todos")
    }
    },[]
  )

  const gotologout =()=>{ 
    store.Authstore.signout()
    navigate('/login')
  }
  const edit =(val) => {
    setinputvalue(val)
    store.todostore.edittodo(val)
    seteditbtn(true)
  }
  const edittodo =() => {
      store.todostore.edittodoarr(inputvalue)
      seteditbtn(false)
      setinputvalue("");
  }

  return (
    <>
    <>
      <div className="App">
        <h1>TO DO APP</h1>
        
        <Input placeholder="TODO..."
        value={inputvalue}
        onChange={(e) => {
        setinputvalue(e.target.value)

        }}
        style={{width:"50%" ,marginRight:"5px"}}
        />
        {!editbtn && <button onClick={()=>addtotodo(inputvalue)} style={{width:"10%" ,marginRight:"35px" ,padding:"4px" , borderRadius:"5px"}}>Add</button>}
        { editbtn && <button onClick={()=>edittodo()} style={{width:"10%" ,marginRight:"35px" ,padding:"4px" , borderRadius:"5px"}}>Edit</button>}

        <button style={{width:"10%" ,marginRight:"35px" ,padding:"4px" , borderRadius:"5px" ,position:"relative" ,top:-45 ,right:-160,border:"none",cursor:"pointer" ,color:"#fff" , background:"purple"}} onClick={gotologout}>LOGOUT</button>
        
      </div>

      <div>
        <Todo store={store.todostore} edit={edit} />
      </div>
    </>
    </>
  );
}
)

export default Maintodo;