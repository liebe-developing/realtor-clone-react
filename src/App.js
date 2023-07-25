import { Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Offers, ForgotPassword, Profile } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
