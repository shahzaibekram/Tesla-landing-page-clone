import React from 'react'
import '../Pages/item.css'

const Item = ({ title, desc, backgroundImg }) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='item_container'>
                <div className='item_text'>
                    <p> {title} </p>

                    <div className='item_textdesc'>
                        <p> {desc} </p>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <button className='btn'>Custom Order</button>
                    <button className='btn-2'>Custom Order</button>

                </div>

            </div>
        </div>
    )
}
export default Item;