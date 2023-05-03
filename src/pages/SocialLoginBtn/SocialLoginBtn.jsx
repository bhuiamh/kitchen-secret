import React from "react";
// import { useState } from "react";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   GithubAuthProvider,
// } from "firebase/auth";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialLoginBtn = () => {
  return (
    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
      <button className="btn btn-primary mb-3 mb-sm-0">
        <FaFacebookF className="me-2" /> Login with Facebook
      </button>

      <button className="btn btn-secondary">
        <FaGithub className="me-2" /> Login with Github
      </button>
    </div>
  );
};

export default SocialLoginBtn;
