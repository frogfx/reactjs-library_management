import React from "react";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleCategoryPage";
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

const CategoryPage: React.FC = () => {
   return (
      <s.CategoryPage>
         <PageTitle title="Category Manage" />
         <Table>
            <TableLabel>
               <TableTitle title="Category List" />
               <TableDes des="Here is infomation of the genre of the book." />
            </TableLabel>
            <TableActions />
            <TableContent>
               <Thead>
                  <Tr>
                     <Th width="3.5">No.</Th>
                     <Th isHidden>ID</Th>
                     <Th>Name</Th>
                     <Th isCenter>Actions</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  <Tr>
                     <Td isCenter>1</Td>
                     <Td isHidden>C000001</Td>
                     <Td>Công nghệ thông tin</Td>
                     <Td isCenter>
                        <s.Action>
                           <s.PencilIcon />
                        </s.Action>
                        <s.Action>
                           <s.TrashIcon />
                        </s.Action>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td isCenter>2</Td>
                     <Td isHidden>C000002</Td>
                     <Td>Khoa học máy tính</Td>
                     <Td isCenter>
                        <s.Action>
                           <s.PencilIcon />
                        </s.Action>
                        <s.Action>
                           <s.TrashIcon />
                        </s.Action>
                     </Td>
                  </Tr>
               </Tbody>
            </TableContent>
            <TablePagination />
         </Table>
      </s.CategoryPage>
   );
};

export default CategoryPage;
