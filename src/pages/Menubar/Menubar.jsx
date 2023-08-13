import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/nav-logo.png";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {});
  };
  return (
    <Navbar className="mt-3 mx-3 rounded" bg="success" expand="lg" fixed="top">
      <Container className="d-flex mx-auto">
        <Navbar.Brand className="flex-grow-1" as={Link} to="/">
          <img
            src={logo}
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
              to="/register"
            >
              Registration
            </Nav.Link>
            {user?.uid ? (
              <Nav.Link
                onClick={handleLogout}
                className="text-danger fs-5 fw-bold"
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
          </Nav>
        </Navbar.Collapse>
        {user && (
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center">
              <h1 className="fs-6 text-light me-3" data-tip={user?.di}>
                {" "}
                Login with <span className="fs-6 text-info">{user?.email}</span>
              </h1>
              <Tooltip title={user?.displayName}>
                <img
                  src={user?.photoURL}
                  alt="User Photo"
                  width="50"
                  height="auto"
                  className="rounded-circle border border-danger"
                />
              </Tooltip>
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Menubar;
