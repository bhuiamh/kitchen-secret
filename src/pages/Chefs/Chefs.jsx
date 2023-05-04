import React, { useEffect, useState } from "react";
import { FaHeart, FaTwitter } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <h1 className="fs-1 text-center text-danger fw-bold mb-4">
        Our top Chefs
      </h1>
      <Row xs={1} md={2} className="mx-auto">
        {chefsData[0]?.chefs?.map((chefs) => (
          <Col
            key={chefs?.id}
            className="card mb-3 me-3 p-2 shadow"
            style={{
              maxWidth: "540px",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={chefs?.picture}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{
                    border: "5px solid red",
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-3 text-danger">
                    {chefs?.name}
                  </h5>
                  <p className="card-text fs-6 text-light">
                    Working Experience{" "}
                    <span className="text-warning fs-5">
                      {chefs?.years_of_experience}
                    </span>{" "}
                    years{" "}
                  </p>
                  <p className="text-danger fs-5">
                    <FaHeart />{" "}
                    <span className="text-warning fs-5">{chefs?.likes}</span>
                  </p>
                  <Link to={`/chefs/${chefs?.id}`}>
                    <button className="btn btn-success fw-bold">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Chefs;
