import { atom, selector } from "recoil";
import Message from "../Message.json";
import { chat, chatRoom } from "../../interface/interface";
//atom을 사용해서 상태 관리 용이하게하기
//현재 선택된 id,채팅방 아이디, 채팅방 목록 나타내기
export const currentId = atom<number>({
  key: "currentId",
  default: 0,
});

export const roomId = atom<number>({
  key: "roomId",
  default: 1,
});

export const chatList = atom<chatRoom[]>({
  key: "chatList",
  default: Message,
});
//selector를 사용해서 get(ChatList)를 이용해서 현재 채팅방 목록 불러오기
//get(roomId)를 통해 현재 선택된 채팅 방 id가져오기
//filter함수를 사용해서 찾기 기능 넣기!!
export const chattingRoom = selector({
  key: "chattingRoom",
  get: ({ get }) => {
    const im_chatroom = get(chatList);
    const roomNumber = get(roomId);
    const chatRoom = im_chatroom.filter((room) => room.roomId === roomNumber);
    return chatRoom;
  },
});
