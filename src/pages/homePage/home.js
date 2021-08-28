import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";
import Welcome from "../welcome/Welcome";
const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage());
    }, [dispatch]);

    return <div>{!authentication.isLoggin && <Welcome />}</div>;
};

export default Home;
