import React from "react";
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
}

const ModalAdd: React.FC<PropsModal> = ({
   title,
   options,
   isOpen,
   closeModal,
}) => {
   return (
      <s.ModalAdd isOpen={isOpen}>
         <s.Modal>
            <s.Title>{`Chose ${title}`}</s.Title>
            <s.Select>
               <SelectGroup options={options} />
            </s.Select>
            <s.Action>
               <Button typeColor="primary" type="button">
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
