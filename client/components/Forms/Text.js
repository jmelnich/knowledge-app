import React from 'react'

const Text = (props) => {
    const {value, handleChange, message, name, placeholder} = props;
    return (
        <div>
            <label>Name</label>
            <input type="text"
                   name={name}
                   value={value}
                   placeholder={placeholder || ''}
                   onChange={handleChange}
            />
            {message && (<span className="error">{message}</span>)}
        </div>
    );
};

export default Text;