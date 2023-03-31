import { Routes ,Route } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard'
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
   <>
   <h1>Welcome Blogger</h1>
   <Routes>
    
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element={<DashBoard />} />
    <Route path="/forgetpassword" element={<ForgetPassword/>}/>
   </Routes>
   </>
  );
}

export default App;
