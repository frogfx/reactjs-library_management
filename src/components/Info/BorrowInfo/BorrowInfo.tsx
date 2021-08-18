import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";
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

const BorrowInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Borrow Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value="C000001" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Reader Name" value="Nguyễn Văn A" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Borrow Date" value="07/30/2021" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoTable>
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
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td isCenter>1</Td>
                        <Td>C000001</Td>
                        <Td>Nhập môn lập trình</Td>
                        <Td>Công nghệ phần mềm</Td>
                        <Td>University</Td>
                     </Tr>
                     <Tr>
                        <Td isCenter>2</Td>
                        <Td>C000002</Td>
                        <Td>Ẩn dữ liệu và chia sẻ thông tin</Td>
                        <Td>Khoa học máy tính</Td>
                        <Td>University</Td>
                     </Tr>
                  </Tbody>
               </TableContent>
            </s.InfoTable>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default BorrowInfo;
