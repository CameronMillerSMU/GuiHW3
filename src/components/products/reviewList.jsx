import React from "react";
import {Card} from "react-bootstrap";
import { Rating } from "../common";

export const ReviewList = ({reviews}) => {

    const renderCard = (card) => {
        return(
         <Card>
             <div class="reviewCard">
                 <h1 class="ratingHeader">
                    <Rating value={card.rating}/>
                 </h1>
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
                {/* {console.log(reviews.length)} */}
                {reviews.map((review) => renderCard(review))}

            </div>           
        </div>
    </>;
    }
    return
}

