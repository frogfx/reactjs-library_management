import React from "react";
import { State } from "../../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import * as s from "./StyleChangeImage";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";
import ImageForm from "../../../components/Form/ImageForm/ImageForm";

const ChangeImage: React.FC = () => {
   const user = useSelector((state: State) => state.auth.user);
   return (
      <s.ChangeImage>
         <PageTitle title="Profile" />
         <ImageForm
            title="Image"
            srcImage={`${process.env.REACT_APP_BE}${user?.image}`}
         >
            <FormActionNew />
         </ImageForm>
      </s.ChangeImage>
   );
};

export default ChangeImage;
