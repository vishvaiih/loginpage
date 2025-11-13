import React, { useEffect, useState } from "react";
import DashboardLeft from "./DashboardLeft";
import * as Yup from "yup";
import { useFormik } from "formik";

function Profile() {
  const [edituser, setEditUser] = useState("");
  const [user, setuser] = useState("");
  const [usr,setUsr] = useState("");


  const getData = JSON.parse(localStorage.getItem("userDetail")) || [];
  const userdata = JSON.parse(localStorage.getItem("userData"));
  console.log("userdata", userdata);
  console.log("getData", getData);

  const findUser = getData?.find((itm) => itm.email == userdata.email);
  console.log("findUser", findUser);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editUser = () => {
    console.log("?????????", findUser);
    setEditUser(findUser);
  };

  console.log("edituser", edituser);

  const handalEdit = (e) => {
     
    e.preventDefault();
    console.log("....",getData);

       const userfind = getData?.find((itm) => itm.email === edituser.email )
       console.log("vvvvvv",userfind)

       if(userfind){
            alert("email is already exist");
            return;
       }

       const updatedUser = getData?.map((itm) => 
        itm.email == findUser.email ? edituser : itm)

       console.log("updatedUser",updatedUser)

       localStorage.setItem("userDetail",JSON.stringify(updatedUser))
       localStorage.setItem("userData",JSON.stringify(edituser));

       setUsr(edituser);

       setEditUser("")     
    
  }

  console.log("....",usr)



  return (
    <div className="maindiv">
      <DashboardLeft />
      <div className="combine">
        <div className="side">
          <p style={{ float: "right", marginRight: "10px" }}>
            {findUser?.email}
          </p>
        </div>

        <div className="user">
          {edituser ? (
            <form>
              <div className="form-floating mb-3">
                <div>
                  <input
                    value={edituser.username}
                    onChange={handleEditChange}
                    type="text"
                    name="username"
                    className="form-control"
                    id="floatingInput"
                    placeholder="User Name"
                    style={{ margin: "10px" }}
                  />
                </div>

                <div>
                  <input
                    value={edituser.email}
                    onChange={handleEditChange}
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="email"
                    style={{ margin: "10px" }}
                  />
                </div>

                <div>
                  <input
                    value={edituser.website}
                    onChange={handleEditChange}
                    type="text"
                    name="website"
                    className="form-control"
                    id="floatingInput"
                    placeholder="website"
                    style={{ margin: "10px" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handalEdit} className="btn btn-primary" style={{ width: "80%" }}>
                  Update
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h3 style={{ margin: "10px" }}>User Detail </h3>
              <p style={{ margin: "10px" }}>Name:{findUser?.username}</p>
              <p style={{ margin: "10px" }}>Email:{findUser?.email}</p>
              <p style={{ margin: "10px" }}>website:{findUser?.website}</p>
            </div>
          )}

          <div>
            <button
              onClick={editUser}
              style={{
                backgroundColor: "blue",
                border: "none",
                margin: "10px 20px",
                color: "white",
              }}
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
