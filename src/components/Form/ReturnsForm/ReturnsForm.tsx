import React, { ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
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
import Tfoot from "../../Table/Tfoot/Tfoot";
import InfoGroup from "../../InfoGroup/InfoGroup";

interface PropsReturnsForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const ReturnsForm: React.FC<PropsReturnsForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormRow>
               <s.FormItem>
                  <InfoGroup name="ID Borrow Receipt" value="BR000001" />
               </s.FormItem>
               <s.FormItem>
                  <InfoGroup name="Reader Name" value="Nguyễn Văn A" />
               </s.FormItem>
               <s.FormItem>
                  <InfoGroup name="Borrow Date" value="07/30/2021" />
               </s.FormItem>
            </s.FormRow>
            <s.FormRow>
               <s.FormItem isFull>
                  <InputGroup label="Returns Date" isNull type="date" />
               </s.FormItem>
            </s.FormRow>
            <s.FormTable>
               <TableLabel>
                  <TableTitle title="Book List" />
                  <TableDes des="Here is a infomation of the Books in the Borrow" />
               </TableLabel>
               <TableContent>
                  <Thead>
                     <Tr>
                        <Th width="3.5">No.</Th>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Category</Th>
                        <Th>Author</Th>
                        <Th isCenter>Lost</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td isCenter>1</Td>
                        <Td>C000001</Td>
                        <Td>Nhập môn lập trình</Td>
                        <Td>Công nghệ phần mềm</Td>
                        <Td>KHTN University</Td>
                        <Td isCenter>
                           <input type="checkbox" checked></input>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td isCenter>2</Td>
                        <Td>C000002</Td>
                        <Td>Ẩn dữ liệu và chia sẻ thông tin</Td>
                        <Td>Khoa học máy tính</Td>
                        <Td>KHTN University</Td>
                        <Td isCenter>
                           <input type="checkbox"></input>
                        </Td>
                     </Tr>
                  </Tbody>
               </TableContent>
            </s.FormTable>
            <s.FormTable>
               <TableLabel>
                  <TableTitle title="Fine List" />
                  <TableDes des="Here is a infomation of the Fine List" />
               </TableLabel>
               <TableContent>
                  <Thead>
                     <Tr>
                        <Th width="3.5">No.</Th>
                        <Th>Content</Th>
                        <Th>Fine</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td isCenter>1</Td>
                        <Td>Lost Book: Nhập môn công nghệ phần mềm</Td>
                        <Td>20.000 VND</Td>
                     </Tr>
                     <Tr>
                        <Td isCenter>2</Td>
                        <Td>Late: 7 Day</Td>
                        <Td>35.000 VND</Td>
                     </Tr>
                  </Tbody>
                  <Tfoot>
                     <Tr>
                        <Td>Total</Td>
                        <Td></Td>
                        <Td>55.000 VND</Td>
                     </Tr>
                  </Tfoot>
               </TableContent>
            </s.FormTable>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default ReturnsForm;
