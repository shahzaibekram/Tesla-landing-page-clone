import React from 'react'
import '../Pages/Header.css'
import TeslaLogo from '../Images/Tesla.svg'

const Header = ()=>{
    return(
        <div className='Header'>
            <div className='logo'>
                <img className='logo' src={TeslaLogo} alt='tesla logo' />
            </div>

            <div className='header_center'>
                <p>Model S</p>
                <p>Model Y</p>
                <p>Model X</p>
                <p>Model 3</p>
            </div>
        </div>
    )
}
export default Header;