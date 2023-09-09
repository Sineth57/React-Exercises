import ProductDescription from "./ProductDescription";

function Product({name,price,description}){
    return(
        <div>
           
           <ProductDescription/>
           <h3>{name}</h3>
            <p>Rs. {price}</p>
            <p>{description} </p>
        </div>
    )
}

export default Product;