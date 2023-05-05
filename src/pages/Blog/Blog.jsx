import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";

const Blog = () => {
  const handleOpenToast = (event) => {
    event.preventDefault();
    toast("Here is your toast.");
  };
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div className="row justify-content-center mt-5">
        <Toaster></Toaster>
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center">React Blog</h2>
              <button onClick={handleOpenToast}>Open Toast</button>
              <hr style={{ border: "3px solid black" }} />
              <h3 className="mt-4">
                What is the differences between Uncontrolled and Controlled
                components.
              </h3>
              <p>
                Uncontrolled components are those that manage their state
                internally and do not rely on React to update the UI. Controlled
                components, on the other hand, rely on React to manage their
                state and update the UI. Uncontrolled components are simpler to
                use, but they offer less control over the state. Controlled
                components provide more control over the state, but they require
                more work to set up and maintain.
              </p>
              <hr className="mb-3" />
              <h3 className="mt-4">
                How to validate React props using PropTypes
              </h3>
              <p>
                You can use the PropTypes library to validate the props of your
                React components. PropTypes allows you to specify the type and
                shape of the props that your component expects. For example, if
                you have a component that expects a string prop called name, you
                can use PropTypes to validate that the prop is indeed a string.
                If the prop is not a string, PropTypes will issue a warning in
                the console.
              </p>
              <hr className="mb-3" />

              <h3 className="mt-4">
                What is the difference between nodeJS and expressJS.
              </h3>
              <p>
                Node.js is a runtime environment for JavaScript that allows you
                to run JavaScript code on the server side. Express.js is a web
                application framework for Node.js that makes it easier to build
                web applications. Node.js provides the runtime environment,
                while Express.js provides the framework for building web
                applications. Node.js is more low-level, while Express.js
                provides more abstractions and features for building web
                applications.
              </p>
              <hr className="mb-3" />

              <h3 className="mt-4">
                What is a custom hook, why will we create a custom hook?
              </h3>
              <p>
                A custom hook is a function that uses React hook system to
                provide some reusable behavior. Custom hooks allow you to
                abstract away some complex or repetitive behavior into a simple
                function that can be reused across multiple components. You
                might create a custom hook if you find yourself duplicating code
                across multiple components, or if you want to share some
                behavior between components without creating a higher-order
                component.
              </p>
              <Link to="/" className="btn btn-primary mt-4">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
