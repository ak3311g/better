import { useState } from "react";
import LoginForm from "../components/auth/login";
import SignUpForm from "../components/auth/signup";

export default function Auth() {
  const [authState, setAuthState] = useState("login");

  return (
    <>
      <h1>Auth</h1>
      {authState === "login" ? (
        <div className="">
          <LoginForm />
          <button className="" onClick={() => setAuthState("signup")}>
            Don't have an account? <span className="">Sign Up</span>
          </button>
        </div>
      ) : (
        <div className="">
          <SignUpForm />
          <button className="" onClick={() => setAuthState("login")}>
            Already have an account? <span className="">Login</span>
          </button>
        </div>
      )}
    </>
  );
}
