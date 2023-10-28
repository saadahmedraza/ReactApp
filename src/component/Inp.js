import React, { useState } from 'react'

function Inp(props) {
    const [inputText,setInputText] = useState('');
  return (
    <div className='input-container'>
        <input type='text'  className='input-box-todo' placeholder='Enter Your Todo' value={inputText} onChange={e=>{
            setInputText(e.target.value)
        }}/>
        <button className='add-btn'onClick={()=>{
            props.addlist(inputText)
            setInputText("")
        }}>+</button>
    </div>
  )
}

export default Inp