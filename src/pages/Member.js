import styled from "styled-components";
import MyFooter from "../components/MyFooter";
import friends from "../assets/friends";

const me = { name: "세빈", profile: "몬스타엑스 콘서트 가고 싶다" };

const MemberItem = ({ name, profile }) => {
  const src = `${process.env.PUBLIC_URL}/image/${name}.jpg`;
  return (
    <MemberItemWrapper>
      <ProfileImg src={src} />
      <DetailInfo>
        <FriendName>{name}</FriendName>
        <ProfileMessage>{profile}</ProfileMessage>
      </DetailInfo>
    </MemberItemWrapper>
  );
};
const Member = () => {
  return (
    <MemberWrapper>
      <Title>Profile</Title>
      <MyProfile>
        <SubTitle>Me!</SubTitle>
        <hr />
        <MemberItem key={me.name} {...me} />
      </MyProfile>
      <FriendsProfile>
        <SubTitle>Friends!</SubTitle>
        <hr />
      </FriendsProfile>
      <Friends>
        {friends.map((it) => (
          <MemberItem key={it.name} {...it} />
        ))}
      </Friends>
      <MyFooter></MyFooter>
    </MemberWrapper>
  );
};
const MemberItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const ProfileImg = styled.img`
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 25rem;
  padding: 0.5rem;
  justify-content: center;
`;
const DetailInfo = styled.span`
  display: flex;
  flex-direction: column;
  height: 5rem;
  align-items: start;
  justify-content: center;
`;
const FriendName = styled.div`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`;
const ProfileMessage = styled.div`
  padding: 0.5rem;
  color: #343a40;
  font-size: small;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 23rem;
  height: 45rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MyProfile = styled.div`
  padding: 0.5rem;
`;

const SubTitle = styled.h3`
  display: flex;
  margin: 0;
  padding-left: 1rem;
  font-weight: bold;
  align-items: start;
`;
const Friends = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.5rem 0rem 0.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
const FriendsProfile = styled.div`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
`;
export default Member;
