import React from "react";
import Pagination from "../../Pagination/Pagination";
import * as s from "../StyleTable";

const TablePagination: React.FC = () => {
   return (
      <s.Pagination>
         <s.PaginationDes>Showing 1 to 10 of 57 entries</s.PaginationDes>
         <Pagination />
      </s.Pagination>
   );
};

export default TablePagination;
