import logo from './logo.svg';
import './App.css';
import Inp from './component/Inp';
import List from './component/List';
import { useState } from 'react';



function App() {
  const [ListTodo,setListTodo] = useState([]);
  let addlist = (inputText)=>{
    setListTodo([...ListTodo,inputText])
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...ListTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
     <div className='center-container'>
        <Inp addlist={addlist} />
        <h1 className='app-heading'>Todo</h1>
      <hr/>
        {
          ListTodo.map((listItem,i)=>{
            return(
              <List Key={i} index={i} item={listItem}  deleteItem={deleteListItem}/>
            )
          })
        }
    </div> 
    </div>
  );
}

export default App;
