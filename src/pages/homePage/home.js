import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import Carousel from "../../components/Carousel";
import { useState } from "react";
import Loading from "../../components/Loading";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const [isLoading, setisLoading] = useState(true);
    const dispatch = useDispatch();
    const NOT_EXISTS_CURRENT_ID_BOX_CHAT = 0;

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage()).then(() => {
            setisLoading(false);
        });
    }, [dispatch]);

    return (
        <div>
            {isLoading && <Loading />}
            {!authentication.isLoggin && <Welcome />}

            {authentication.isLoggin && (
                <div className="home row">
                    {/* col-3 */}
                    <InboxList />

                    {currentIdBoxChat !== NOT_EXISTS_CURRENT_ID_BOX_CHAT ? (
                        <>
                            <div className="col-6">
                                <div>
                                    <HeaderOfBoxChat />
                                    <BoxChat />
                                </div>
                            </div>
                            <div className="col-3 d-none d-lg-flex">NOTHING HERE</div>
                        </>
                    ) : (
                        <div className="col-9 d-flex align-items-center flex-column mt-5">
                            <div className="text-large">
                                Chào mừng đến với <b className="text-xlarge"> CDK Chat </b>{" "}
                            </div>
                            <div className="text-medium text-center w-50">
                                Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người
                                thân, bạn bè được tối ưu hoá cho máy tính của bạn.
                            </div>
                            <Carousel />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
