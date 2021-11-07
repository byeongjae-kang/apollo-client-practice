import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="signin" element={<AuthPage isLoggingIn={true} />} />
        <Route path="signup" element={<AuthPage isLoggingIn={false} />} />
        <Route path="welcome" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
