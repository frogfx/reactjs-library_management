import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleReadersPage";
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
import readersApi from "../../api/readersApi";
import useFetch from "../../hooks/useFetch";
import { Readers } from "../../interface/index";
import Loading from "../../components/Loading/Loading";
import PageContent from "../../components/Page/PageContent/PageConent";

const ReadersPage: React.FC = () => {
   const [data, isLoading, error] = useFetch<Readers[]>(() =>
      readersApi.getAll()
   );
   return (
      <s.ReadersPage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Readers Manage" />
               <Table>
                  <TableLabel>
                     <TableTitle title="Readers List" />
                     <TableDes des="Here is a brief infomation of the Readers. Click on the Eye icon to see details." />
                  </TableLabel>
                  <TableActions />
                  <TableContent>
                     <Thead>
                        <Tr>
                           <Th width="3.5">No.</Th>
                           <Th isHidden>ID</Th>
                           <Th>Name</Th>
                           <Th>Category</Th>
                           <Th isHidden>Address</Th>
                           <Th isCenter>Actions</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {data!.map((value, i) => (
                           <Tr>
                              <Td isCenter>{i + 1}</Td>
                              <Td isHidden>{value.id}</Td>
                              <Td>{value.name}</Td>
                              <Td>{value.category.value}</Td>
                              <Td isHidden>{value.address}</Td>
                              <Td isCenter>
                                 <Link to="1">
                                    <s.EyeIcon />
                                 </Link>
                              </Td>
                           </Tr>
                        ))}
                     </Tbody>
                  </TableContent>
                  <TablePagination />
               </Table>
            </PageContent>
         )}
      </s.ReadersPage>
   );
};

export default ReadersPage;
