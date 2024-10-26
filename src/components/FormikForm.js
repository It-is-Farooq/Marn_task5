import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import "./FormikForm.css"; // Import CSS for modal styling

const FormikForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Must be at least 8 characters"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    setFormSubmitted(true); // Show confirmation message
    resetForm(); // Optional: reset the form fields after submission
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <h1>Registration Form</h1>
          <CustomInput label="Name" name="name" placeholder="Enter your name" />
          <CustomInput label="Email" name="email" type="email" placeholder="Enter your email" />
          
          <CustomInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />

          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {/* Confirmation Message Modal */}
      {formSubmitted && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Your form is submitted!</p>
            <button onClick={() => setFormSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormikForm;
