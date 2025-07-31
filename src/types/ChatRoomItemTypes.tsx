// ChatRoomItemTypes.ts
export interface ChatRoom {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: Date;
    avatar?: string;
    unreadCount?: number;
    isOnline?: boolean;
}
