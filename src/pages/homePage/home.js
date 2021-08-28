import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
import InboxList from "./InboxList";
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
                <div>
                    <InboxList />
                </div>
            )}
        </div>
    );
};

export default Home;
