import React from "react";
import * as s from "./StylePagination";

const Pagination: React.FC = () => {
   return (
      <s.Pagination>
         <s.Previous>Previous</s.Previous>
         <s.List>
            <s.Item>
               <s.ItemAction isActive>1</s.ItemAction>
            </s.Item>
            <s.Item>
               <s.ItemAction>2</s.ItemAction>
            </s.Item>
            <s.Item>
               <s.ItemAction>3</s.ItemAction>
            </s.Item>
         </s.List>
         <s.Next>Next</s.Next>
      </s.Pagination>
   );
};

export default Pagination;
