import React, { useState } from "react";
import { socketModule } from "../../module/socketModule";

const SendMessage = () => {
    const [valueOfInput, setvalueOfInput] = useState("");
    
   

    return (
        <div className="send-message-container">  
            <div contentEditable={true} />
         
        </div>
    );
};

export default SendMessage;
