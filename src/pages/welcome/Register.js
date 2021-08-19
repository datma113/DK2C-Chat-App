import React from 'react'
import logo from "../../assets/image/LOGO.png";
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/customForm/FormikControl'
const Register = () => {

  return (
    <Formik initialValues={{ phoneNumber: '' , fullName: '', email:''}}
      validationSchema={Yup.object({
        phoneNumber: Yup.string()
          .matches(/^[0-9]*$/, "Số điện thoại phải là số!")
          .max(10, 'Số điện thoại quá dài')
          .min(10, 'Số điện thoại quá ngắn')
          .required('Số điện thoại là bắt buộc')
        ,
          fullName: Yup.string()
          .max(20, 'Tên tối đa 20 chữ cái')
          .required('Tên là bắt buộc!'),
        email: Yup.string().email('Địa chỉ email không hợp lệ').required('Email là bắt buộc!'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        // setSubmitting(false);
      }}>
      <Form >
        <div className="d-flex justify-content-center mt-5">
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center welcome-container">
            <img src={logo} alt="" className="welcome-container__logo " />
            <p className="text-title mt-3">Đăng ký</p>
            <div className="mt-3 col-6 ">
              <FormikControl
                control="input"
                label="Số điện thoại:"
                name="phoneNumber"
                type="string"
              />
              <FormikControl
                control="input"
                label="Họ và tên:"
                name="fullName"
                type="string"
              />
              <FormikControl
                control="input"
                label="email:"
                name="email"
                type="string"
              />
            </div>
            <button className="btn btn-secondary btn-welcome" type="submit">Đăng ký</button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default Register
