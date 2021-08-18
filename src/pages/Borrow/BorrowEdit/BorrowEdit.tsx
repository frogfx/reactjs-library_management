import React, { useState } from "react";
import * as s from "./StyleBorrowEdit";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import BorrowForm from "../../../components/Form/BorrowForm/BorrowForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import ModalAdd from "../../../components/ModalAdd/ModalAdd";

const BorrowEdit: React.FC = () => {
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const openModal = () => setIsOpenModal(true);
   const closeModal = () => setIsOpenModal(false);
   return (
      <s.BorrowEdit>
         <PageTitle title="Borrow Manage" />
         <BorrowForm openModalAddBook={openModal} title="Borrow Edit">
            <FormActionNew />
            <ModalAdd
               title="Book"
               options={[
                  {
                     key: "1",
                     value: "B000001 -- Nhập môn công nghệ phần mềm",
                  },
                  { key: "2", value: "B000005 -- Xử lý ảnh số và video" },
               ]}
               isOpen={isOpenModal}
               closeModal={closeModal}
            />
         </BorrowForm>
      </s.BorrowEdit>
   );
};

export default BorrowEdit;
