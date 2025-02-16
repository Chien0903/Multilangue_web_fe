import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MyProfile from "./pages/MyProfile/MyProfile";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<LoginPage />} /> {/* Mặc định về login */}
      </Routes>
    </Router>
  );
}

export default App;
