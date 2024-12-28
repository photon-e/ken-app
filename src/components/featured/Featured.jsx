import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "painter"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>House Painting</button>
            <button>Plumbing</button>
            <button>Landscaping</button>
            <button>Cleaning</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
