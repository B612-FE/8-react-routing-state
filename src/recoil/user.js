import { atom, selector } from "recoil";
import FriendItem from "../assets/FriendItem.json"


export const friendState = atom({
    key:'friends',
    default: FriendItem.users,
});
