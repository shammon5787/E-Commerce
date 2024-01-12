import React, { useState } from 'react'
import Menu from './Menu'

const Buttons = (props) => {
    const [set, setItem] = useState(Menu);

    const filterItem = (catElem) =>{
        const updateitem = Menu.filter((curEem)=>{
            return curEem.category === catElem;
        });
        setItem(updateitem);
    }

  return (
    <>
    <div>
      <button style={{background:'blue', margin:'10px', padding:'8px', borderRadius:'5px', cursor:'pointer', color:'white'}} onClick={()=>filterItem('Fruits')}>{props.name} {props.bgcolor}</button>
    </div>
    <div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Buttons
