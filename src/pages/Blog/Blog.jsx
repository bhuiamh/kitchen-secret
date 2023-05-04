import React from "react";
import { toast } from "react-hot-toast";
function Blog() {
  const handleButtonClick = () => {
    toast.success("Button clicked!");
  };
  return (
    <div className="container" style={{ paddingTop: "125px" }}>
      <h1>Toast Cheeaking</h1>
      <div>
        <button onClick={handleButtonClick}>Click me</button>
      </div>
    </div>
  );
}

export default Blog;
