import { useEffect, useState } from "react";
import { Rating } from "../common/rating";
import { TextField } from "../common/textField";
import { SelectField } from "../common/selectField";

export const ReviewForm = ({onReviewAdded}) => {
    let options = [
        { value: 1, label: '1 stars'},
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
   ] 

   const [name, setName] = useState('');
   const [rating, setRating] = useState(0);

    // useEffect(() => {
    //     getProductById(1).then(x => setProduct(x));
    // }, []);
    let value1 = 0;

    return <>
        <h1>Add Review</h1>
        <form>
            <TextField 
                label = "Name"
                value = {name}
                setValue={setName}
                />
            <SelectField 
                label="Rating"
                value={rating}
                setValue={setRating}
                options={options}/>
            <div>
                <Rating value = {value1}/>
            </div>
            <textarea></textarea>
            <button type="submit">Submit</button>
        </form>
    </>
}