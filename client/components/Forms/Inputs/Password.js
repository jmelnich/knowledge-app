import React from 'react'

const Password = (props) => {
    const {password, name, handleChange, label, message} = props;
    return (
        <div>
            <label>{label || 'Password*'}</label>
            <input type="password"
                   name={name || 'password'}
                   autoComplete="on"
                   value={password}
                   onChange={handleChange}
            />
            {message && (<span className="error">{message}</span>)}
        </div>
    );
}

export default Password;