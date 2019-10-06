import React, { useContext } from "react";
import { Context } from "../context/Context";
const Output = () => {
  const context = useContext(Context);
  return (
    <div className="outputContainer">
      <textarea id="output" value={context.output} readOnly={true}></textarea>
    </div>
  );
};

export default Output;
