import React from "react";
import * as s from "./StyleInputGroup";
import { UseFormRegisterReturn } from "react-hook-form";

interface PropsInputGroup {
   id?: string;
   label?: string;
   placeholder?: string;
   isNull?: boolean;
   innerRef?: UseFormRegisterReturn;
   error?: string;
   type?: string;
   isDisable?: boolean;
}

const InputGroup: React.FC<PropsInputGroup> = ({
   id,
   label,
   placeholder,
   isNull,
   error,
   type,
   isDisable,
   innerRef,
}) => {
   return (
      <s.Group>
         <s.Label>
            {label}
            {isNull && <span>*</span>}
         </s.Label>
         <s.Input
            {...innerRef}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={isDisable}
         ></s.Input>
         <s.Error>{error}</s.Error>
      </s.Group>
   );
};

export default InputGroup;
