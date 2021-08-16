import React, { ReactChild, ReactChildren } from "react";
import * as s from "../StylePage";

interface PropsPageContent {
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const PageContent: React.FC<PropsPageContent> = ({ children }) => {
   return <s.Content>{children}</s.Content>;
};

export default PageContent;
