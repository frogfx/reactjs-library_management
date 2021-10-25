import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import * as s from "./StyleInfoAction";

interface PropsInfoAction {
   onDelete?: Function;
}

const InfoAction: React.FC<PropsInfoAction> = ({ onDelete }) => {
   const navigate = useNavigate();
   return (
      <s.InfoAction>
         <s.Action onClick={() => navigate(-1)}>
            <Button typeColor="info">
               <s.LeftIcon /> Back
            </Button>
         </s.Action>
         {onDelete ? (
            <s.Action onClick={() => onDelete()}>
               <Button typeColor="danger">
                  <s.TrashIcon /> Delete
               </Button>
            </s.Action>
         ) : (
            <s.Action>
               <Link to="edit">
                  <Button typeColor="warning">
                     <s.PenIcon /> Edit
                  </Button>
               </Link>
            </s.Action>
         )}
      </s.InfoAction>
   );
};

export default InfoAction;
