import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleBorrowPage";
import Td from "../../components/Table/Td/Td";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import TableLabel from "../../components/Table/TableLabel/TableLabel";
import TableTitle from "../../components/Table/TableTitle/TableTitle";
import TableContent from "../../components/Table/TableContent/TableContent";
import Thead from "../../components/Table/Thead/Thead";
import Tbody from "../../components/Table/Tbody/Tbody";
import TableActions from "../../components/Table/TableActions/TableActions";
import TableDes from "../../components/Table/TableDes/TableDes";
import TablePagination from "../../components/Table/TablePagination/TablePagination";

const BorrowPage: React.FC = () => {
   return (
      <s.BorrowPage>
         <PageTitle title="Borrow Receipt Manage" />
         <Table>
            <TableLabel>
               <TableTitle title="Borrow List" />
               <TableDes des="Here is a brief infomation of the Borrow Receipt. Click on the Eye icon to see details." />
            </TableLabel>
            <TableActions />
            <TableContent>
               <Thead>
                  <Tr>
                     <Th width="3.5">No.</Th>
                     <Th>Reader</Th>
                     <Th>Borrow Date</Th>
                     <Th isHidden>Status</Th>
                     <Th isCenter>Actions</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  <Tr>
                     <Td isCenter>1</Td>
                     <Td>Nguyễn Văn A</Td>
                     <Td>07/30/2021</Td>
                     <Td isHidden>Paid</Td>
                     <Td isCenter>
                        <s.Action>
                           <Link to="1">
                              <s.EyeIcon />
                           </Link>
                        </s.Action>
                        <s.Action>
                           <Link to="1/returns">
                              <s.ClipboardIcon />
                           </Link>
                        </s.Action>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td isCenter>2</Td>
                     <Td>Nguyễn Văn B</Td>
                     <Td>07/30/2021</Td>
                     <Td isHidden>Borrowed</Td>
                     <Td isCenter>
                        <s.Action>
                           <Link to="1">
                              <s.EyeIcon />
                           </Link>
                        </s.Action>
                        <s.Action>
                           <Link to="1/returns">
                              <s.ClipboardIcon />
                           </Link>
                        </s.Action>
                     </Td>
                  </Tr>
               </Tbody>
            </TableContent>
            <TablePagination />
         </Table>
      </s.BorrowPage>
   );
};

export default BorrowPage;
