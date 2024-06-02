import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul
            className='nav nav-pills nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm'
            style={{
                '--bs-nav-link-color' : 'var(--bs-white)',
                '--bs-nav-pills-link-active-color' : 'var(--bs-danger)',
                '--bs-nav-pills-link-active-bg' : 'var(--bs-white)'
            }}
        >
            <li className='nav-item'>
                <NavLink
                    to='/'
                    className={({isActive}) => isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'}
                >
                    Home
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink
                    to='/AddPost'
                    className={({isActive})=> isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'}
                >
                    Add Post
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink
                    to='/EditPost'
                    className={({isActive}) => isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'}
                >
                    Edit Post
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar