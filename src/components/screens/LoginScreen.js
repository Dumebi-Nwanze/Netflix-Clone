import React from "react";
import { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          className="loginScreen__button"
          onClick={() => {
            const signInstate = signIn;
            setSignIn(!signInstate);
          }}
        >
          {!signIn ? "Sign In" : "Cancel"}
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited Films, Tv Programs and more.</h1>
              <h2>Watch anywhere, cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to start or renew you
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => {
                      setSignIn(true);
                    }}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
