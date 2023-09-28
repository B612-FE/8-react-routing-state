import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import FriendsList from "./pages/FriendsList";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import InitialPage from "./pages/InitialPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<InitialPage />} />
        <Route path="/FriendsList" element={<FriendsList />} />
        <Route path="/Chat" element={<ChatList />} />
        <Route path="/ChatRoom" element={<ChatRoom />} />
      </Routes>
    </Container>
  );
}
//기본 화면, 친구 리스트, 채팅방화면, 채팅방리스트 화면으로 경로 정하기!!

const Container = styled.div`
  box-shadow: 1px 1px 2px 2px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 0.5rem;
  width: 24rem;
  height: 43rem;
`;

export default App;
