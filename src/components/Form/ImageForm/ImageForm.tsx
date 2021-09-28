import React, { ReactChild, ReactChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ChoseFile from "../../ChoseFile/ChoseFile";
import ImageInfo from "../../Info/ProfileInfo/ImageInfo/ImageInfo";
import FormTitle from "../FormTitle/FormTitle";
import authApi from "../../../api/authApi";
import * as s from "../StyleForm";

interface PropsImageForm {
   title?: string;
   children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
   srcImage?: string;
}

type FormValues = {
   image: FileList;
};

const ImageForm: React.FC<PropsImageForm> = ({ title, children, srcImage }) => {
   const navigate = useNavigate();
   const [isError, setIsError] = useState<boolean>(false);
   const { setValue, register, handleSubmit } = useForm<FormValues>({
      reValidateMode: "onSubmit",
   });
   const [srcImg, setSrcImg] = useState<string | undefined>(srcImage || "");
   const handleChangeSrc = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         setValue("image", e.target.files);
         const reader = new FileReader();
         reader.onload = (e) => {
            setSrcImg(e.target?.result?.toString());
         };
         reader.readAsDataURL(e.target.files[0]);
      }
   };

   const onSubmit = (data: FormValues) => {
      authApi.changeImage(data.image[0]).then((res) => {
         if (res.data.update) {
            navigate("/profile");
         } else {
            setIsError(true);
         }
      });
   };

   return (
      <div>
         {isError && <s.Error>No image selected</s.Error>}
         <s.Form>
            <FormTitle title={title} />
            <s.FormContent onSubmit={handleSubmit(onSubmit)}>
               <s.FormImage>
                  <ImageInfo medium src={srcImg} />
                  <ChoseFile
                     onChange={handleChangeSrc}
                     innerRef={register("image")}
                  />
               </s.FormImage>
               {children}
            </s.FormContent>
         </s.Form>
      </div>
   );
};

export default ImageForm;
