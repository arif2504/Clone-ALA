import React from 'react';
import Image from 'next/image'
import { Formik } from 'formik';

const LoginForm = () => (
  <div className="backgroundForm">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="formLogin">
       <h1 className="loginTitle">Login Page!</h1>
       <img
              src="/assets/logo.png" 
              width="164px"
              height="164px"
       />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Input your Email Address"
            className="emailForm"
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Input your Password"
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className="buttonSubmit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;