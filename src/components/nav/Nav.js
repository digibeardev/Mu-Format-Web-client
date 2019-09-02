import React from 'react'
import Settings from './settings.svg'
import Git from './github-icon.svg'
const Nav = () => {
    return (
        <nav className ="nav">
           <img src={Settings} alt="Settings gear" />
            <p>Mush Formatter</p>
            <img src={Git} alt="Github"/>

        </nav>
    )
} 

export default Nav;