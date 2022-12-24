import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const menubuttons = [
        { name: 'Posts', id: '1', link: '/posts' },
        { name: 'Users', id: '2', link: '/users' },
        { name: 'Login', id: '3', link: '/login' },
        { name: 'Sign Up', id: '4', link: '/register' },
    ]
    return (
        <div className='w-auto bg-red-400 p-2 right-0 left-[200px] top-0 fixed'>
            <nav className='flex justify-between w-full'>
                {menubuttons.map((menu, ind) => (
                    <div onClick={() => router.push(menu.link)} key={menu.id} className={`${router.asPath == menu.link ? 'bg-slate-400' : 'bg-slate-200'}`}>
                        {menu.name}

                    </div>
                ))}
            </nav>

        </div>
    )
}

export default Header