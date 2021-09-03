import React from "react";
import * as s from "./StyleLoading";

const Loading: React.FC = () => {
   return (
      <s.Loading>
         <s.Spinner />
      </s.Loading>
   );
};

export default Loading;
