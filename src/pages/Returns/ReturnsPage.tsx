import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleReturnsPage";
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

const ReturnsPage: React.FC = () => {
   return (
      <s.ReturnsPage>
         <PageTitle title="Returns Receipt Manage" />
         <Table>
            <TableLabel>
               <TableTitle title="Returns List" />
               <TableDes des="Here is a brief infomation of the Returns Receipt. Click on the Eye icon to see details." />
            </TableLabel>
            <TableContent>
               <Thead>
                  <Tr>
                     <Th width="3.5">No.</Th>
                     <Th>Reader</Th>
                     <Th>Return Date</Th>
                     <Th>Status</Th>
                     <Th isCenter>Actions</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  <Tr>
                     <Td isCenter>1</Td>
                     <Td>Nguyễn Văn A</Td>
                     <Td>07/30/2021</Td>
                     <Td>Late</Td>
                     <Td isCenter>
                        <Link to="1">
                           <s.EyeIcon />
                        </Link>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td isCenter>2</Td>
                     <Td>Nguyễn Văn B</Td>
                     <Td>07/30/2021</Td>
                     <Td>On Time</Td>
                     <Td isCenter>
                        <Link to="1">
                           <s.EyeIcon />
                        </Link>
                     </Td>
                  </Tr>
               </Tbody>
            </TableContent>
            <TablePagination />
         </Table>
      </s.ReturnsPage>
   );
};

export default ReturnsPage;
