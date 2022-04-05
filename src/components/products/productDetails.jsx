import { useEffect, useState } from "react";
import { getProductById } from "../../api/productsApi";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";

export const ProductDetails = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {});
    getProductById(1).then(x => setProduct(x));

    return <>
    <ul class="breadcrumb">
        <li>Tasty Snacks</li>
        <li>{product.name}</li>
    </ul>

    <div class="jumbotron">
        <img src={product.imageUrl} alt={product.name} />
        <h1>
            {product.name}
            <span class="badge badge-secondary">${product.price}</span>
        </h1>
        <p>{product.description}</p>
    </div>

    <ReviewList/>
    <ReviewForm/>
    
    </>
}