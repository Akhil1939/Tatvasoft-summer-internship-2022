import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


const initialValues = {
  fname: "",
  lname: "",
  email: "",
};
const onSubmit = (values) => {
  console.log("form data :  ", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.fname) {
    errors.fname = "Required";
  }
  if (!values.lname) {
    errors.lname = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email Formate";
  }

  return errors;
}
const validationSchema = Yup.object({
    fname : Yup.string().required('Required'),
    lname : Yup.string().required('Required'),
    email : Yup.string().email('Invalid Email Format').required('Required'),

})

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
  console.log('Form errors', formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={formik.handleChange}
          value={formik.values.fname}
          validate
        />{formik.errors.fname ? <div>{formik.errors.fname}</div> : null} 
        <br />

        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={formik.handleChange}
          value={formik.values.lname}
        />{formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />{formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
