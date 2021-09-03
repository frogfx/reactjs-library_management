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
import TableDes from "../../components/Table/TableDes/TableDes";
import TablePagination from "../../components/Table/TablePagination/TablePagination";
import { Returns } from "../../interface";
import useFetch from "../../hooks/useFetch";
import returnsApi from "../../api/returnsApi";
import Loading from "../../components/Loading/Loading";
import PageContent from "../../components/Page/PageContent/PageConent";

const ReturnsPage: React.FC = () => {
   const [data, isLoading, error] = useFetch<Returns[]>(() =>
      returnsApi.getAll()
   );
   return (
      <s.ReturnsPage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
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
                           <Th isHidden>Borrow Date</Th>
                           <Th>Return Date</Th>
                           <Th isCenter>Actions</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {data!.map((value, i) => (
                           <Tr>
                              <Td isCenter>{i + 1}</Td>
                              <Td>{value.readers.value}</Td>
                              <Td isHidden>{value.borrowDate}</Td>
                              <Td>{value.returnsDate}</Td>
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
      </s.ReturnsPage>
   );
};

export default ReturnsPage;
