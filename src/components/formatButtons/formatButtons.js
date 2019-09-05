import React, { useContext } from "react";
import { Context } from "../context/Context";

const FormatButtons = () => {
  const context = useContext(Context);

  const submitFormat = async () => {
    context.setVisible(true);
    const results = await fetch("https://mush-format-api.herokuapp.com", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: context.text })
    });
    const data = await results.json();
    context.setOutput(data.data.text);
    context.setVisible(false);
  };

  const handleReset = () => {
    context.setText("");
    context.setOutput("");
    context.setLog([]);
  };

  return (
    <div className="buttonContainer">
      <button id="formatButton" onClick={submitFormat}>
        Format
      </button>
      <button id="resetButton" onClick={handleReset}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

export default FormatButtons;
