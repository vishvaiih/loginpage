import React from 'react'
import { useNavigate } from "react-router";

function DashboardLeft() {
    const usenavigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="txt">
        <p onClick={() => usenavigate("/dashboard")}>Dashboard</p>
        <p onClick={() => usenavigate("/tables")}>Tables</p>
        <p onClick={() => usenavigate("/billing")}>Billing</p>
        <p onClick={() => usenavigate("/profile")}>profile</p>
      </div>
    </div>
  )
}

export default DashboardLeft
