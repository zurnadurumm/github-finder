import spinner from './spinner.gif';
import React from 'react'

function Spinner() {
    return (
        <div className=' mt-20'>
            <img src={spinner} alt="Loading..." className='text-center mx-auto w-10' />
        </div>
    )
}

export default Spinner