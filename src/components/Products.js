import "../App.css";
import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";



function Products() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [producCategory, setProductCategory] = useState(1);
  const [productStock, setProductStock] = useState(0);
  const [producDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {axios.get("http://127.0.0.1:8000/product/").then((res) => {
    setProducts(res.data);
    console.log(res.data);})   
        },[refresh]);
        
  // useEffect(() => {axios.get("http://127.0.0.1:8000/category/").then((res) => {
  //   setCategorys(res.data);
  //   console.log(res.data);})   
  //       },[]);       

  function addProduct() {
    // setProducts([...products, {"name": productName, "price": productPrice}])
    axios.post("http://127.0.0.1:8000/product/", {
      "name": productName,
      "price": productPrice,
      "category": producCategory,
      "stock": productStock,
      "description": producDescription

  })
  .then((res) => {
    console.log(res.date);
    setRefresh(!refresh)
  })
    
}
  
  return (
    <>
   
      Name: <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      Price: <input type="number" step="0.0.1"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <br />
      Category: <input type="number"
        value={producCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <br/>
      Stock: <input type="number" step="0.0.1"
        value={productStock}
        onChange={(e) => setProductStock(e.target.value)}
      />
      <br/>
      Description: <input
        value={producDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        />
        <br/>
      {/* Image: <input
          value={productName}    
          onChange={(e) => setProductName(e.target.value)}
        /> */}        
      
      <button className="btn btn-success" onClick={addProduct}>Add product</button>   {/* same as functio addProduct - onClick={() =>setProducts([...products, {"name": productName, "price": productPrice}])}) */}
      <br/>
      <br/>

      {/* <table style={{color: "red", backgroundColor: "pink"}} border="1"> */}
      
      <table className="table" border="1">
        <tbody>
          {products.map((product, index) => ( 

            <Product key={index} product={product} />
            
                             
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
