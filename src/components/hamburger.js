import React from "react";

const Hamburger = ({ hamburger }) => {
  return (
    <div>
      <h1>Hamburger</h1>
      <div className="bread -top"></div>
      <div className="mid">
        {hamburger.map((item, idx) => (
          <img src={`http://localhost:3000/${item.name}.jpeg`} alt={item.name} key={idx}/>
        ))}
      </div>
      <div className="bread -bottom"></div>
    </div>
  );
};

export default Hamburger;
