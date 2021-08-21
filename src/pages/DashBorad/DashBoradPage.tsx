import React from "react";
import BarChart from "../../components/BarChart/BarChart";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import Statistical from "../../components/Statistical/Statistical";
import StatisticalLogo from "../../components/Statistical/StatisticalLogo/StatisticalLogo";
import * as s from "./StyleDashBoradPage";

const DashBoradPage: React.FC = () => {
   return (
      <s.DashBoradPage>
         <PageTitle title="DashBorad" />
         <s.List>
            <s.Item>
               <StatisticalLogo />
            </s.Item>
            <s.Item>
               <Statistical
                  value="100"
                  time="Since last week"
                  des="Total number of books loaned"
                  icon={<s.BookIcon />}
                  percent="+5.35%"
               />
            </s.Item>
            <s.Item>
               <Statistical
                  value="200"
                  des="Total number of readers"
                  time="Since last week"
                  icon={<s.UserIcon />}
                  percent="-5.35%"
                  negative
               />
            </s.Item>
            <s.Item>
               <Statistical
                  value="300"
                  des="Total number of books in stock"
                  time="Since last week"
                  icon={<s.BookIcon />}
                  percent="+5.35%"
               />
            </s.Item>
         </s.List>
         <s.List>
            <s.Item>
               <BarChart
                  title="Book"
                  des="The chart represents the number of books loaned"
               />
            </s.Item>
            <s.Item>
               <BarChart
                  title="Readers"
                  des="The chart shows the number of registered readers"
               />
            </s.Item>
         </s.List>
      </s.DashBoradPage>
   );
};

export default DashBoradPage;
