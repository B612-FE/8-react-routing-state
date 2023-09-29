import styled from "styled-components";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";
import MyHeader from "../components/MyHeader";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const { sender } = useParams();
  return (
    <ChatRoomWrapper>
      <MyHeader leftChild="<" rightChild="⁝" />
      <MessageList sender={sender}></MessageList>
      <MessageInput senderParam={sender} />
    </ChatRoomWrapper>
  );
};
const ChatRoomWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
export default ChatRoom;
