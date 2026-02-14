export default function Navbar({ onHomeClick, onLoginClick, onRegisterClick }) {
  return (
    <nav className="navbar">
      <div className="logo" style={{ fontWeight: "bold", fontSize: "20px" }}>
        MyApp
      </div>
      <div className="nav-links">
        <button onClick={onHomeClick} style={navButtonStyle}>Home</button>
        <button onClick={onLoginClick} style={navButtonStyle}>Login</button>
        <button onClick={onRegisterClick} style={navButtonStyle}>Register</button>
      </div>
    </nav>
  );
}

const navButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};
