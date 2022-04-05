import React from "react";
import {Card} from "react-bootstrap";
import { Rating } from "../common";

export const ReviewList = ({reviews}) => {

    const renderCard = (card, index) => {
        return(
         <Card key={index}>
             <div class="review-card">
                 <h1 class="rating-header">
                    <Rating value={card.rating}/>
                 </h1>
                 <h2 class="rating-name">{card.userName}</h2>
                 <h2 class="rating-description">{card.comment}</h2>
                 <h2 class="rating-date">{card.date}</h2>
             </div>
         </Card>
        )
    }


    if(reviews){
        return <>
        <div class="reviewList">
            <h2 class="reviewListTitle">Product Reviews {reviews.length}</h2>
            <div class="reviews">
                {reviews.length === 0 &&
                    <h3>Be the first to add a review!</h3>
                }
                {reviews.map(renderCard)}
            </div>           
        </div>
    </>;
    }
    return
}

