import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";
import HomePage from "./components/homePage/homePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
