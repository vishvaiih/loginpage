import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from 'react-router'

function SignUp() {

  const usenavigate = useNavigate();

  const signupSchema = Yup.object().shape({
    username: Yup.string().required("Username is Required"),
    website: Yup.string()
      .url("Invalid URL formate")
      .required("website is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(8, "passwor must be at least 8 character")
      .required("Password is Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("ConfirmPassword is Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      website: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("12", values);

      const getData = JSON.parse(localStorage.getItem("userDetail")) || [];

      const newData = {
        id: Math.random() * Math.pow(5, 9),
        username: values.username,
        website: values.website,
        email: values.email,
        password: values.password,
        confirmpassword: values.confirmpassword,
      };

      console.log(",,,,", newData);

      const userFind = getData?.find((itm) => itm.email === newData.email);

      if (userFind) {
        alert("email is already exist");
        return;
      }

      getData.push(newData);

      localStorage.setItem("userDetail", JSON.stringify(getData));
      console.log(getData, "???????");
      alert("Login Successfully");

      formik.resetForm();
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCheckedChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="main">
        <div
          style={{
            minHeight: "500px",
            width: "30%",
            border: "1px solid #e5e3d4",
            borderRadius: "15px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            style={{
              height: "80px",
              width: "90%",
              color: "white",
              borderRadius: "10px",
              display: "flex",
              margin: "-20px auto",
              backgroundColor: "#63c8ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h4>Join Us Today</h4>
            <p>Enter your email and password to register</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
              <div>
                <input
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  type="text"
                  name="username"
                  className="form-control"
                  id="floatingInput"
                  placeholder="User Name"
                  style={{
                    width: "90%",
                    height: "40px",
                    margin: " 40px auto 10px",
                  }}
                />
                {formik.errors.username && formik.touched.username ? (
                  <div style={{ color: "red", marginLeft: "20px" }}>
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  type="text"
                  name="website"
                  className="form-control"
                  id="floatingInput"
                  placeholder="website"
                  style={{
                    width: "90%",
                    height: "40px",
                    margin: " 10px auto",
                  }}
                />

                {formik.errors.website && formik.touched.website ? (
                  <div style={{ color: "red", marginLeft: "20px" }}>
                    {formik.errors.website}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  style={{
                    width: "90%",
                    height: "40px",
                    margin: " 10px auto",
                  }}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div style={{ color: "red", marginLeft: "20px" }}>
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="password"
                  style={{
                    width: "90%",
                    height: "40px",
                    margin: " 10px auto",
                  }}
                />

                <p
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ marginLeft: "20px" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </p>

                {formik.errors.password && formik.touched.password ? (
                  <div style={{ color: "red", marginLeft: "20px" }}>
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div>
                <input
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Confirm Password"
                  style={{
                    width: "90%",
                    height: "40px",
                    margin: " 10px auto",
                  }}
                />
                <p
                  style={{ cursor: "pointer", marginLeft: "20px" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </p>

                {formik.errors.confirmpassword &&
                formik.touched.confirmpassword ? (
                  <div style={{ color: "red", marginLeft: "20px" }}>
                    {formik.errors.confirmpassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="form-check"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                onChange={handleCheckedChange}
                checked={checked}
                style={{ margin: " 20px " }}
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                i agree to the terms and condition
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-primary"
                style={{ width: "80%" }}
                disabled={!checked}
              >
                Sign Up
              </button>
            </div>
          </form>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <p>You have an account?</p>
            <p style={{ color: "blue" }} onClick={() => usenavigate("/")}>Sign In </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
