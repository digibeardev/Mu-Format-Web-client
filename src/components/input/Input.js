import React from 'react'
import OpenBox from '../openmenu/open'

const input = () => {
    return (
        <div className="inputContainer">
            <OpenBox />
            <textarea id="input"></textarea>
        </div> 
    )
}

export default input;