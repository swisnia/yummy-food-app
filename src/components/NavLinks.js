import React from 'react'
import {NavLink} from 'react-router-dom'
import links from '../utils/links'


const NavLinks = () => {
  return (
    <div className='nav-links'>
        {links.map((link)=>{
        const {id, text, path, icon} = link

        return (
            <NavLink
                to={path}
                key={id}
            >
                <span className='icon'>{icon}</span>
                <div className='nav-txt'>{text}</div>
            </NavLink>
            )
        })}
    </div>
  )
}

export default NavLinks