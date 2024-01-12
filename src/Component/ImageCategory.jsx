import React, { useState } from 'react'
import Buttons from './Buttons'
import Menu from './Menu'

const ImageCategory = (props) => {

    const [items, setItems] = useState(Menu)

    return (
        <div>
            this is images
            <hr />
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Buttons name="Fruits" bgcolor="blue" />
                <Buttons name="Drink" bgcolor="blue" />
                <Buttons name="Shirts" bgcolor="blue" />
                <Buttons name="Laptops" bgcolor="blue" />
            </div>
            <div style={{ display: 'flex' }}>
                {
                    items.map((elem) => {
                        const { id, title, price, image } = elem;
                        return (
                            <div className='item1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink', borderRadius: '4px', margin: '10px' }}>
                                <div style={{ margin: '10px' }}>
                                    <img style={{ width: '60px' }} src={image} alt="MenuPics" />
                                </div>
                                <div>
                                    <h5>{id}</h5>
                                    <h5>{title}</h5>
                                    <h5>{price}</h5>
                                    <button>order now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageCategory
