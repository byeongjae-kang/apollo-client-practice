import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
