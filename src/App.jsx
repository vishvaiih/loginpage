import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import SignUp from './Components/SignUp'
import { Route } from 'react-router'
import LoginPage from './Components/LoginPage'

function App() {


  return (
    <>

    {/* <LoginPage/> */}
      <BrowserRouter>
       <Routes>
          <Route path="/" element = {<LoginPage/>}/>
          <Route path="/signup" element = {<SignUp/>}/>       
       </Routes>
    </BrowserRouter>  
      
    </>
  )
}

export default App
