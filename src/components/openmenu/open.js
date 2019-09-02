import React from 'react'

const OpenBar = () => {
    return (
        <div className = "openContainer">
            <input type="text" placeholder ="Open a File" className="openTxt">
            </input>
            <button id="open">open</button>
        </div>
    )
}

export default OpenBar