import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least one uppercase letter")
    .matches(/[0-9]/, "Must include at least one number")
    .required("Required"),
});

const SignUpForm: React.FC = () => {
  const checkPasswordStrength = (password: string) => {
    if (password.length < 8) return "Weak";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return "Strong";
    return "Medium";
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert("Sign Up Successful");
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form aria-labelledby="signup-form">
          <div className='flex justify-between items-center gap-5 m-5'>
            <label htmlFor="email">Email:</label>
            <Field className="bg-transparent border-b-2" type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className='flex justify-between items-center gap-5 m-5'>
            <label htmlFor="password">Password:</label>
            <Field className="bg-transparent border-b-2" type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </div>
            <div className="w-full m-2">
              Password Strength: {checkPasswordStrength(values.password)}
            </div>
          <button type="submit" className="m-2" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
