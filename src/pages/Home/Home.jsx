/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((result) => result.json())
      .then((data) => setChefsData(data));
  }, []);
  console.log(chefsData);
  return (
    <div>
      <h1>Our Chefs</h1>
      <div className="chefs">
        {chefsData.chefs.map((chefs) => (
          <div key={chefs.id} className="chefs-card">
            <h2>{chefs.name}</h2>
            <p>{chefs.description}</p>
            <ul>
              {chefs.items.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Price: ${chefs.price}</p>
            <p>Duration: {chefs.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
