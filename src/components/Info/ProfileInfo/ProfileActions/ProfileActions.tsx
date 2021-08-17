import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import * as s from "./StyleProfileActions";

const ProfileAction: React.FC = () => {
   return (
      <s.InfoAction>
         <s.Action>
            <Link to="/">
               <Button typeColor="info">
                  <s.LeftIcon /> Back
               </Button>
            </Link>
         </s.Action>
      </s.InfoAction>
   );
};

export default ProfileAction;
