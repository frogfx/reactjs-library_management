import React from "react";
import { Category } from "../../interface/index";
import { useNavigate, Link } from "react-router-dom";
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
import useFetch from "../../hooks/useFetch";
import categoryApi from "../../api/categoryApi";
import Loading from "../../components/Loading/Loading";
import PageContent from "../../components/Page/PageContent/PageConent";
import Notification from "../../assets/Notification";
import NotificationContent from "../../components/Notification/NotificationContent";

const CategoryPage: React.FC = () => {
   const navigate = useNavigate();
   const [data, isLoading, error, setIsLoading] = useFetch<Category[]>(() =>
      categoryApi.getAll()
   );

   const handleDelete = (id: string) => {
      categoryApi.delete(id).then((res) => {
         if (res.data.delete === true) {
            navigate("/book-manage/category");
            setIsLoading(true);
            Notification(
               "success",
               <NotificationContent
                  type="success"
                  message="Delete Category success—check it out!"
               />
            );
         } else {
            Notification(
               "danger",
               <NotificationContent
                  type="danger"
                  message="Delete Category failed—check it out!"
               />
            );
         }
      });
   };

   const handleEdit = (id: string) => {
      Notification(
         "danger",
         <NotificationContent
            type="danger"
            message="Update Category success—check it out!"
         />
      );
   };

   return (
      <s.CategoryPage>
         {isLoading ? (
            <Loading />
         ) : (
            <PageContent>
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
                        {data!.map((value, i) => (
                           <Tr key={i}>
                              <Td isCenter>{i + 1}</Td>
                              <Td isHidden>{value.id}</Td>
                              <Td>{value.name}</Td>
                              <Td isCenter>
                                 <Link
                                    to={`/book-manage/category/${value.id}/edit`}
                                 >
                                    <s.Action>
                                       <s.PencilIcon />
                                    </s.Action>
                                 </Link>
                                 <s.Action
                                    onClick={() => handleDelete(value.id)}
                                 >
                                    <s.TrashIcon />
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
      </s.CategoryPage>
   );
};

export default CategoryPage;
