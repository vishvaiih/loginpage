import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";



function LoginPage() {
  const signupSchema = Yup.object().shape({
    Username: Yup.string().required("Username is Required"),
    website: Yup.string()
      .url("Invalid URL formate")
      .required("website is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(8, "passwor must be at least 8 character")
      .required("Password is Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("ConfirmPassword is Required"),
  });
  
  const formik = useFormik({
    initialValues:{
      username:"",
      // website:"",
    }
  });
  

  return (
    <>
      <div class="main">
        <div
          style={{
            height: "500px",
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

          <div class="form-floating mb-3">
            <div>
              <input
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="User Name"
                style={{
                  width: "90%",
                  height: "40px",
                  margin: " 40px auto 10px",
                }}
              />
            </div>

            <div>
              <input
                value={formik.values.website}
                onChange={formik.handleChange}
                error={formik.touched.website && Boolean(formik.errors.website)}
                helperText={formik.touched.website && formik.errors.website}
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="website"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="email"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="password"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
              value={formik.values.ConfirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.ConfirmPassword && Boolean(formik.errors.ConfirmPassword)}
              helperText={formik.touched.ConfirmPassword && formik.errors.ConfirmPassword}
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="Confirm Password"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>
          </div>

          <div
            class="form-check"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{ margin: " 20px " }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              i agree to the terms and condition
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button class="btn btn-primary" style={{ width: "80%" }}>
              Sign In
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <p>You have an account?</p>
            <p style={{ color: "blue" }}>Sign In </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
