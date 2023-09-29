import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Toggle from './hooks/Toggle';

function App() {

const [lastMessage,setlastMessage] = useState([]); //lastMessage 상태 변수 생성 , 초기값은 빈배열
const [message,setMessage] = useState('');
const [user, switchUser] = Toggle(); // 커스텀 훅을 이용
const [messageWidth, setMessageWidth] = useState('auto'); // 말풍선 너비 추가
const messageContainerRef = useRef(null);




const handleMessage = () =>{
  if (message) {
    const nowtime = new Date().toLocaleTimeString(); //시간 생성
    const messagetext = { text: message, time:nowtime, sender: user }; //messagetext 객체 생성
    setlastMessage([...lastMessage, messagetext]);
    // 이전의 메시지 배열을 펼친 다음, 새로운 messagetext 객체를 배열에 추가
    setMessage(''); // message 변수 비우기
  }
}

useEffect(() => {
  if (messageContainerRef.current) {
    setMessageWidth(`${messageContainerRef.current.scrollWidth}px`);
  }
}, lastMessage);

  return (
    <div className="App">
      <h2>messenger</h2>
      <button className='toggle' onClick={switchUser}>
        change ({user ==='user1' ? 'user2' : 'user1'})
      </button>
      
      <div className='messages'>
        {lastMessage.map((messagetext,index) => ( //lastMessage 배열 매핑, 배열 순회
          <div 
            key={index}
            style={{width:messageWidth}}
            className={`message-container ${
              messagetext.sender === 'user1' ? 'user1' : 'user2' //각기 다른 css 스타일 적용
           }`} >
            <div>{messagetext.text}</div>
            <div className='time'>{messagetext.time}</div>
          </div>
        ))}
      </div>
      <div className='input'>
        <input 
          type="text"
          value={message} // 입력필드 값은 message상태 변수와 연결
          placeholder='Type your message!'
          onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={handleMessage}>send</button>
      </div>
    </div>
  );
}

export default App;
