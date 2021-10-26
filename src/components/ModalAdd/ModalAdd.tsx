import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import SelectGroup from "../SelectGroup/SelectGroup";
import * as s from "./StyleModalAdd";

interface Option {
   key?: string;
   value?: string;
}

interface PropsModal {
   title: string;
   isOpen: boolean;
   closeModal: Function;
   options: Option[];
   handleAdd: Function;
}

const ModalAdd: React.FC<PropsModal> = ({
   title,
   options,
   isOpen,
   closeModal,
   handleAdd,
}) => {
   const [error, setError] = useState<string>("");
   const { register, getValues, setValue } = useForm();

   useEffect(() => {
      if (options.length > 0) setValue("chose", options[0].key);
   }, [setValue, options]);

   const handleAddClick = () => {
      const messError = handleAdd(getValues("chose"));
      if (messError) {
         setError(messError);
      } else {
         setError(messError);
         closeModal();
      }
   };
   return (
      <s.ModalAdd isOpen={isOpen}>
         <s.Modal>
            <s.Title>{`Chose ${title}`}</s.Title>
            <s.Select>
               <SelectGroup
                  options={options}
                  innerRef={register("chose")}
                  error={error}
               />
            </s.Select>
            <s.Action>
               <Button
                  onClick={() => handleAddClick()}
                  typeColor="primary"
                  type="button"
               >
                  <s.BookMarkIcon />
                  Chose
               </Button>
            </s.Action>
            <s.Close onClick={() => closeModal()} type="button">
               <s.TimesIcon />
            </s.Close>
         </s.Modal>
         <s.Background onClick={() => closeModal()} />
      </s.ModalAdd>
   );
};

export default ModalAdd;
