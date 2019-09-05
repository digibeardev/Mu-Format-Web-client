import React, { useContext } from "react";
import { Context } from "../context/Context";

const Modal = props => {
  const { width, height, children } = props;
  const context = useContext(Context);
  return (
    <div
      className="modalBG"
      style={{ display: context.visible ? "flex" : "none" }}
    >
      <div className="modal" style={{ width, height }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
