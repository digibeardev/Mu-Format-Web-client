import React, { useContext } from "react";
import { Context } from "../context/Context";

const Modal = props => {
  const { children } = props;
  const context = useContext(Context);
  return (
    <div
      className="modalBG"
      style={{ display: context.visible ? "flex" : "none" }}
    >
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
