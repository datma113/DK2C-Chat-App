import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenWhenRefreshPage } from "../../redux/action/actLogin";

const Home = () => {
    const authentication = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    console.log(authentication)

    useEffect(() => {
        dispatch(getTokenWhenRefreshPage());
    }, []);

    return <div>sss</div>;
};

export default Home;
