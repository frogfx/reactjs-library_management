import React from "react";
import * as s from "./StyleCurrentUser";

const CurrentUser: React.FC = () => {
   return (
      <s.CurrentUser>
         <s.Image src="https://appstack.bootlab.io/img/avatars/avatar-3.jpg" />
         <s.Info>
            <s.Name>Bertha Martin</s.Name>
            <s.Status>Typing...</s.Status>
         </s.Info>
      </s.CurrentUser>
   );
};

export default CurrentUser;
