import React from 'react'
import MyCustomButton from '../../components/MyCustomButton';
import TextInput from "../../components/TextInput";
import regexInputModule from "../../module/regexInputModule";
import { storeUserInfoWhenRegister } from "../../redux/action/actLogin";
const UserInfoRegister = ({registerFields, userRegister, isEntitledGotoNextStep}) => {

     const registerMap = registerFields.map((field, index) => {
          let checkRegex = function () {};
          let initialValue = null;
  
          switch (index) {
              case 0:
                  checkRegex = regexInputModule.checkRegexOfUserFullname;
                  initialValue = userRegister.displayName;
                  break;
              case 1:
                  checkRegex = regexInputModule.checkRegexOfUserPhone;
                  initialValue = userRegister.phoneNumber;
                  break;
              case 2:
                  checkRegex = regexInputModule.checkRegexOfUserPassword;
                  initialValue = userRegister.password;
                  break;
              default:
                  break;
          }
          return (
              <TextInput
                  key={index}
                  id={index}
                  label={field.label}
                  type={field.type}
                  checkRegex={checkRegex}
                  regexPattern={field.regexPattern}
                  functionToDispatch={storeUserInfoWhenRegister}
                  keyStoreToReducer={field.keyStoreToReducer}
                  initialValue={initialValue}
              />
          );
      });
     return (
          
                <div>
                        <div className="mt-3 col-12 ">{registerMap}</div>
                        <MyCustomButton
                            label="Tiếp tục"
                            typeButton="secondary"
                            isEntitledGotoNextStep={isEntitledGotoNextStep}
                        />
                        <MyCustomButton
                            label="Quay lại"
                            typeButton="light"
                            iconClass="fas fa-long-arrow-alt-left"
                            isGoBackHistory={true}
                        />
                    </div>
        
     )
}

export default UserInfoRegister
