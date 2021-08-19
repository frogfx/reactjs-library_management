import React from "react";
import Button from "../../components/Button/Button";
import * as s from "./StyleNotFoundPage";

const NotFoundPage: React.FC = () => {
   return (
      <s.NotFoundPage>
         <s.Logo>404</s.Logo>
         <s.Title>Page not found.</s.Title>
         <s.Des>The page you are looking for might have been removed.</s.Des>
         <s.Action>
            <Button typeColor="primary">Return to website</Button>
         </s.Action>
      </s.NotFoundPage>
   );
};

export default NotFoundPage;
