import React from 'react'


const submitFormat = async e => {
    e.preventDefault()
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    console.log('made it!')
    const results = await fetch("https://mush-format-api.herokuapp.com",{
        method: "post",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({text:input.value})
    });
    const data = await results.json()
    console.log(data);
    output.value = data.data.text;
    
}


const handleReset = e => {
    e.preventDefault();
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    input.value = " ";
    output.value = " ";

}


const FormatButtons = () => {
    return (
        <div className="buttonContainer">
            <button id="formatButton" onClick={submitFormat}>Format</button>
            <button id="resetButton" onClick={handleReset}> Reset </button>
        </div>
    )
}

export default FormatButtons