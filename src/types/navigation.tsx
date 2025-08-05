import { ChatRoom } from "./ChatRoomItemTypes";

export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
};

export type ChatStackParamList = {
    ChatRoomList: undefined;
    ChatRoom: { roomId: string };
};