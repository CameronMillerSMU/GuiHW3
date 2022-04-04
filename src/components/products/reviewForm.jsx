export const ReviewForm = () => {
    return <>
    <div class="reviewForm">
        <h3 class="reviewFormTitle">Add Review</h3>
        <form>
            <label for="name">Your Name</label>
            <input type="text" name="name" label="name"/>
            <select name="rating" label="Rating">
                <option></option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <textarea></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
}