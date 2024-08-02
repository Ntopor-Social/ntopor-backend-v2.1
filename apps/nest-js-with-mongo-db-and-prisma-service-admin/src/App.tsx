import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PollingList } from "./polling/PollingList";
import { PollingCreate } from "./polling/PollingCreate";
import { PollingEdit } from "./polling/PollingEdit";
import { PollingShow } from "./polling/PollingShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { PollOptionList } from "./pollOption/PollOptionList";
import { PollOptionCreate } from "./pollOption/PollOptionCreate";
import { PollOptionEdit } from "./pollOption/PollOptionEdit";
import { PollOptionShow } from "./pollOption/PollOptionShow";
import { PollList } from "./poll/PollList";
import { PollCreate } from "./poll/PollCreate";
import { PollEdit } from "./poll/PollEdit";
import { PollShow } from "./poll/PollShow";
import { MediaList } from "./media/MediaList";
import { MediaCreate } from "./media/MediaCreate";
import { MediaEdit } from "./media/MediaEdit";
import { MediaShow } from "./media/MediaShow";
import { DeviceInfoList } from "./deviceInfo/DeviceInfoList";
import { DeviceInfoCreate } from "./deviceInfo/DeviceInfoCreate";
import { DeviceInfoEdit } from "./deviceInfo/DeviceInfoEdit";
import { DeviceInfoShow } from "./deviceInfo/DeviceInfoShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { WithdrawList } from "./withdraw/WithdrawList";
import { WithdrawCreate } from "./withdraw/WithdrawCreate";
import { WithdrawEdit } from "./withdraw/WithdrawEdit";
import { WithdrawShow } from "./withdraw/WithdrawShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { ShareList } from "./share/ShareList";
import { ShareCreate } from "./share/ShareCreate";
import { ShareEdit } from "./share/ShareEdit";
import { ShareShow } from "./share/ShareShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { VoteEventList } from "./voteEvent/VoteEventList";
import { VoteEventCreate } from "./voteEvent/VoteEventCreate";
import { VoteEventEdit } from "./voteEvent/VoteEventEdit";
import { VoteEventShow } from "./voteEvent/VoteEventShow";
import { VoteEventCandidateList } from "./voteEventCandidate/VoteEventCandidateList";
import { VoteEventCandidateCreate } from "./voteEventCandidate/VoteEventCandidateCreate";
import { VoteEventCandidateEdit } from "./voteEventCandidate/VoteEventCandidateEdit";
import { VoteEventCandidateShow } from "./voteEventCandidate/VoteEventCandidateShow";
import { VoteList } from "./vote/VoteList";
import { VoteCreate } from "./vote/VoteCreate";
import { VoteEdit } from "./vote/VoteEdit";
import { VoteShow } from "./vote/VoteShow";
import { TicketCanvasList } from "./ticketCanvas/TicketCanvasList";
import { TicketCanvasCreate } from "./ticketCanvas/TicketCanvasCreate";
import { TicketCanvasEdit } from "./ticketCanvas/TicketCanvasEdit";
import { TicketCanvasShow } from "./ticketCanvas/TicketCanvasShow";
import { TicketPackageList } from "./ticketPackage/TicketPackageList";
import { TicketPackageCreate } from "./ticketPackage/TicketPackageCreate";
import { TicketPackageEdit } from "./ticketPackage/TicketPackageEdit";
import { TicketPackageShow } from "./ticketPackage/TicketPackageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NestJS with MongoDB and Prisma Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Polling"
          list={PollingList}
          edit={PollingEdit}
          create={PollingCreate}
          show={PollingShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="PollOption"
          list={PollOptionList}
          edit={PollOptionEdit}
          create={PollOptionCreate}
          show={PollOptionShow}
        />
        <Resource
          name="Poll"
          list={PollList}
          edit={PollEdit}
          create={PollCreate}
          show={PollShow}
        />
        <Resource
          name="Media"
          list={MediaList}
          edit={MediaEdit}
          create={MediaCreate}
          show={MediaShow}
        />
        <Resource
          name="DeviceInfo"
          list={DeviceInfoList}
          edit={DeviceInfoEdit}
          create={DeviceInfoCreate}
          show={DeviceInfoShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Withdraw"
          list={WithdrawList}
          edit={WithdrawEdit}
          create={WithdrawCreate}
          show={WithdrawShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
        <Resource
          name="Share"
          list={ShareList}
          edit={ShareEdit}
          create={ShareCreate}
          show={ShareShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="VoteEvent"
          list={VoteEventList}
          edit={VoteEventEdit}
          create={VoteEventCreate}
          show={VoteEventShow}
        />
        <Resource
          name="VoteEventCandidate"
          list={VoteEventCandidateList}
          edit={VoteEventCandidateEdit}
          create={VoteEventCandidateCreate}
          show={VoteEventCandidateShow}
        />
        <Resource
          name="Vote"
          list={VoteList}
          edit={VoteEdit}
          create={VoteCreate}
          show={VoteShow}
        />
        <Resource
          name="TicketCanvas"
          list={TicketCanvasList}
          edit={TicketCanvasEdit}
          create={TicketCanvasCreate}
          show={TicketCanvasShow}
        />
        <Resource
          name="TicketPackage"
          list={TicketPackageList}
          edit={TicketPackageEdit}
          create={TicketPackageCreate}
          show={TicketPackageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
