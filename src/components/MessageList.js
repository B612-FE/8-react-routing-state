import styled from "styled-components";
import MessageItem from "./MessageItem";
import { useRecoilValue } from "recoil";
import { messageDefault } from "../atom";

const MessageList = ({ sender }) => {
  const message = useRecoilValue(messageDefault);
  return (
    <MessageListWrapper>
      {message[sender].map((it) => (
        <MessageItem key={it.id} {...it} />
      ))}
    </MessageListWrapper>
  );
};

const MessageListWrapper = styled.div`
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

MessageList.defaultProps = [];
export default MessageList;
