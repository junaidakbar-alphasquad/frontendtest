import React from 'react'

const Sidebar = () => {
    const menubuttons = [
        { name: 'menu1', id: 1 },
        { name: 'menu2', id: 2 },
        { name: 'menu3', id: 3 },
        { name: 'menu4', id: 4 },
    ]
    return (
        <div>
            <div className='w-full h-10 pt-2 flex justify-center'>image logo</div>
            <ul className='flex flex-col gap-2'>
                {
                    menubuttons.map((menu, ind) => (

                        <li key={menu.id} className={'w-full rounded-lg px-3 py-2 bg-slate-400'}>
                            {menu.name}

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar