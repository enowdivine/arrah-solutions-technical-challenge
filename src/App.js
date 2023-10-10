import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth.jsx/Login";
import Register from "./pages/auth.jsx/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/** UNPROTECTED ROUTES */}
          {["/", "/login"].map((path, index) => (
            <Route path={path} element={<Login />} key={index} />
          ))}
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
