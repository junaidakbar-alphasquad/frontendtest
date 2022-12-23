import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const index = () => {

    return (
        <>

            <Header />
            <div className='w-[200px] fixed left-0'>

                <Sidebar />
            </div>
        </>
    )

}

export default index