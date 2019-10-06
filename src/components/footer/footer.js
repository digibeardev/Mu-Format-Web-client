import React, { useState, useEffect } from "react";

const Footer = props => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    const checkVersion = async () => {
      setVersion(sessionStorage.getItem("mfVersion"));
      const response = await fetch("https://mush-format-api.herokuapp.com");
      const data = await response.json();
      if (!version) {
        if (data.version) {
          sessionStorage.setItem("mfVersion", data.version);
          setVersion(data.version);
        }
      }
    };
    checkVersion();
  });

  return (
    <div className="footer">
      <p>Mush Format v {version || "0.00"}</p>
      <a href={"#"} className="digi">
        &copy; 2019 DigiBear.io
      </a>
    </div>
  );
};

export default Footer;
