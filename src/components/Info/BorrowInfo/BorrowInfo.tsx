import React from "react";
import * as s from "../StyleInfo";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import TableLabel from "../../Table/TableLabel/TableLabel";
import TableTitle from "../../Table/TableTitle/TableTitle";
import TableDes from "../../Table/TableDes/TableDes";
import TableContent from "../../Table/TableContent/TableContent";
import Thead from "../../Table/Thead/Thead";
import Tr from "../../Table/Tr/Tr";
import Th from "../../Table/Th/Th";
import Tbody from "../../Table/Tbody/Tbody";
import Td from "../../Table/Td/Td";
import { Borrow } from "../../../interface/index";

interface PropsBorrow {
   borrow?: Borrow;
}

const BorrowInfo: React.FC<PropsBorrow> = ({ borrow = {} as Borrow }) => {
   return (
      <s.Info>
         <s.Title>Borrow Receipt Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value={borrow.id} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Reader Name" value={borrow.reader.value} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Borrow Date" value={borrow.borrowDate} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup
                     name="Status"
                     value={borrow.paid ? "Paid" : "UnPaid"}
                  />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Create By" value={borrow.createBy} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Create Date" value={borrow.createDate} />
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
                     {borrow.books.map((book, i) => (
                        <Tr key={book.id}>
                           <Td isCenter>{i + 1}</Td>
                           <Td>{book.id}</Td>
                           <Td>{book.name}</Td>
                           <Td>{book.category.value}</Td>
                           <Td>{book.author}</Td>
                        </Tr>
                     ))}
                  </Tbody>
               </TableContent>
            </s.InfoTable>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default BorrowInfo;
