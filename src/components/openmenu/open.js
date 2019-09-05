import React from 'react'

const OpenBar = () => {
    return (
        <div className = "openContainer">
            <input type="text" placeholder ="Open a File" className="openTxt">
            </input>
            <button id="open">Download</button>
        </div>
    )
}

export default OpenBar