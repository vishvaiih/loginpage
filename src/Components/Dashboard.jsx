import React from "react";
import { useNavigate } from "react-router";

import "../App.css";
import DashboardLeft from "./DashboardLeft";

function Dashboard() {

  
  const userdata = JSON.parse(localStorage.getItem("userData"))
  console.log("vvv",userdata) 
    
  return (
    <>
    <div className="maindiv">
    
       <DashboardLeft/>

    <div className="side">
        <p style={{float:"right",marginRight:"10px"}}>{userdata?.email}</p>
        
    </div>

    </div>
   
    </>
   
  );
}

export default Dashboard;
