export const SelectField = ({ label, value, setValue, options, optionValueKey, optionLabelKey, hideBlankOption }) => {
    return <div className="form-group mb-3">
    <label htmlFor="value">{label}</label>
    <select id="value"
        name="value"
        className="form-control"
        value={value}
        onChange={event => setValue(event.target.value)}>
            { <option></option> } 
            { options.map((x) => <option value={x.value} >{x.label}</option>) }
    </select>
</div>;
}