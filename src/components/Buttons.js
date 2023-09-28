import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Buttons = () => {

    const navigate = useNavigate();
  return (
    <ButtonsWrapper>
        <Friends onClick={() => navigate("/FriendList")}>aaaa</Friends>
        <ChatList onClick={() => navigate("/ChatList")}>b</ChatList>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;

`;

const Friends = styled.section`
    flex: 1; 
    text-align: center;
    border: 1px solid #ccc;
    padding: 10px; 
`;

const ChatList = styled.section`
    flex: 1; 
    text-align: center; 
    border: 1px solid #ccc; 
    padding: 10px; 
`;

export default Buttons;