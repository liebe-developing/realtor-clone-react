import { Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Offers, ForgotPassword, Profile } from "./pages";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
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
