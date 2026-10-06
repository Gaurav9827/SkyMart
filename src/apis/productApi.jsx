import axios from "axios"

 export const getProductdata = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      return(res.data.products);
    } catch (error) {
      console.log("error in api call", error);
    }
  };