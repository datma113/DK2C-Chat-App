import React from "react";
import { useSelector } from "react-redux";
import groupImg from "../../assets/image/group.png";
import ListGroups from "./ListGroups";

const Groups = () => {
    const groupsList = useSelector((state) => state.groups);
    return (
        <div className="row container">
            <div className="col-12  ">
                <div className="headerFriend row p-3 ">
                    <div className="col-1 ">
                        <div className="friend__img">
                            <img src={groupImg} alt="" />
                        </div>
                    </div>

                    <div className="col-9 d-flex align-items-center">
                        <div className=" text-large">Danh sách nhóm</div>
                    </div>
                </div>
            </div>
            <br />
            <div className=" friendhome__friendRequest-list col-12 gap-3">
                <div className="col-12" style={{ height: "20px" }}></div>
                <div className=" col-12">
                    <h4>&nbsp;Tất cả ({groupsList.length})</h4>
                </div>
                <div>
                    <ListGroups groupsList={groupsList} />
                </div>
            </div>
        </div>
    );
};

export default Groups;
