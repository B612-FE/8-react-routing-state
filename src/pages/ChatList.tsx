import { useRecoilState } from "recoil";
import ChatListItem from "../components/list/ChatLIstItem";
import Navigation from "../components/Navi";
import { Container, ListDiv, ListWrap, StyledLink } from "../components/style";
import { currentId, roomId } from "../store/recoil/recoil";
import UserData from "../store/UserData.json";

const ChatList = () => {
  let userData = UserData.users;//useData.json에서 데이터 가져옴
  const [roomNum, setRoomNum] = useRecoilState(roomId);
//컴포넌트 렌더링하기
//Container컴포넌트로 애플리케이션의 레이아웃
//Navigation 컴포넌트 렌더링->찾기 요소
//ListWrap 채팅목록 요소 넣기
return (
    <Container> 
      <Navigation />
      <ListWrap>
        <ListDiv>채팅</ListDiv>
        {userData.map((people) =>
          people.userId != 0 ? (
            <StyledLink
              to="/ChatRoom"
              style={{ textDecoration: "none", color: "#000" }}
              state={{ room: people.userId }}
              onClick={() => {
                setRoomNum(people.userId);
              }}
            >
              <ChatListItem
                key={people.userId}
                userID={people.userId}
                profileImg={people.profileImage}
                name={people.userName}
                PersonalMessage={people.personalMessage}
              />
            </StyledLink>
          ) : (
            <></>
          )
        )}
      </ListWrap>
    </Container>
  );
};

export default ChatList;
