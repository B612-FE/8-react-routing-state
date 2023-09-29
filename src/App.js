import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import Member from "./pages/Member";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import styled from "styled-components";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Member />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/ChatRoom/:sender" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </RecoilRoot>
  );
}
const Main = styled.div`
  text-align: center;
  background-color: #7f7f7f;
  width: 23rem;
  height: 45rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
export default App;
