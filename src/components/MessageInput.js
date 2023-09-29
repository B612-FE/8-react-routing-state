import styled from "styled-components";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { messageDefault, userName } from "../atom";

const MessageInput = ({ senderParam }) => {
  const [message, setMessage] = useRecoilState(messageDefault);
  let clonedMessage = { ...message };
  const userNameCurr = useRecoilValue(userName);
  const onSubmit = (id, sender, chat) => {
    const newChat = { id: id, sender: sender, chat: chat };
    let updatedArr = [...clonedMessage[senderParam], newChat];
    clonedMessage[senderParam] = updatedArr;
    setMessage(clonedMessage);
  };

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onSubmit(new Date().getTime(), userNameCurr, text);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <MessageForm>
      <Message value={text} onChange={handleChange}></Message>
      <MessageButton onClick={handleSubmit}>전송</MessageButton>
    </MessageForm>
  );
};

const MessageForm = styled.form`
  display: flex;
  height: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const Message = styled.textarea`
  border-radius: 8px;
  width: 85%;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  resize: none;
`;
const MessageButton = styled.button`
  width: 15%;
  margin-right: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border-color: white;
`;

export default MessageInput;
