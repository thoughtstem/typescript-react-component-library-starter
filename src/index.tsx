import { useState } from 'react';

export function SimpleComponent(){
  const [text, setText] = useState("Click me")

  function handleClick(e){
    setText("Hello")    
  }
  return(<p onClick={handleClick}>{text}</p>)
}
