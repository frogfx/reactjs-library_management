import React from "react";
import * as s from "./StyleSelectGroup";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
   key?: string;
   value?: string;
}

interface PropsSelectGroup {
   id?: string;
   label?: string;
   placeholder?: string;
   isNull?: boolean;
   innerRef?: UseFormRegisterReturn;
   error?: string;
   options: Option[];
   isDisable?: boolean;
   callBackChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectGroup: React.FC<PropsSelectGroup> = ({
   id,
   label,
   placeholder,
   isNull,
   innerRef,
   error,
   options,
   isDisable,
   callBackChange,
}) => {
   return (
      <s.Group>
         <s.Label>
            {label}
            {isNull && <span>*</span>}
         </s.Label>
         <s.Select
            {...innerRef}
            onChange={callBackChange}
            id={id}
            placeholder={placeholder}
            disabled={isDisable}
         >
            {options.map((option) => (
               <option key={option.key} value={option.key}>
                  {option.value}
               </option>
            ))}
         </s.Select>
         <s.Error>{error}</s.Error>
      </s.Group>
   );
};

export default SelectGroup;
