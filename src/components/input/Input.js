import React, { useContext, useEffect, useState } from "react";
import OpenBox from "../openmenu/open";
import { Context } from "../context/Context";
import FormatButtons from "../formatButtons/formatButtons";
import Modal from "../modal/Modal";
import Gear from "./gear.svg";
const Input = () => {
  const [timer, setTimer] = useState(null);
  const context = useContext(Context);
  const { setText, text, setOutput, visible, setVisible } = context;

  useEffect(() => {
    // clear timeout and set it again.
    clearTimeout(timer);
    let timeout = setTimeout(async () => {
      setVisible(true);
      const results = await fetch("https://mush-format-api.herokuapp.com", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });
      const data = await results.json();
      setOutput(data.data.text);
      setVisible(false);
    }, 3000);
    setTimer(timeout);
  }, [text]);

  return (
    <div className="inputContainer">
      <OpenBox />
      <textarea
        id="input"
        onChange={e => setText(e.target.value)}
        value={context.text}
      ></textarea>
      <FormatButtons />
    </div>
  );
};

export default Input;
