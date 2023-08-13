import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav, Button, Toast } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const ChefsDetails = () => {
  const { id } = useParams();
  const [chefDetails, setChefDetails] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    const chefDetailsName = chefDetails.name;
    const toastMessage = chefDetailsName + "is added to favorite";
    toast.success(toastMessage);
  };

  useEffect(() => {
    fetch(`https://server-asignment10-bhuiamh.vercel.app/allData/${id}`)
      .then((res) => res.json())
      .then((data) => setChefDetails(data.item));
  }, []);
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <div
        className="container-fluid p-4 rounded"
        style={{
          background: "linear-gradient(to right, #f2d50f, #da0641)",
        }}
      >
        <div className="container py-5">
          <div
            key={chefDetails.id}
            className="row justify-content-center align-items-center mb-4"
          >
            <div className=" d-flex justify-content-start col-md-6 order-md-2 mb-3 mb-md-0">
              <div style={{ borderLeft: "4px solid black" }}></div>
              <div className="ps-3 my-auto text-start text-md-left">
                <h2 className="text-light fw-bold mt-2">{chefDetails.name}</h2>
                <p className="text-light mb-0">
                  <span className="text-warning fw-bold fs-4">
                    {chefDetails.years_of_experience}
                  </span>{" "}
                  years of experience
                </p>
                <p className="text-light mb-0">
                  <span className="text-warning fw-bold fs-4">
                    {chefDetails.num_recipes}
                  </span>{" "}
                  recipes
                </p>
                <p className="text-light mb-0">
                  <span className="text-warning fw-bold fs-4">
                    {chefDetails.likes}
                  </span>{" "}
                  likes
                </p>
                <h1 className="text-success fw-bold fs-4 mt-3">
                  Top Must-Try Dishes from the Expert Chef
                </h1>
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      {chefDetails?.cooking_items?.map((item, index) => (
                        <p key={index} className="ms-2 my-0 text-light">
                          <span className="text-warning fs-5 fw-bold">
                            {index + 1}.
                          </span>{" "}
                          {item}
                        </p>
                      ))}
                    </div>
                    <div className="d-flex align-items-center">
                      <Button
                        className={
                          disabled
                            ? "btn btn-outline-light"
                            : "bg-white text-black"
                        }
                        onClick={handleClick}
                        disabled={disabled}
                      >
                        <FaHeart />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="d-flex justify-content-end align-items-center ext-center">
                <img
                  src={chefDetails.picture}
                  alt={chefDetails.name}
                  className="rounded img-fluid "
                  style={{
                    height: "200px",
                    width: "150px",
                    border: "5px solid #fff",
                  }}
                />

                <div>
                  <p className="ms-3 my-auto d-none d-md-block">
                    {chefDetails.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-success w-100 mx-auto mt-3">
        <Nav.Link className="text-light fs-5 fw-bold" as={Link} to="/">
          Home
        </Nav.Link>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default ChefsDetails;
