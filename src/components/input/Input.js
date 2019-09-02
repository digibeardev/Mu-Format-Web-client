import React from 'react'
import OpenBox from '../openmenu/open'
import FormatButtons from '../formatButtons/formatButtons'
const input = () => {
    return (
        <div className="inputContainer">
            <OpenBox />
            <textarea id="input"></textarea>
            <FormatButtons />
        </div> 
    )
}

export default input;