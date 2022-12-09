import react, {useEffect, useState} from "react";

const Product = () => {
    const [products, setProducts] = useState();
    const fetchProduct = async () => {
        const response = await fetch ("https://crudcrud.com/api/bd677619f76d44a18b546aa037dd3ab4/products")
        const result = await response.json()
        setProducts(result)
        console.table(result)
    }
    
    useEffect(() => {
        fetchProduct();
    }, [])

    return<>
    <hr></hr>
    <h1>Products Page</h1>
    {console.log (products)}
    {products?.map((product, index)=> {
        return <div key={index}>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3> 
        </div>
    })}
  
    </>

}
export default Product;