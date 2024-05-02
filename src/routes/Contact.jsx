// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        <Link to="/contact/1">Forma de contato 1</Link>
      </p>
      <p>
        <Link to="/contact/2">Forma de contato 2</Link>
      </p>
    </div>
  );
};

export default Contact;
