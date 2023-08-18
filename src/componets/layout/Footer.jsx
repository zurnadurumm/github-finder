import React from 'react'

function Footer() {
    const date = new Date().getFullYear()
    return (
        <>
            <footer className='footer p-6 bg-gray-700 text-primary-content footer-center'>
                <p>Copyright &copy; {date}. All rights reserved. </p>

            </footer>
        </>

    )
}

export default Footer