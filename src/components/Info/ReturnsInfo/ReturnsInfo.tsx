import React from "react";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";
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

const ReturnsInfo: React.FC = () => {
   return (
      <s.Info>
         <s.Title>Returns Receipt Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value="RR000001" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="ID Borrow Receipt" value="BR000001" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Reader Name" value="Nguyễn Văn A" />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Borrow Date" value="07/30/2021" />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Returns Date" value="07/30/2021" />
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
                           <input type="checkbox" disabled checked></input>
                        </Td>
                     </Tr>
                     <Tr>
                        <Td isCenter>2</Td>
                        <Td>C000002</Td>
                        <Td>Ẩn dữ liệu và chia sẻ thông tin</Td>
                        <Td>Khoa học máy tính</Td>
                        <Td>KHTN University</Td>
                        <Td isCenter>
                           <input type="checkbox" disabled></input>
                        </Td>
                     </Tr>
                  </Tbody>
               </TableContent>
            </s.InfoTable>
            <s.InfoTable>
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
            </s.InfoTable>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default ReturnsInfo;
