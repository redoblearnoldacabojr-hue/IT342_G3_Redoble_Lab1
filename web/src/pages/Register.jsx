import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [passwordsMatch, setPasswordsMatch] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      const validations = {
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      };
      setPasswordValidations(validations);

      // Check confirm password match
      setPasswordsMatch(value === form.confirmPassword);
    }

    if (name === "confirmPassword") {
      setPasswordsMatch(value === form.password);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.values(passwordValidations).every(Boolean);
    if (!allValid) {
      alert("Password does not meet all requirements.");
      return;
    }

    if (!passwordsMatch) {
      alert("Passwords do not match.");
      return;
    }

    // Only send confirmPassword to backend
    const dataToSend = {
      name: form.name,
      email: form.email,
      password: form.confirmPassword,
    };

    console.log("Submitting to backend:", dataToSend);
    // TODO: replace console.log with actual API call
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <div>
            <p>Password must have:</p>
            <ul className="validation-list">
              <li className={passwordValidations.length ? "valid" : "invalid"}>
                At least 8 characters
              </li>
              <li className={passwordValidations.uppercase ? "valid" : "invalid"}>
                One uppercase letter
              </li>
              <li className={passwordValidations.lowercase ? "valid" : "invalid"}>
                One lowercase letter
              </li>
              <li className={passwordValidations.number ? "valid" : "invalid"}>
                One number
              </li>
              <li className={passwordValidations.specialChar ? "valid" : "invalid"}>
                One special character (!@#$%^&*)
              </li>
              <li className={passwordsMatch ? "valid" : "invalid"}>
                Passwords match
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={
              !Object.values(passwordValidations).every(Boolean) || !passwordsMatch
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
