import { useState } from "react";
import Navbar from "../components/Navbar"; // adjust path

export default function Landing() {
  const [modal, setModal] = useState(null); // null | "login" | "register"

  const openLogin = () => setModal("login");
  const openRegister = () => setModal("register");
  const goHome = () => setModal(null);

  return (
    <>
      {/* Navbar */}
      <Navbar
        onHomeClick={goHome}
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
      />

      {/* Landing page content */}
      <div className="page-wrapper">
        <div className="landing-body">
          <h1>Welcome to MyApp!</h1>
          <p>
            Explore our app. Click Login or Register in the navbar to get started.
          </p>
        </div>
      </div>

      {/* Login Modal */}
      {modal === "login" && (
        <Modal onClose={goHome} title="Login">
          <LoginForm />
        </Modal>
      )}

      {/* Register Modal */}
      {modal === "register" && (
        <Modal onClose={goHome} title="Register">
          <RegisterForm />
        </Modal>
      )}
    </>
  );
}