import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';


const InputNormal = (props) => {
  const { label, name, ...rest } = props
  return (
    <>
      <div className="input-container mb-5">
        <Field
          id={name}
          name={name}
          {...rest}
          className="w-100 input-container__input text-center"
          placeholder=" "
          autoComplete="off"

        />
        <label htmlFor={name} className="input-container__label">
          {label}
        </label>
        <ErrorMessage name={name} component={TextError} />
      </div>
     
    </>
  )
}

export default InputNormal
