import React, { useState } from 'react';

function Toggle() {
  const [isToggle, setIsToggle] = useState('user1'); //isToggle 이라는 상태변수를 만들고 초기값은 user1이다

  const switchUser = () => {
    setIsToggle((lastPerson) => (lastPerson === 'user1' ? 'user2' : 'user1'));
  }; //isToggle 상태 업데이트

  return [isToggle,switchUser]; // isToggle 상태변수, switchUser 함수 반환
}

export default Toggle;