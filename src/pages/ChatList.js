import React from 'react'
import ChatlistItem from '../assets/ChatlistItem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons';


const Chat = ({userId,lastMessage}) => {
  const navigate = useNavigate();
  const imgPaths = [
    process.env.PUBLIC_URL + "/img/1.png",
  ]
  return (
    <ChatWrapper>
      {imgPaths.map((imagePath,index) => (
        <div key={index}>
          <ProfileImg src={imgPaths} alt={`Image ${index + 1}`} />
          
        </div>
      ))}
      <ChatInfo>
        <FriendName>{userId}</FriendName>
        <LastMessage>{lastMessage}</LastMessage>
      </ChatInfo>
    </ChatWrapper>
  )
}

const ChatList = () => {
  return (
    <ChatListWrapper>
      <Title>ChatList</Title>
      <Chattings>
        {ChatlistItem.map((it) => (
          <Chat key={it.roomId} {...it}/>
        ))}
      </Chattings>
      <Buttons />
    </ChatListWrapper>
  
    
  )
}

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 25rem;
  padding: 0.5rem;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const FriendName = styled.div`
  display: flex;
`;

const LastMessage = styled.div`
  padding-left: 0.5rem;
  color: black;
`;

const ChatListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 3px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 1rem;
  width: 30rem;
  height: 45rem;
  background: skyblue;
`;

const Title = styled.div`
  box-sizing: border-box;
  justify-content: center;
  padding: 3rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Chattings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ChatList;