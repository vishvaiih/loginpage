import React from "react";

function LoginPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/img/bg-sign-in-basic.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
        
          style={{
            height: "500px",
            width: "30%",
            border: "1px solid #e5e3d4",
            borderRadius: "15px",
            backgroundColor: "#f5f5f5",
          }}
        >
           
           <div style={{height:"80px",width:"90%",color:"white",borderRadius: "10px",display:"flex",margin:"-20px auto",backgroundColor:"#63c8ff",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
               <h4>Join Us Today</h4>
               <p>Enter your email and password to register</p>
           </div>

           <div>
               
           </div>
            


        </div>
      </div>
    </>
  );
}

export default LoginPage;
