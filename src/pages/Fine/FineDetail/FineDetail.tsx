import React from "react";
import * as s from "./StyleFineDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FineInfo from "../../../components/Info/FineInfo/FineInfo";

const FineDetail: React.FC = () => {
   return (
      <s.FineDetail>
         <PageTitle title="Fine Manage" />
         <FineInfo />
      </s.FineDetail>
   );
};

export default FineDetail;
