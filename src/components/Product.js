import Buttons from "./Buttons";

function Product({product}) {
    return (
      <>
      <tr>
        <td>{product.name}</td>  
        <td>{product.description}</td> 
        <td>{product.category}</td>   
        <td>{product.price}</td>  
        <td>{product.stock} </td>
        
        <td><Buttons /></td>         
      </tr>
       
        
      </>
    );
  }
  export default Product
  