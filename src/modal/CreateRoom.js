import React from 'react'
import TagOfOptionRoom from '../components/TagOfOptionRoom';
import MyCustomModal from './MyCustomModal';

import TextInput from '../components/TextInput'
import { storeRoomName } from '../redux/action/actInfoRoom';
const CreateRoom = () => {
     const renderCreateRoom = () => {
          return <div className="mt-5 center">
                   <TextInput
                    id="editRoomNameInput"
                    label="Nhập tên nhóm mới"
                    type="text"
                    functionToDispatch={storeRoomName}
                    keyStoreToReducer="name"
                />
                </div>;
      };
  
      return (
          <>
              <TagOfOptionRoom
                  id="createRoom"
                  colorIcon="text-success"
                  classIcon="fas fa-user-plus"
                  text="Tạo nhóm với người này"
              />
              <MyCustomModal
                  inner={renderCreateRoom()}
                  headerTitle="Tạo nhóm"
                  id="createRoom"
              />
          </>
      );
}

export default CreateRoom
