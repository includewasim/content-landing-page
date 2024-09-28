import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center p-10 justify-center flex-col text-gray-600 border-t bg-white/20 backdrop-blur-xl mt-10'>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} Wasim Khan.<br /> All Rights Reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer