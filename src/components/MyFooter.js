import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyFooter = () => {
  const navigate = useNavigate();
  return (
    <MyFooterWrapper>
      <ToProfile onClick={() => navigate("/")}>🧑🏻‍👩🏻‍👧🏻</ToProfile>
      <ToChatList onClick={() => navigate("/ChatList")}>✉️</ToChatList>
    </MyFooterWrapper>
  );
};

const MyFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-top: 2px solid;
`;

const ToProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.5rem;
  cursor: pointer;
`;

const ToChatList = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.5rem;
  cursor: pointer;
`;

export default MyFooter;
