import React from 'react'
import { images } from '.'

const Header = () => {
    return (
        <div>
            <div className='flex justify-center align-middle md:mt-5'>
            <img src={images.Onedoc} alt="onedocLogo" className='w-48 md:w-32' />
            </div>
        </div>
    )
}


export default Header