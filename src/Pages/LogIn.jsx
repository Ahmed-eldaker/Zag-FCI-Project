import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
// import * as yup from "yup";
// import { object, string } from "yup";

const schema = object().shape({
  email: string().required("Email is Required").email(),
  password: string().required().min(6, "too short").max(32, "too long"),
});
export default function LogIn() {
  // const validateForm = async (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     email: e.target[0].value,
  //     password: e.target[1].value,
  //   };
  //   const isVaild = await schema.isValid(formData);
  //   console.log(isVaild);
  // };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log({ formik });
  return (
    <div>
      {/* Form element with an onSubmit event handler */}
      <form onSubmit={formik.handleSubmit}>
        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
