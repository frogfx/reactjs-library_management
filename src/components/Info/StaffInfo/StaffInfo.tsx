import React from "react";
import { Staff } from "../../../interface/index";
import InfoAction from "../InfoAction/InfoAction";
import InfoGroup from "../../InfoGroup/InfoGroup";
import * as s from "../StyleInfo";

interface PropsStaff {
   staff?: Staff;
}

const StaffInfo: React.FC<PropsStaff> = ({ staff = {} as Staff }) => {
   console.log(staff);
   return (
      <s.Info>
         <s.Title>Staff Detail</s.Title>
         <s.Content>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="ID" value={staff.id} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Name" value={staff.name} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Email" value={staff.email} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Address" value={staff.address} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Date of birth" value={staff.birthDay} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Phone" value={staff.phone} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Degree" value={staff.degree.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Position" value={staff.position.value} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Part" value={staff.part.value} />
               </s.InfoItem>
               <s.InfoItem>
                  <InfoGroup name="Create By" value={staff.createBy} />
               </s.InfoItem>
            </s.InfoRow>
            <s.InfoRow>
               <s.InfoItem>
                  <InfoGroup name="Create Date" value={staff.createDate} />
               </s.InfoItem>
            </s.InfoRow>
            <InfoAction />
         </s.Content>
      </s.Info>
   );
};

export default StaffInfo;
