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
import { Returns } from "../../../interface/index";

interface PropsReturns {
   returns?: Returns;
}

const ReturnsInfo: React.FC<PropsReturns> = ({ returns = {} as Returns }) => {
   return (
      <s.Info>
         <s.Title>Returns Receipt Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value={returns.id} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup
                     name="ID Borrow Receipt"
                     value={returns.idBorrow}
                  />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Reader Name" value={returns.readers.value} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Borrow Date" value={returns.borrowDate} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Returns Date" value={returns.returnsDate} />
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
                     {returns.books.map((book, i) => (
                        <Tr>
                           <Td isCenter>{i + 1}</Td>
                           <Td>{book.id}</Td>
                           <Td>{book.name}</Td>
                           <Td>{book.category.value}</Td>
                           <Td>{book.author}</Td>
                           <Td isCenter>
                              <input
                                 type="checkbox"
                                 disabled
                                 checked={book.isLost ? true : false}
                              ></input>
                           </Td>
                        </Tr>
                     ))}
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
                     {returns.fines.map((fine, i) => (
                        <Tr>
                           <Td isCenter>{i + 1}</Td>
                           <Td>{fine.content}</Td>
                           <Td>{`${fine.value} VND`}</Td>
                        </Tr>
                     ))}
                  </Tbody>
                  <Tfoot>
                     <Tr>
                        <Td>Total</Td>
                        <Td></Td>
                        <Td>{`${returns.totalFine} VND`}</Td>
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
