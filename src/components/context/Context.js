import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = props => {
  const { initialText, initialOutput, children } = props;
  const [text, setText] = useState(initialText);
  const [output, setOutput] = useState(initialOutput);
  const [log, setLog] = useState([]);

  const FormatContext = {
    text,
    setText,
    output,
    setOutput,
    log,
    setLog
  };

  return <Context.Provider value={FormatContext}>{children}</Context.Provider>;
};
