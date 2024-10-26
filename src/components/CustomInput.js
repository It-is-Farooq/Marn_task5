import React from "react";
import { Field, ErrorMessage } from "formik";
import "./CustomInput.css";

const CustomInput = ({ label, name, type = "text", placeholder }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} placeholder={placeholder} />
      <ErrorMessage component="div" className="error" name={name} />
    </div>
  );
};

export default CustomInput;
