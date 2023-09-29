import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userName } from "../atom.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MyHeader = ({ leftChild, rightChild }) => {
  const { sender } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userName);
  const onToggle = () => {
    user === "세빈" ? setUser(`${sender}`) : setUser("세빈");
  };
  const handleBack = () => {
    navigate("/ChatList");
    setUser("세빈");
  };
  return (
    <MyHeaderWrapper>
      <MyHeaderButton onClick={handleBack}>{leftChild}</MyHeaderButton>
      <MyHeaderText onClick={onToggle}>{user}</MyHeaderText>
      <MyHeaderButton>{rightChild}</MyHeaderButton>
    </MyHeaderWrapper>
  );
};

const MyHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid;
`;
const MyHeaderButton = styled.button`
  width: 15%;
  background-color: #f0f0f0;
  align-items: center;
  border-radius: 100%;
  font-size: 2rem;
  cursor: pointer;
`;

const MyHeaderText = styled.span`
  width: 70%;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
`;
export default MyHeader;
