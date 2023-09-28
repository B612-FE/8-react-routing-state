import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MainPage = () => {
  return (
    <MainWrapper>
        <Link to="/FriendList">
            <Start>채팅방 입장하기</Start>
        </Link>
    </MainWrapper>
    
  )
}

const MainWrapper = styled.div`
  box-shadow: 1px 1px 3px 3px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 1rem;
  width: 30rem;
  height: 45rem;
  background: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Start = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 1rem;
  background: #fff;
  width: 10rem;
  color: black;
  
`;
export default MainPage;
