import React from 'react';
import FriendItem from '../assets/FriendItem'
import styled from 'styled-components';
import Buttons from '../components/Buttons';



const Profile = ({userId, status}) => {
    const src = `${process.env.PUBLIC_URL}/img/${userId}.jpg`;
    return (
        <ProfileWrapper>
            <ProfileImg src={src} />
            <FriendInfo>
                <FriendName>{userId}</FriendName>
                <StatusMessage>{status}</StatusMessage>
            </FriendInfo>
        </ProfileWrapper>

    )
}

const FriendList = () => {
  return (
    <FriendWrapper>
        <Title>Profile</Title>
        <ProfileList>
            <SubTitle>귀여운 친구들~</SubTitle>
            {FriendItem.map((it) => (
                <Profile key={it.userId} {...it} />
            ))}
        </ProfileList>
        <Buttons />
    </FriendWrapper>
  )
}

const ProfileWrapper = styled.section`
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


const FriendInfo = styled.span`
    display: flex;
    flex-direction: column;
    height: 7rem;
    align-items: center;
    justify-content: center;
`;

const FriendName = styled.div`
    padding: 0.5rem 0.5rem 0rem 0.5rem;
`;

const StatusMessage = styled.div`
    padding: 0.5rem;
    color: black;
`;

const FriendWrapper = styled.div`
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 3px 3px lightgrey;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 1rem;
    width: 30rem;
    height: 45rem;
    background: skyblue;
`;

const Title = styled.div`
    box-sizing: border-box;
    justify-content: center;
    padding: 3rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

const SubTitle = styled.h3`
  display: flex;
  margin: 0;
  padding-left: 1rem;
  padding: 1.5rem;
  font-weight: bold;
  align-items: start;
  border-bottom: 2px solid;

`;

const ProfileList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 0.5rem 0rem 0.5rem
    overflow: auto;
`;

export default FriendList;