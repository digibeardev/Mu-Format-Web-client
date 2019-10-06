import React, { useContext } from "react";
import { Context } from "../context/Context";

const Modal = props => {
  const { width, height, children } = props;
  const context = useContext(Context);
  return (
    <div
      className="modal"
      style={{ width, height, display: context.visible ? "flex" : "none" }}
    >
      {children}
    </div>
  );
};

export default Modal;
