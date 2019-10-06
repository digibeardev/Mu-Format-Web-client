import React, { useContext } from "react";
import { Context } from "../context/Context";
import gear from "../input/gear.svg";
const FormatButtons = () => {
  const context = useContext(Context);
  const { visible } = context;
  const handleReset = () => {
    context.setText("");
    context.setOutput("");
    context.setLog([]);
  };

  return (
    <div className="buttonContainer">
      <button id="resetButton" onClick={handleReset}>
        {visible ? <img src={gear} className="rotate" alt="Gear!" /> : "Reset"}
      </button>
    </div>
  );
};

export default FormatButtons;
