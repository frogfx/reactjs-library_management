import React from "react";
import * as s from "./StyleProfilePage";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import ProfileInfo from "../../components/Info/ProfileInfo/ProfileInfo";

const ProfilePage: React.FC = () => {
   return (
      <s.ProfilePage>
         <PageTitle title="Profile" />
         <ProfileInfo />
      </s.ProfilePage>
   );
};

export default ProfilePage;
