import React from "react";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "./StyleProfileInfo";
import Button from "../../Button/Button";
import ImageInfo from "./ImageInfo/ImageInfo";
import { Link } from "react-router-dom";

const ProfileInfo: React.FC = () => {
   return (
      <s.ProfileInfo>
         <s.Info>
            <s.Title>My Profile</s.Title>
            <s.Content>
               <s.Left>
                  <ImageInfo />
                  <div>
                     <Link to="image">
                        <Button typeColor="primary">
                           <s.PenIcon />
                           Image
                        </Button>
                     </Link>
                  </div>
               </s.Left>
               <s.Right>
                  <s.Item>
                     <InfoGroup name="Name" value="Nguyễn Văn A" />
                  </s.Item>
                  <s.Item>
                     <InfoGroup
                        name="Address"
                        value="227 Nguyễn Văn Cừ, Quận 5 "
                     />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Date of birth" value="20/05/1999" />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Phone" value="0123456789" />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Degree" value="College" />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Position" value="Employee" />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Part" value="Librarian" />
                  </s.Item>
                  <Link to="password">
                     <Button typeColor="primary">
                        <s.PenIcon />
                        Password
                     </Button>
                  </Link>
               </s.Right>
            </s.Content>
         </s.Info>
      </s.ProfileInfo>
   );
};

export default ProfileInfo;
