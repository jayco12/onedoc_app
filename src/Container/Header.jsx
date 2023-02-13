import React from 'react'
import { images } from '.'

const Header = () => {
    return (
        <div>
            <div className='flex justify-center align-middle md:block'>
            <img src={images.logo2} alt="Balablue Logo" className='w-48 md:w-24' />
            </div>
        </div>
    )
}


export default Header