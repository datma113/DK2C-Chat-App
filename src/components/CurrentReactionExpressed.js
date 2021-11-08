import React from "react";
import hahaIcon from "../assets/image/haha.png";
import angryIcon from "../assets/image/angry.png";
import sadIcon from "../assets/image/sad.png";
import likeIcon from "../assets/image/like.png";
import loveIcon from "../assets/image/love.png";
import wowIcon from "../assets/image/wow.png";
import { getMembersExpressReactions } from "../redux/action/actHome";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CurrentReactionExpressed = ({ reactions = [], messageId }) => {
    const dispatch = useDispatch();
    const memsExpressReactions = useSelector((state) => state.memsExpressReactions);
    const checkReactions = (type) => {
        const REACTION = {
            HAHA: hahaIcon,
            SAD: sadIcon,
            ANGRY: angryIcon,
            LIKE: likeIcon,
            LOVE: loveIcon,
            WOW: wowIcon,
        };
        return REACTION[type] || [];
    };
    const isEmptyReaction = () => {
        return reactions.length ? "" : "d-none";
    };
    const limitReactions = (reactions) => {
        return reactions.length > 3 ? reactions.slice(0, 3) : reactions;
    };

    const REACTIONS_UNIQUE = [...new Set(reactions.map((reaction) => reaction.type))];

    const reactionsMap = limitReactions(REACTIONS_UNIQUE).map((reaction, index) => {
        return (
            <img
                key={index}
                src={checkReactions(reaction)}
                alt={reaction.type}
                className="image-expression"
            />
        );
    });

    const openModalMembersExpressReactions = () => {
        dispatch(getMembersExpressReactions(messageId));
    };

    const renderBodyOfMemsReactionModal = memsExpressReactions.map((mem, index) => {
        return (
            <div className={`row pb-4`} key={index}>
                <div className="col-2">
                    <img className=" header-img" src={mem.reactByUser.imageUrl} alt="" />
                </div>
                <div className="col-7 d-flex"> {mem.reactByUser.displayName}</div>
                <div className="col-2">
                    <img className=" header-img" src={checkReactions(mem.type)} alt="" />
                </div>
            </div>
        );
    });

    return (
        <>
            <div
                className={`current-reactions-expressed ${isEmptyReaction()}`}
                data-mdb-toggle="modal"
                data-mdb-target={`#memberExpressReactionsModal${messageId}`}
                onClick={() => openModalMembersExpressReactions()}
            >
                {reactionsMap}
            </div>
            <div
                className="modal fade"
                id={`memberExpressReactionsModal${messageId}`}
                tabIndex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog add-friends-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Thành viên bày tỏ cảm xúc
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center mems-express-reaction-modal">
                            {renderBodyOfMemsReactionModal}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light btn-lg"
                                data-mdb-dismiss="modal"
                            >
                                Trở lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentReactionExpressed;
