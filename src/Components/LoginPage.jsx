import React from "react";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  usrname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


function LoginPage() {
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
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="website"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="email"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="password"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>

            <div>
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="Confirm Password"
                style={{ width: "90%", height: "40px", margin: " 10px auto" }}
              />
            </div>
          </div>
         

      

          

          <div class="form-check" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <input
              style={{margin:" 20px "}}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              i agree to the terms and condition
            </label>
          </div>

         <div style={{display:"flex",justifyContent:"center"}}>
              <button class="btn btn-primary"  style={{width:"80%"}}>Sign In</button>
         </div>

         <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
              <p>You have an account?</p>
              <p style={{color:"blue"}}>Sign In </p>
         </div>
        
        
        </div>
      </div>
    </>
  );
}

export default LoginPage;
