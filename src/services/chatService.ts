export async function fetchChatRoom(roomId: string){
    const res = await fetch('api');
    if(!res.ok)throw new Error("fail to fetch chat room");
    return res.json();
}

export async function fetchChatRoomList(){
    const res = await fetch('request chatroom list');
    if(!res.ok)throw new Error("fail to fetch chat room");
    return res.json();
}