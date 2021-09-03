import React, { ReactChild, ReactChildren, useState } from "react";
import { useForm } from "react-hook-form";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";
import TableLabel from "../../Table/TableLabel/TableLabel";
import TableTitle from "../../Table/TableTitle/TableTitle";
import TableDes from "../../Table/TableDes/TableDes";
import TableContent from "../../Table/TableContent/TableContent";
import Thead from "../../Table/Thead/Thead";
import Tr from "../../Table/Tr/Tr";
import Th from "../../Table/Th/Th";
import Tbody from "../../Table/Tbody/Tbody";
import Td from "../../Table/Td/Td";
import { BookInBorrow, Option } from "../../../interface/index";
import ModalAdd from "../../ModalAdd/ModalAdd";

interface PropsBorrowForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type FormValues = {
   borrowDate?: string;
   readers?: string;
};

const BorrowForm: React.FC<PropsBorrowForm> = ({ title, children }) => {
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const openModal = () => setIsOpenModal(true);
   const closeModal = () => setIsOpenModal(false);

   const books = [
      {
         id: "B000001",
         name: "Nhập môn công nghệ phần mềm",
         category: { key: "1", value: "Công nghệ phần mềm" },
         author: "KHTN University",
         publisYear: { key: "1", value: "2020" },
         publisher: "Bộ giáo dục và đào tạo",
         addDate: "07/30/2021",
         reciever: "Nguyễn Văn A",
         price: 30000,
      },
      {
         id: "B000002",
         name: "Xử lý ảnh số",
         category: { key: "2", value: "Khoa học máy tính" },
         author: "KHTN University",
         publisYear: { key: "2", value: "2021" },
         publisher: "Bộ giáo dục và đào tạo",
         addDate: "07/30/2021",
         reciever: "Nguyễn Văn A",
         price: 30000,
      },
   ];

   const [borrowBooks, setBorrowBooks] = useState<BookInBorrow[]>([]);
   const handleAddBook = (id: string) => {
      if (!borrowBooks.find((borrowBook) => borrowBook.id === id)) {
         const newBorrowBooks = [...borrowBooks];
         const bookChose = books.find((book) => book.id === id);
         const newBook = { ...bookChose } as BookInBorrow;
         newBorrowBooks.push(newBook);
         setBorrowBooks(newBorrowBooks);
         return "";
      } else {
         return "Book invalid in list";
      }
   };

   const handleDelBook = (id: string) => {
      const newBorrowBooks = borrowBooks.filter((book) => book.id !== id);
      setBorrowBooks(newBorrowBooks);
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   const onSubmit = (data: FormValues) => {
      console.log(data);
   };
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent onSubmit={handleSubmit(onSubmit)}>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Reader"
                     isNull
                     options={[
                        { key: "R000001", value: "R000001 - Nguyễn Văn A" },
                        { key: "R000002", value: "R000002 - Nguyễn Văn B" },
                     ]}
                     innerRef={register("readers")}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup
                     label="Borrow Date"
                     isNull
                     type="date"
                     innerRef={register("borrowDate", {
                        required: "Borrow Date is required.",
                     })}
                     error={errors.borrowDate ? errors.borrowDate.message : ""}
                  />
               </s.FormItem>
            </s.FormRow>
            <s.FormTable>
               <TableLabel>
                  <TableTitle title="Book List" />
                  <TableDes des="Click the add button to add the book to the list." />
               </TableLabel>
               <s.FormTableAdd onClick={() => openModal()} type="button">
                  <s.PlusIcon />
                  Add
               </s.FormTableAdd>
               <TableContent>
                  <Thead>
                     <Tr>
                        <Th width="3.5">No.</Th>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Category</Th>
                        <Th>Author</Th>
                        <Th isCenter>Actions</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     {borrowBooks.map((borrowBook, i) => (
                        <Tr key={i}>
                           <Td isCenter>{i + 1}</Td>
                           <Td>{borrowBook.id}</Td>
                           <Td>{borrowBook.name}</Td>
                           <Td>{borrowBook.category.value}</Td>
                           <Td>{borrowBook.author}</Td>
                           <Td isCenter>
                              <s.TrashIcon
                                 onClick={() => handleDelBook(borrowBook.id)}
                              />
                           </Td>
                        </Tr>
                     ))}
                  </Tbody>
               </TableContent>
            </s.FormTable>
            {children}
         </s.FormContent>
         <ModalAdd
            title="Book"
            options={books.map((book) => {
               return {
                  key: book.id,
                  value: `${book.id} --${book.name}`,
               } as Option;
            })}
            isOpen={isOpenModal}
            closeModal={closeModal}
            handleAdd={handleAddBook}
         />
      </s.Form>
   );
};

export default BorrowForm;
