import React from 'react'

const Button = ({ title, activeClass, _Callback}) => {
    return (
        <button className={activeClass} onClick={_Callback}>{title}</button>
    )
}

export default Button