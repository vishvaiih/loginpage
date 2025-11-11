import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";

function LoginPage() {
  const usenavigate = useNavigate();

  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(8, "passwor must be at least 8 character")
      .required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("12", values);

      const getData = JSON.parse(localStorage.getItem("userDetail")) || [];
      console.log("11111",getData)

      const  usrFind = getData.find((itm) => itm.email == values.email)
      console.log("usrFind",usrFind);

      if(!usrFind){
        alert("Email is not exist")
      }

      if(usrFind.password  !== values.password){
        alert("password is wrong")
      }

      if(usrFind.password == values.password){
        alert("Login Successfully ")
      }
      
      

    },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="main">
      <div
        style={{
          minHeight: "300px",
          width: "30%",
          border: "1px solid #e5e3d4",
          borderRadius: "15px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            height: "60px",
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
          <h4>Sign In</h4>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
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
                  margin: " 40px auto 20px",
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
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-primary" style={{ width: "80%" }}>
              Sign In
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
          <p>Don't have an account?</p>
          <p style={{ color: "blue" }} onClick={() => usenavigate("/signup")}>
            Sign Up{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
