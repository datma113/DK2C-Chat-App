import React from "react";
import welcome from "../../assets/image/welcome.jpg";
import { Link, useHistory } from "react-router-dom";
import { ANIMATE_ZOOM_IN } from "../../animate";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { CLEAR_MESSAGE_FROM_SERVER, CLEAR_USER_INFO_WHEN_DONE_REGISTER } from "../../redux/constants/constants";

const Welcome = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const renderRegisterModal = () => {
        return (
            <div className="center flex-column mt-5">
                <button
                    type="button"
                    className="btn btn-outline-warning btn-welcome"
                    onClick={() => {
                        dispatch({
                            type: CLEAR_USER_INFO_WHEN_DONE_REGISTER,
                        });
                        dispatch({
                            type: CLEAR_MESSAGE_FROM_SERVER,
                        });
                        history.push("/register-sms");
                        MySwal.close();
                    }}
                >
                    Số điện thoại
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-welcome mt-3"
                    onClick={() => {
                        dispatch({
                            type: CLEAR_USER_INFO_WHEN_DONE_REGISTER,
                        });
                        dispatch({
                            type: CLEAR_MESSAGE_FROM_SERVER,
                        });
                        history.push("/register-email");
                        MySwal.close();
                    }}
                >
                    Email
                </button>
            </div>
        );
    };

    const showRegisterModal = () => {
        MySwal.fire({
            title: "<strong>Đăng ký bằng: </strong>",
            html: renderRegisterModal(),
            showConfirmButton: false,
            showCancelButton: true,
            focusCancel: true,
            cancelButtonText: "Quay lại",
        });
    };

    return (
        <div className={`center ${ANIMATE_ZOOM_IN} `}>
            <div className="col-xl-4 col-lg-5 col-sm-6 center flex-column welcome-container">
                <img src={welcome} alt="" className="welcome-container__image" />

                <div className="text-title ">Xin chào !!</div>
                <p className="text-center">Chào mừng bạn đến với ứng dụng chat DKC</p>
                <Link to="/login">
                    <div className="btn btn-secondary btn-welcome mb-4">Đăng nhập</div>
                </Link>

                <div className="btn btn-light btn-welcome" onClick={() => showRegisterModal()}>
                    Bạn chưa có tài khoản ?
                </div>
            </div>
        </div>
    );
};

export default Welcome;
