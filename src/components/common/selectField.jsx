export const SelectField = ({ label, value, setValue, options, }) => {
    
    
    
    return <div className="form-group mb-3">
    <label htmlFor="value">{label}</label>
    <select id="value"
        name="value"
        className="form-control"
        value={value}
        onChange={event => setValue(event.target.value)}>
            { <option></option> }
            {
                options.map((x) => <option key={x.value} value={x.value}>{x.label}</option>)
            }
    </select>
</div>;
}