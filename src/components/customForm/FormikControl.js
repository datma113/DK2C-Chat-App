import React from 'react'
import InputCustom from './InputCustom'


const FormikControl = (props) => {
    const {control, ...rest} = props
    switch(control){
        case 'input': return <InputCustom {...rest} />
        case 'textarea': 
        case 'select':  
        case 'radio': 
        case 'checkbox': 
        case 'date':
        default: return null
    }
  
}

export default FormikControl
