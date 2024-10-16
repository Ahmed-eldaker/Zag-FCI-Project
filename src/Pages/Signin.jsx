import React, { useRef, useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("invalid email format").required(),
  password: yup.string().min(6).max(12).required(),
});

export default function Signin() {
  const [state, setState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: state.email, password: state.password });
    if (!validate()) return;
    console.log({
      email: state.email,
      password: state.password,
    });
  };
  const handleChange = (e) => {
    const clonedState = { ...state };
    clonedState[e.target.name] = e.target.value;
    validate(clonedState);
    setState(clonedState);
  };
  const validate = async (obj) => {
    // const newErrors = {};
    // if (!state.email) {
    //   newErrors.email = "Email is required";
    // }
    // if (!state.password) {
    //   newErrors.password = "password is required";
    // }
    // setErrors(newErrors);
    // return Object.keys(newErrors).length ? false : true;
    //     Schema.validate(obj,{abortEarly:})
    //     try {
    //         // Validate the object according to the schema
    //         await schema.validate(obj, { abortEarly: false });
    // };
    // setErrors({});
    // return true;
    // }catch(err){
    //     const newErrors={}
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={state.email}
            onChange={handleChange}
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={state.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
