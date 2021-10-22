import React from "react";
import { Staff } from "../../interface/index";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import CurrentUser from "../../components/Message/CurrentUser/CurrentUser";
import MessageList from "../../components/Message/MessageList/MessageList";
import UserList from "../../components/Message/UserList/UserList";
import PageContent from "../../components/Page/PageContent/PageConent";
import PageTitle from "../../components/Page/PageTitle/PageTitle";
import staffApi from "../../api/staffApi";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import * as s from "./StyleChatPage";

const ChatPage: React.FC = () => {
   const [data, isLoading, error] = useFetch<Staff[]>(() => staffApi.getAll());
   return (
      <div>
         {isLoading ? (
            <Loading />
         ) : (
            <s.ChatPage>
               <PageContent>
                  <PageTitle title="Messages" />
                  <s.Container>
                     <s.MessageUsers>
                        <s.Search>
                           <InputGroup placeholder="Search..." />
                        </s.Search>
                        <s.List>
                           <UserList users={data} />
                        </s.List>
                     </s.MessageUsers>
                     <s.MessageBox>
                        <s.BoxTop>
                           <CurrentUser />
                        </s.BoxTop>
                        <s.BoxCenter>
                           <MessageList />
                        </s.BoxCenter>
                        <s.BoxBottom>
                           <s.InputSend placeholder="Type your message" />
                           <s.Send>Send</s.Send>
                        </s.BoxBottom>
                     </s.MessageBox>
                  </s.Container>
               </PageContent>
            </s.ChatPage>
         )}
      </div>
   );
};

export default ChatPage;
