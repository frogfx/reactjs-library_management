import React, { ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";
import TableLabel from "../../Table/TableLabel/TableLabel";
import TableTitle from "../../Table/TableTitle/TableTitle";
import TableDes from "../../Table/TableDes/TableDes";
import TableActions from "../../Table/TableActions/TableActions";
import TableContent from "../../Table/TableContent/TableContent";
import Thead from "../../Table/Thead/Thead";
import Tr from "../../Table/Tr/Tr";
import Th from "../../Table/Th/Th";
import Tbody from "../../Table/Tbody/Tbody";
import Td from "../../Table/Td/Td";

interface PropsBorrowForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const BorrowForm: React.FC<PropsBorrowForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <SelectGroup
                     label="Reader"
                     isNull
                     options={[
                        { key: "1", value: "A" },
                        { key: "2", value: "B" },
                     ]}
                  />
               </s.FormItem>
               <s.FormItem>
                  <InputGroup label="Borrow Date" isNull type="date" />
               </s.FormItem>
            </s.FormRow>
            <s.FormTable>
               <TableLabel>
                  <TableTitle title="Book List" />
                  <TableDes des="Click the add button to add the book to the list." />
               </TableLabel>
               <TableActions />
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
                     <Tr>
                        <Td isCenter>1</Td>
                        <Td>C000001</Td>
                        <Td>Nhập môn lập trình</Td>
                        <Td>Công nghệ phần mềm</Td>
                        <Td>University</Td>
                        <Td isCenter>
                           <Link to="1">
                              <s.TrashIcon />
                           </Link>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td isCenter>2</Td>
                        <Td>C000002</Td>
                        <Td>Ẩn dữ liệu và chia sẻ thông tin</Td>
                        <Td>Khoa học máy tính</Td>
                        <Td>University</Td>
                        <Td isCenter>
                           <Link to="1">
                              <s.TrashIcon />
                           </Link>
                        </Td>
                     </Tr>
                  </Tbody>
               </TableContent>
            </s.FormTable>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default BorrowForm;
