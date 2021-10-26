import React, { ReactChild, ReactChildren, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
   BookInBorrow,
   Option,
   Readers,
   Book,
   Borrow,
   BorrowModel,
} from "../../../interface/index";
import { State } from "../../../state/reducers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import TableLabel from "../../Table/TableLabel/TableLabel";
import TableTitle from "../../Table/TableTitle/TableTitle";
import TableDes from "../../Table/TableDes/TableDes";
import TableContent from "../../Table/TableContent/TableContent";
import Thead from "../../Table/Thead/Thead";
import Tr from "../../Table/Tr/Tr";
import Th from "../../Table/Th/Th";
import Tbody from "../../Table/Tbody/Tbody";
import Td from "../../Table/Td/Td";
import ModalAdd from "../../ModalAdd/ModalAdd";
import Loading from "../../Loading/Loading";
import bookApi from "../../../api/bookApi";
import readersApi from "../../../api/readersApi";
import borrowReceiptApi from "../../../api/borrowReceiptApi";
import NotificationContent from "../../Notification/NotificationContent";
import Notification from "../../../assets/Notification";
import moment from "moment";
import * as s from "../StyleForm";

interface PropsBorrowForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   initValue?: Borrow;
   action: "add" | "edit";
}

type FormValues = {
   borrowDate?: string;
   readers?: string;
};

const BorrowForm: React.FC<PropsBorrowForm> = ({
   title,
   children,
   action,
   initValue,
}) => {
   const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   const [borrowBooks, setBorrowBooks] = useState<BookInBorrow[]>([]);
   const [readerOptions, setReaderOptions] = useState<Option[]>([] as Option[]);
   const [bookOptions, setBookOptions] = useState<Option[]>([] as Option[]);
   const [quantity, setQuantity] = useState<number>(0);
   const [books, setBooks] = useState<Book[]>([] as Book[]);
   const [isLoading, setIsLoading] = useState<Boolean>(true);
   const [add, setAdd] = useState<Boolean>(true);
   const user = useSelector((state: State) => state.auth.user);
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      setValue,
      getValues,
      setError,
      formState: { errors },
   } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });

   useEffect(() => {
      setValue(
         "borrowDate",
         moment(initValue?.borrowDate).format("YYYY-MM-DD")
      );
      const fetchData = () => {
         Promise.all([
            readersApi.getAll(),
            bookApi.getAll(),
            borrowReceiptApi.getQuantityBook(initValue?.reader.key || "0"),
         ]).then((values) => {
            const readerList: Option[] = values[0].data.data.map(
               (value: Readers) => {
                  return {
                     key: value.id,
                     value: `${value.id} - ${value.name}`,
                  } as Option;
               }
            );

            const bookList = values[1].data.data.map((value: Book) => {
               return {
                  key: value.id,
                  value: `${value.id} - ${value.name}`,
               } as Option;
            });
            if (action === "add") {
               readerList.unshift({ key: "0", value: "Select reader..." });
               setQuantity(values[2].data.data.quantity);
               setValue("readers", "0");
            } else if (action === "edit") {
               setValue("readers", initValue?.reader.key);
               setBorrowBooks(initValue?.books || ([] as BookInBorrow[]));
            }

            setReaderOptions(readerList);
            setBooks(values[1].data.data);
            setBookOptions(bookList);
            setIsLoading(false);
         });
      };
      fetchData();
   }, [setValue, initValue, action]);

   const openModal = () => {
      const readerId = getValues("readers");
      if (readerId === "0")
         setError("readers", { message: "Reader is requied" });
      else {
         setError("readers", { message: "" });
         setIsOpenModal(true);
      }
   };
   const closeModal = () => setIsOpenModal(false);

   const handleChangeReader = (e: React.FormEvent<HTMLSelectElement>) => {
      const readerId = e.currentTarget.value;
      const getQuantity = async () => {
         const res = await borrowReceiptApi.getQuantityBook(readerId);
         setQuantity(res.data.data.quantity);
      };
      getQuantity();
   };

   const handleAddBook = (id: string) => {
      const choseBook = books.find((book) => book.id === id);
      if (choseBook) {
         const newBorrowBooks = [...borrowBooks];
         newBorrowBooks.push(choseBook);
         setBorrowBooks(newBorrowBooks);
         if (quantity + newBorrowBooks.length >= 7) setAdd(false);
      }
   };

   const handleDelBook = (index: number) => {
      const newBorrowBooks = [...borrowBooks];
      newBorrowBooks.splice(index, 1);
      setBorrowBooks(newBorrowBooks);
   };

   const onSubmit = (data: FormValues) => {
      const borrow = {
         id: initValue?.id,
         reader: data.readers,
         borrowDate: data.borrowDate,
         books: borrowBooks.map((book) => book.id),
         createBy: initValue?.createBy,
         createDate: initValue?.createDate,
         paid: initValue?.paid,
      } as BorrowModel;
      if (action === "add") {
         borrow.createBy = `${user?.id} - ${user?.name}`;
         borrowReceiptApi.add(borrow).then((res) => {
            if (res.data.add === true) {
               navigate("/receipt-manage/borrow");
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Add Borrow Receipt success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Add Borrow Receipt failed—check it out!"
                  />
               );
            }
         });
      }
      if (action === "edit") {
         borrowReceiptApi.update(borrow).then((res) => {
            if (res.data.update === true) {
               navigate(`/receipt-manage/borrow/${borrow.id}`);
               Notification(
                  "success",
                  <NotificationContent
                     type="success"
                     message="Update Borrow Receipt success—check it out!"
                  />
               );
            } else {
               Notification(
                  "danger",
                  <NotificationContent
                     type="danger"
                     message="Update Borrow Receipt failed—check it out!"
                  />
               );
            }
         });
      }
   };
   return (
      <s.Form>
         <FormTitle title={title} />
         {isLoading ? (
            <Loading />
         ) : (
            <div>
               <s.FormContent onSubmit={handleSubmit(onSubmit)}>
                  <s.FormRow>
                     <s.FormItem>
                        <SelectGroup
                           label="Reader"
                           isNull
                           options={readerOptions}
                           innerRef={register("readers")}
                           callBackChange={handleChangeReader}
                           error={errors.readers ? errors.readers.message : ""}
                           isDisable={action === "edit" ? true : false}
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
                           error={
                              errors.borrowDate ? errors.borrowDate.message : ""
                           }
                        />
                     </s.FormItem>
                  </s.FormRow>
                  <s.FormTable>
                     <TableLabel>
                        <TableTitle title="Book List" />
                        <TableDes des="Click the add button to add the book to the list." />
                     </TableLabel>
                     <s.FormTableAdd
                        onClick={() => openModal()}
                        type="button"
                        disabled={!add}
                     >
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
                                       onClick={() => handleDelBook(i)}
                                    />
                                 </Td>
                              </Tr>
                           ))}
                        </Tbody>
                     </TableContent>
                     {!add && (
                        <s.Error>
                           The number of borrowed books has reached the limit!
                        </s.Error>
                     )}
                  </s.FormTable>
                  {children}
               </s.FormContent>
               <ModalAdd
                  title="Book"
                  options={bookOptions}
                  isOpen={isOpenModal}
                  closeModal={closeModal}
                  handleAdd={handleAddBook}
               />
            </div>
         )}
      </s.Form>
   );
};

export default BorrowForm;
