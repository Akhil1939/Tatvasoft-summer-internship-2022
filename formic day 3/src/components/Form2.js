import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
};
const onSubmit = (values) => {
  console.log("form data :  ", values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.fname) {
//     errors.fname = "Required";
//   }
//   if (!values.lname) {
//     errors.lname = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email Formate";
//   }

//   return errors;
// }
const validationSchema = Yup.object({
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
});

function Form2() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {/* //   onSubmit={formik.handleSubmit} */}
        <div>
          <label htmlFor="fname">First name:</label>
          <Field
            type="text"
            id="fname"
            name="fname"
            //   onChange={formik.handleChange}
            //   value={formik.values.fname}
            // {...formik.getFieldProps("fname")}
          />
          {/* {formik.errors.fname ? <div>{formik.errors.fname}</div> : null} */}
          <ErrorMessage name = 'fname' />
          <br />
        </div>

        <label htmlFor="lname">Last name:</label>
        <Field
          type="text"
          id="lname"
          name="lname"
        //   {...formik.getFieldProps("lname")}
        />
        {/* {formik.errors.lname ? <div>{formik.errors.lname}</div> : null} */}
        <ErrorMessage name = 'lname' />
        <br />

        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          id="email"
          name="email"
        //   {...formik.getFieldProps("email")}
        />
        {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
        <ErrorMessage name = 'email' />
        <br />

        <Field type="submit" value="Submit" />
      </Form>
    </Formik>
  );
}

export default Form2;
