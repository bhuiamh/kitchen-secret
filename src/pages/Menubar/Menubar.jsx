import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // <div className="Menubar-container">
    //   <div className="logo">logo</div>
    //   <div className="menu-container">
    //     <Link to="/">
    //       <li>Home</li>
    //     </Link>
    //     <Link to="/services">
    //       <li>Services</li>
    //     </Link>

    //     {user?.email ? (
    //       <li>
    //         <button onClick={handleLogout}>Logout</button>
    //       </li>
    //     ) : (
    //       <Link to="/login">
    //         <li>Login</li>
    //       </Link>
    //     )}
    //     {/* <li>{user?.email}</li> */}
    //     <Link to="/register">
    //       <li>Registration</li>
    //     </Link>

    //   </div>
    // </div>
    <Navbar className="mt-3 mx-3 rounded" bg="success" expand="lg" fixed="top">
      <Container className="d-flex mx-auto">
        <Navbar.Brand className="flex-grow-1" as={Link} to="/">
          <img
            src="./nav-logo.png"
            width="150"
            height="auto"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-warning fs-5 fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-warning fs-5 fw-bold"
              as={Link}
              to="/services"
            >
              Services
            </Nav.Link>
            {user?.email ? (
              <Nav.Link
                onClick={handleLogout}
                className="text-warning fs-5 fw-bold"
                as={Link}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                className="text-warning fs-5 fw-bold"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
            <Nav.Link
              className="text-warning fs-5 fw-bold"
              as={Link}
              to="/register"
            >
              Registration
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {user && (
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center">
              <h1 className="fs-6 text-light me-3">
                {" "}
                Login with <span className="fs-6 text-info">{user?.email}</span>
              </h1>
              <img
                src={user?.image}
                alt="User Photo"
                width="50"
                height="auto"
                className="rounded-circle border border-danger"
              />
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Menubar;
