import React from 'react'

const Email = (props) => {
    const {email, handleChange, message, placeholder} = props;
    return (
        <div>
            <label>Email*</label>
            <input type="email"
                   name="email"
                   value={email}
                   placeholder={placeholder || ''}
                   onChange={handleChange}
            />
            {message && (<span className="error">{message}</span>)}
        </div>
    );
};

export default Email;