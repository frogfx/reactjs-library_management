import React from "react";
import * as s from "./StyleReadersDetail";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import ReadersInfo from "../../../components/Info/ReadersInfo/ReadersInfo";

const ReadersDetail: React.FC = () => {
   return (
      <s.ReadersDetail>
         <PageTitle title="Readers Manage" />
         <ReadersInfo />
      </s.ReadersDetail>
   );
};

export default ReadersDetail;
