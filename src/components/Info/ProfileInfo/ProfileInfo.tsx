import React from "react";
import { Link } from "react-router-dom";
import { State } from "../../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "./StyleProfileInfo";
import Button from "../../Button/Button";
import ImageInfo from "./ImageInfo/ImageInfo";

const ProfileInfo: React.FC = () => {
   const user = useSelector((state: State) => state.auth.user);
   return (
      <s.ProfileInfo>
         <s.Info>
            <s.Title>My Profile</s.Title>
            <s.Content>
               <s.Left>
                  <ImageInfo
                     src={`${process.env.REACT_APP_BE}${user?.image}`}
                  />
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
                     <InfoGroup name="Name" value={user?.name} />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Address" value={user?.address} />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Date of birth" value={user?.birth_day} />
                  </s.Item>
                  <s.Item>
                     <InfoGroup name="Phone" value={user?.phone} />
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
