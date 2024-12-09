import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm: React.FC = () => {

  const handleRememberMe = (email: string, rememberMe: boolean) => {
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  return (
    <Formik
      initialValues={{
        email: localStorage.getItem('rememberedEmail') || '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert('Login Successful');
          handleRememberMe(values.email, values.rememberMe);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form aria-labelledby="login-form">
          <div className='flex justify-between items-center gap-5 m-5'>
            <label className='w-24 text-left' htmlFor="email">Email:</label>
            <Field className="bg-transparent border-b-2" type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className='flex justify-between items-center gap-5 m-5'>
            <label className='w-24 text-left' htmlFor="password">Password:</label>
            <Field className="bg-transparent border-b-2" type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="rememberMe" className='flex gap-5 justify-center items-center m-3'>
              <Field type="checkbox" name="rememberMe" id="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className='m-2'>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;