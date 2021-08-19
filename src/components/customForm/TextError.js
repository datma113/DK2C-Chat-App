import React from 'react'

const TextError = (props) => {
    return (
        <div className="text-danger">
            {props.children}
        </div>
    )
}

export default TextError
