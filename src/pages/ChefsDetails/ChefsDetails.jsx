/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "react-bootstrap";

const ChefsDetails = () => {
  const { id } = useParams();
  const [chefDetails, setChefDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/allData/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.item));
  }, []);

  console.log(id);
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div
        className="container-fluid p-4 rounded"
        style={{
          background: "linear-gradient(to right, #f2d50f, #da0641)",
        }}
      >
        <div className="container py-5">
          {chefDetails.map((chef) => (
            <div
              key={chef.id}
              className="row justify-content-center align-items-center mb-4"
            >
              <div className=" d-flex justify-content-start col-md-6 order-md-2 mb-3 mb-md-0">
                <div className="text-start text-md-left">
                  <h2 className="text-light fw-bold mt-2">{chef.name}</h2>
                  <p className="text-light mb-0">
                    <span className="text-warning fw-bold fs-4">
                      {chef.years_of_experience}
                    </span>{" "}
                    years of experience
                  </p>
                  <p className="text-light mb-0">
                    <span className="text-warning fw-bold fs-4">
                      {chef.num_recipes}
                    </span>{" "}
                    recipes
                  </p>
                  <p className="text-light mb-0">
                    <span className="text-warning fw-bold fs-4">
                      {chef.likes}
                    </span>{" "}
                    likes
                  </p>
                  <h1 className="text-success fw-bold fs-4 mt-3">
                    Top Must-Try Dishes from the Expert Chef
                  </h1>
                  <div>
                    {chef.cooking_items.map((item, index) => (
                      <p key={index} className="ms-2 my-0 text-light">
                        <span className="text-warning fs-5 fw-bold">
                          {index + 1}.
                        </span>{" "}
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <div className="d-flex justify-content-end ext-center">
                  <img
                    src={chef.picture}
                    alt={chef.name}
                    className="rounded img-fluid d-none d-md-block"
                    style={{
                      height: "300px",
                      width: "300px",
                      border: "5px solid #fff",
                    }}
                  />
                  <img
                    src={chef.picture}
                    alt={chef.name}
                    className="rounded img-fluid d-block d-md-none"
                    style={{
                      height: "200px",
                      width: "200px",
                      border: "5px solid #fff",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btn btn-success w-100 mx-auto mt-3">
        <Nav.Link className="text-light fs-5 fw-bold" as={Link} to="/">
          Home
        </Nav.Link>
      </div>
    </div>
  );
};

export default ChefsDetails;
