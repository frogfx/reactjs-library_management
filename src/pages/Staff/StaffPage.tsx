import React from "react";
import { Link } from "react-router-dom";
import { Staff } from "../../interface/index";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
import * as s from "./StyleStaffPage";
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
import useFetch from "../../hooks/useFetch";
import staffApi from "../../api/staffApi";
import PageContent from "../../components/Page/PageContent/PageConent";
import Loading from "../../components/Loading/Loading";

const StaffPage: React.FC = () => {
   const [data, isLoading, error] = useFetch<Staff[]>(() => staffApi.getAll());
   return (
      <s.StaffPage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
               <PageTitle title="Staff Manage" />
               <Table>
                  <TableLabel>
                     <TableTitle title="Staff List" />
                     <TableDes des="Here is a brief infomation of the Staff. Click on the Eye icon to see details." />
                  </TableLabel>
                  <TableActions />
                  <TableContent>
                     <Thead>
                        <Tr>
                           <Th width="3.5">No.</Th>
                           <Th isHidden>ID</Th>
                           <Th>Name</Th>
                           <Th isHidden>Address</Th>
                           <Th>Position</Th>
                           <Th isCenter>Actions</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {data!.map((value, i) => (
                           <Tr key={value.id}>
                              <Td isCenter>{i + 1}</Td>
                              <Td isHidden>{value.id}</Td>
                              <Td>{value.name}</Td>
                              <Td isHidden>{value.address}</Td>
                              <Td>{value.position.value}</Td>
                              <Td isCenter>
                                 <Link to={`/staff/${value.id}`}>
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
      </s.StaffPage>
   );
};

export default StaffPage;
