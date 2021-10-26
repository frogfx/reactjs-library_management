import React from "react";
import { Link } from "react-router-dom";
import { Borrow } from "../../interface/index";
import * as s from "./StyleBorrowPage";
import Table from "../../components/Table/Table";
import Tr from "../../components/Table/Tr/Tr";
import Th from "../../components/Table/Th/Th";
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
import borrowReceiptApi from "../../api/borrowReceiptApi";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import PageContent from "../../components/Page/PageContent/PageConent";

const BorrowPage: React.FC = () => {
   const [data, isLoading, error] = useFetch<Borrow[]>(() =>
      borrowReceiptApi.getAll()
   );
   return (
      <s.BorrowPage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
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
                           <Th isHidden>Quantity</Th>
                           <Th isHidden>Status</Th>
                           <Th isCenter>Actions</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {data!.map((value, i) => (
                           <Tr key={value.id}>
                              <Td isCenter>{i + 1}</Td>
                              <Td>{value.reader.value}</Td>
                              <Td>{value.borrowDate}</Td>
                              <Td isHidden>{value.books.length}</Td>
                              <Td isHidden>{value.paid ? "Paid" : "Unpaid"}</Td>
                              <Td isCenter>
                                 <s.Action>
                                    <Link
                                       to={`/receipt-manage/borrow/${value.id}`}
                                    >
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
                        ))}
                     </Tbody>
                  </TableContent>
                  <TablePagination />
               </Table>
            </PageContent>
         )}
      </s.BorrowPage>
   );
};

export default BorrowPage;
