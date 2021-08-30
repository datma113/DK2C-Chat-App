import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
import BoxChat from "./BoxChat";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage());
    }, [dispatch]);

    return (
        <div>
            {!authentication.isLoggin && <Welcome />}

            {authentication.isLoggin && (
                <div className="home row">
                    <div className="home__inbox-list">
                        <InboxList />
                    </div>
                    <div className="home__general col-6">
                        <BoxChat />
                    </div>
                    <div className="home__general col-3 d-none d-lg-flex">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores saepe
                        deleniti eos, culpa nihil earum!
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
