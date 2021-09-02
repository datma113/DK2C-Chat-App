import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
import { useState } from "react";
import Loading from "../../components/Loading";
import Introducing from "./Introducing";
import SendMessage from "./SendMessage";
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
                                    <SendMessage />
                                </div>
                            </div>
                            <div className="col-3 d-none d-lg-flex">NOTHING HERE</div>
                        </>
                    ) : (
                        <div className="col-9 d-flex align-items-center flex-column mt-5">
                           <Introducing />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
