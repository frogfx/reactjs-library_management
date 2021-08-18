import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleBookPage";
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

const BookPage: React.FC = () => {
   return (
      <s.BookPage>
         <PageTitle title="Book Manage" />
         <Table>
            <TableLabel>
               <TableTitle title="Book List" />
               <TableDes des="Here is a brief infomation of the book. Click on the Eye icon to see details." />
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
                           <s.EyeIcon />
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
                           <s.EyeIcon />
                        </Link>
                     </Td>
                  </Tr>
               </Tbody>
            </TableContent>
            <TablePagination />
         </Table>
      </s.BookPage>
   );
};

export default BookPage;
