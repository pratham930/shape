import React from "react";
import "../styles.css";
const Footer = () => {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p> copyrght @ 2001 to {currYear} </p>
    </footer>
  );
};
export default Footer;
