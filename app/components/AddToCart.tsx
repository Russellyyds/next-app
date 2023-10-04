"use client";
import React, { useEffect, useState } from "react";

// useState+useEffect  useState定义状态变量  useEffect调用后端获取数据并且放入状态变量中

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
