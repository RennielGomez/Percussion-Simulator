import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <nav className='mx-4 mt-4'>
                <div className='flex'>
                    <h1 className='mb-8 font-bold text-4xl'>Pick an Instrument</h1>
                </div>
                <ul className='flex flex-col items-center justify-center'>
                    <Link to={"/drums"} onClick={()=>setTimeout(() => {
                    window.location.reload()    
                    },300 )}>
                        <li className='text-2xl py-2 w-44 text-center border border-t-0 border-b-2 border-x-0 hover:bg-white hover:text-black hover:scale-x-125'>Drums</li>
                    </Link>
                    <Link to={"/piano"} onClick={()=>setTimeout(() => {
                    window.location.reload()    
                    },300 )}>
                        <li className='text-2xl py-2 w-44 text-center border border-t-0 border-b-2 border-x-0 hover:bg-white hover:text-black hover:scale-x-125'>Piano</li>
                    </Link>
                    <Link to={"/xylophone"}>
                        <li className='text-2xl py-2 w-44 text-center border border-t-0 border-b-2 border-x-0 hover:bg-white hover:text-black hover:scale-x-125'>Xylophone</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}


export default Index
