import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import NewPassword from "./Components/NewPassword/NewPassword";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
