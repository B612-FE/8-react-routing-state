import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userName } from "../atom";

const MessageItem = ({ id, sender, chat }) => {
  const userState = useRecoilValue(userName);
  const isUser = sender === userState;
  const src = `${process.env.PUBLIC_URL}/image/${sender}.jpg`;

  return (
    <MessageItemWrapper myAccount={isUser}>
      <ProfileImage src={src} />
      <MessageWrapper>
        <UserName myAccount={isUser}>{sender}</UserName>
        <MessageContent myAccount={isUser}>{chat}</MessageContent>
        <MessageTime myAccount={isUser}>
          {new Date(id).toISOString().replace("T", " ").slice(0, -5)}
        </MessageTime>
      </MessageWrapper>
    </MessageItemWrapper>
  );
};

const MessageItemWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.myAccount ? "row-reverse" : "row")};
  padding: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 25px;
  padding: 0.5rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  display: flex;
  flex-direction: ${(props) => (props.myAccount ? "row-reverse" : "row")};
  font-size: 0.8rem;
`;

const MessageContent = styled.span`
  padding: 0.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: ${(props) => (props.myAccount ? "row-reverse" : "row")};
  background-color: ${(props) => (props.myAccount ? "#288BA0" : "#B5008C")};
  font-size: 1rem;
  color: white;
  text-align: initial;
`;

const MessageTime = styled.div`
  font-size: 0.1rem;
  text-align: ${(props) => (props.myAccount ? "start" : "end")};
`;

export default MessageItem;
