import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
import HeaderOfBoxChat from "./HeaderOfBoxChat";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const currentIdBoxChat = useSelector((state) => state.currentIdBoxChat);
    const dispatch = useDispatch();
    const NOT_EXISTS_CURRENT_ID_BOX_CHAT = 0;
    
    useEffect(() => {
        dispatch(getTokenWhenRefreshPage());
    }, [dispatch]);

    return (
        <div>
            {!authentication.isLoggin && <Welcome />}

            {authentication.isLoggin && (
                <div className="home row">
                    <div className="home__inbox-list col-3">
                        <InboxList />
                    </div>
                    <div className="col-6">
                        {currentIdBoxChat !== NOT_EXISTS_CURRENT_ID_BOX_CHAT && (
                            <div>
                                <HeaderOfBoxChat />
                                <BoxChat />
                            </div>
                        )}
                    </div>
                    <div className="col-3 d-none d-lg-flex">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores saepe
                        deleniti eos, culpa nihil earum!
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
