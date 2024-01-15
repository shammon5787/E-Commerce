import React, { useState } from 'react'
import Menu from './Menu'

const ImageCategory = () => {

    const [items, setItems] = useState(Menu)

    const filterItem = (catElem) =>{
        const updateitem = Menu.filter((curEem)=>{
            return curEem.category === catElem;
        });
        setItems(updateitem);
    }

    return (
        <div>
            this is images
            <hr />
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <button style={{backgroundColor:'blue', color:'white', margin:'10px', padding:'8px', borderRadius:'8px', cursor:'pointer'}} onClick={()=>filterItem('Fruits')}>Lunch</button>
                <button style={{backgroundColor:'blue', color:'white', margin:'10px', padding:'8px', borderRadius:'8px', cursor:'pointer'}} onClick={()=>filterItem('Laptops')}>BreakFast</button>
                <button style={{backgroundColor:'blue', color:'white', margin:'10px', padding:'8px', borderRadius:'8px', cursor:'pointer'}} onClick={()=> filterItem('Shirts')}>Dinner</button>
                <button style={{backgroundColor:'blue', color:'white', margin:'10px', padding:'8px', borderRadius:'8px', cursor:'pointer'}} onClick={()=>setItems(Menu)}>All</button>

            </div>
            <div style={{ display: 'flex', flexWrap:'wrap' }}>
                {
                    items.map((elem) => (
                    // {
                        // const { id, title, price, image  } = elem;
                        // return (
                            <div className='item1' style={{ display: 'flex', backgroundColor: 'pink', borderRadius: '4px', margin: '10px',  flexWrap:'wrap', width: '400px' }} >
                                <div style={{ margin: '10px'}}>
                                    <img style={{ width: '60px' }} src={elem.image} alt="MenuPics" />
                                </div>
                                <div style={{flexWrap:'wrap'}}>
                                    <h5>{elem.id}</h5>
                                    <h5>{elem.title}</h5>
                                    <h5>{elem.price}</h5>
                                    <button>order now</button>
                                </div>
                            </div>
                        )
                    //  }
                      )
                }
            </div>
        </div>
    )
}

export default ImageCategory
