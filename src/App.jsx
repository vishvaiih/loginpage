import { BrowserRouter, Routes } from 'react-router'
import SignUp from './Components/SignUp'
import { Route } from 'react-router'
import LoginPage from './Components/LoginPage'
import Dashboard from './Components/Dashboard'
import Tables from './Components/Tables'
import Billing from './Components/Billing'
import Profile from './Components/Profile'

function App() {


  return (
    <>

    {/* <LoginPage/> */}
      <BrowserRouter>
       <Routes>
          <Route path="/" element = {<LoginPage/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/> }/> 
          <Route path="/tables" element={<Tables/>} />
          <Route path="/billing" element={<Billing/>}/>
          
          <Route path="/profile" element={<Profile/>}/>

              
       </Routes>
    </BrowserRouter>  
      
    </>
  )
}

export default App
