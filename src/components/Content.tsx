import React from "react";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src="https://images.pexels.com/photos/5858231/pexels-photo-5858231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-text">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicious and nutritious</p>
        </div>
      </div>
      <div className="menu-card">
        <img
          src="https://images.pexels.com/photos/1987042/pexels-photo-1987042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-text">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicious and nutritious</p>
        </div>
      </div>
    </>
  );
};

export default Content;
