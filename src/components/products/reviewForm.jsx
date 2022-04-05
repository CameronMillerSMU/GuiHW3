import { useEffect, useState } from "react";
import { TextField } from "../common/"
import { TextAreaField } from "../common/"
import { SelectField } from "../common/"
import { Rating } from "../common/"
import { ProductDetails } from "./productDetails";

export const ReviewForm = ({onReviewAdded}) => {
    const [ rating, setRating ] = useState(0);
    const [ name, setName ] = useState("");
    const [ comment, setComment] = useState("");
    let options = [
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
    ] 
    return <>
    <div class="reviewForm">
        <h3 class="reviewFormTitle">Add Review</h3>
        <form>
            <TextField
            value = { name }
            setValue = { setName }
            />
            <SelectField 
            options = {options}
            value = { rating  }
            setValue = { setRating }
            />
            <div>
                <Rating value = { rating } />
            </div>
            <TextAreaField
            value = {comment}
            setValue = {setComment}
            />
            <button type="Button" 
                onClick={() => {
                    onReviewAdded(name, rating, comment, new Date().toDateString())
                    setName('');
                    setRating(0);
                    setComment('');
                }
            }>
                Submit
            </button>
        </form>
    </div>
    </>
}