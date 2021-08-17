import React, { ReactChild, ReactChildren } from "react";
import ChoseFile from "../../ChoseFile/ChoseFile";
import ImageInfo from "../../Info/ProfileInfo/ImageInfo/ImageInfo";
import FormTitle from "../FormTitle/FormTitle";
import * as s from "../StyleForm";

interface PropsImageForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const ImageForm: React.FC<PropsImageForm> = ({ title, children }) => {
   return (
      <s.Form>
         <FormTitle title={title} />
         <s.FormContent>
            <s.FormImage>
               <ImageInfo medium />
               <ChoseFile />
            </s.FormImage>
            {children}
         </s.FormContent>
      </s.Form>
   );
};

export default ImageForm;
