import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentId, roomId } from "../../store/recoil/recoil";
import UserData from "../../store/UserData.json";
import UserProfile from "../profile/HedaerProfile";
import React from "react";
import {useNavigate} from 'react-router-dom';
function ChatRoomHeader() {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  let userData = UserData.users;
  let room = useRecoilValue(roomId);
  const [userId, setUserId] = useRecoilState(currentId);

  return (
    <Header>
      <Div onClick={onClickBtn}></Div>
    </Header>
  );
}

const Header = styled.div`
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  height: 3rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  display: flex;
  flex-direction: row;
`;


const Div = styled.button`
  
  position: absolute;
  margin: 0.125rem;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background: #ff6347;
  border-radius: 1rem;
`;

export default ChatRoomHeader;
