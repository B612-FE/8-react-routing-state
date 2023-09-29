import { atom, selector } from "recoil";
import FriendItems from "../assets/FriendItems.json"


export const friendState = atom({
    key:'friends',
    default: FriendItems.users,
});
