import React from 'react'
import { useDispatch } from 'react-redux';
import TagOfOptionRoom from "../components/TagOfOptionRoom";
import { outRoom } from '../redux/action/actInfoRoom';
import MyCustomModal from "./MyCustomModal";


const OutRoom = ({roomId, inboxId}) => {
     const dispatch = useDispatch()
     const renderOutRoom = () => {
          return <div> Bạn có muốn rời nhóm này khum?</div>;
      };

      const outRoomHandle = () => {
           console.log(inboxId);
         //dispatch(outRoom(roomId, inboxId))
      }
      return (
          <>
              <TagOfOptionRoom
                  id="outRoom"
                  colorIcon="text-danger"
                  classIcon="fas fa-user-slash"
                  text="Rời nhóm này"
              />
              <MyCustomModal
                  inner={renderOutRoom()}
                  headerTitle="Rời khỏi nhóm"
                  id="outRoom"
                  functionWhenClick={() => outRoomHandle()}
              />
          </>
      );
}

export default OutRoom
