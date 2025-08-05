import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ChatRoomHeader } from '../../components/ChatRoomHeader/ChatRoomHeader';
import { MessageInputBar } from '../../components/MessageInputBar/MessageInputBar';
import { ChatRoom } from '../../types/ChatRoomItemTypes'; // 타입 별도 관리 권장
import { MessageList } from './MessageList';
import { styles } from './styles';
import { fetchChatRoom } from '../../services/chatService';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export interface Message {
    id: string;
    text: string;
    user: string;
    timestamp: Date;
    isOwnMessage: boolean;
}

interface ChatRoomScreenProps {
    roomId: string;
    onBack: () => void;
}

export function ChatRoomScreen({ roomId, onBack }: ChatRoomScreenProps) {
    const [chatRoom, setChatRoom] = useState<ChatRoom|null>(null);

    const [currentUser] = useState('나');
    const scrollViewRef = useRef<ScrollView>(null);

    // 메시지 추가 시 자동 스크롤
    useEffect(() => {
        fetchChatRoom(roomId);
        scrollViewRef.current?.scrollToEnd({ animated: true });
    });

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: text.trim(),
            user: currentUser,
            timestamp: new Date(),
            isOwnMessage: true,
        };

    

    };
    if (chatRoom == null){
        return null;
    }
    return (
        <View style={styles.container}>
            <ChatRoomHeader
                userName={chatRoom.name}
                isOnline={chatRoom.isOnline || false}
                onBack={onBack}
            />

            <ScrollView
                style={styles.messageContainer}
                ref={scrollViewRef}
            >
                
            </ScrollView>

            <MessageInputBar onSendMessage={handleSendMessage} />
        </View>
    );
}
