import React from 'react'

const TextArea = (props) => {
    const {value, handleChange, message, name, placeholder} = props;
    return (
        <div>
            <label>Message</label>
            <textarea type="text"
                   name={name}
                   value={value}
                   placeholder={placeholder || ''}
                   onChange={handleChange}
            />
            {message && (<span className="error">{message}</span>)}
        </div>
    );
};

export default TextArea;