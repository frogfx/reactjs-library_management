import React from "react";
import * as s from "./StyleChangeImage";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import ImageForm from "../../../components/Form/ImageForm/ImageForm";

const ChangeImage: React.FC = () => {
   return (
      <s.ChangeImage>
         <PageTitle title="Profile" />
         <ImageForm title="Image">
            <FormActionNew />
         </ImageForm>
      </s.ChangeImage>
   );
};

export default ChangeImage;
