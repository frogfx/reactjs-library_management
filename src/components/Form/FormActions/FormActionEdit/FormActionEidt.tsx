import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button/Button";
import * as s from "../StyleFormActions";

interface PropsActionEdit {
   callbackDelete: Function;
}

const FormActionEdit: React.FC<PropsActionEdit> = ({ callbackDelete }) => {
   const navigate = useNavigate();
   return (
      <s.FormActions>
         <s.Action onClick={() => navigate(-1)}>
            <Button type="button" typeColor="info">
               <s.LeftIcon /> <span>Back</span>
            </Button>
         </s.Action>
         <s.Action>
            <Button
               typeColor="danger"
               type="button"
               onClick={() => callbackDelete()}
            >
               <s.TrashIcon />
               <span>Delete</span>
            </Button>
         </s.Action>
         <s.Action>
            <Button typeColor="primary">
               <s.SaveIcon /> <span>Save</span>
            </Button>
         </s.Action>
      </s.FormActions>
   );
};

export default FormActionEdit;
