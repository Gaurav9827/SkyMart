import React, { useEffect, useState } from "react";
import { getProductdata } from "../apis/productApi";

export const useProductHook = () => {
  const [productsData, setProductsData] = useState([]);
  

  const getData = async () => {
    const data = await getProductdata();

    setProductsData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    productsData,
    setProductsData,
  };
};
