import { useEffect, useState } from "react";
import { getProductById } from "../../api/productsApi";
import { ProductReview } from "../../models/productReview";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";
import { Product } from "../../models/product";

export const ProductDetails = () => {

    const [product, setProduct] = useState(new Product(0, '', '', 0, '', []));

    useEffect(() => {
        getProductById(1).then(x => setProduct(x));
    }, []);

    function onReviewAdded(name, rating, comment, date) {
        var productClone = { ...product };
        var newReview = new ProductReview(name, rating, comment, date);
        productClone.reviews.push(newReview);
        setProduct(productClone);
      }

    return <>
    <ul class="breadcrumb">
        <li> Tasty Snacks </li>
        <li> { product.name } </li>
    </ul>
    <ul class="jumbotron">
        <img class="productImage" src = { product.imageUrl }/>
        <div class="textStuff">
            <h1> { product.name } </h1>
            <h2><span class = "badge"> { product.price } </span></h2>
            <h4> { product.description } </h4>
        </div>
    </ul>
    <ReviewList reviews={product.reviews}/>
    <ReviewForm onReviewAdded={onReviewAdded}/>
    
    </>;
}