import styled from "styled-components";
import MyFooter from "../components/MyFooter";
import { useNavigate } from "react-router-dom";
import chatList from "../assets/chatList";

const ChatItem = ({ sender, lastChat, lastChatTime }) => {
  const navigate = useNavigate();
  const src = `${process.env.PUBLIC_URL}/image/${sender}.jpg`;
  return (
    <ChatItemWrapper>
      <ProfileImg src={src} />
      <ChatInfoWrapper onClick={() => navigate(`/ChatRoom/${sender}`)}>
        <RoomName>{sender}</RoomName>
        <ChatInfo>
          <LastChat>{lastChat}</LastChat>
          <LastChatTime>
            {new Date(lastChatTime).toLocaleTimeString()}
          </LastChatTime>
        </ChatInfo>
      </ChatInfoWrapper>
    </ChatItemWrapper>
  );
};
const ChatItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 25rem;
  padding: 0.5rem;
`;
const ChatInfoWrapper = styled.span`
  display: flex;
  flex-direction: column;
  height: 5rem;
  align-items: start;
  justify-content: center;
`;
const RoomName = styled.div`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
const LastChat = styled.div`
  padding-left: 0.5rem;
  color: #323d5c;
`;
const LastChatTime = styled.div`
  font-size: 0.8rem;
  color: #343a40;
  padding: 0.2rem;
`;

const ChatList = () => {
  return (
    <ChatListWrapper>
      <Title>Chat</Title>
      <Chat>
        {chatList.map((it) => (
          <ChatItem key={it.roomId} {...it} />
        ))}
      </Chat>
      <MyFooter></MyFooter>
    </ChatListWrapper>
  );
};
const ChatListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Chat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: flex-start;
`;
export default ChatList;
