import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ChatRoomHeader } from '../../components/ChatRoomHeader/ChatRoomHeader';
import { MessageInputBar } from '../../components/MessageInputBar/MessageInputBar';
import { ChatRoom } from '../../types/ChatRoomItemTypes'; // 타입 별도 관리 권장
import { MessageList } from './MessageList';
import { styles } from './styles';

export interface Message {
    id: string;
    text: string;
    user: string;
    timestamp: Date;
    isOwnMessage: boolean;
}

interface ChatRoomScreenProps {
    chatRoom: ChatRoom;
    onBack: () => void;
}

export function ChatRoomScreen({ chatRoom, onBack }: ChatRoomScreenProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: '반갑습니다',
            user: chatRoom.name,
            timestamp: new Date(Date.now() - 60000),
            isOwnMessage: false,
        },
        {
            id: '2',
            text: '안녕하세요 반갑습니다 만',
            user: '나',
            timestamp: new Date(Date.now() - 30000),
            isOwnMessage: true,
        },
    ]);

    const [currentUser] = useState('나');
    const scrollViewRef = useRef<ScrollView>(null);

    // 메시지 추가 시 자동 스크롤
    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: text.trim(),
            user: currentUser,
            timestamp: new Date(),
            isOwnMessage: true,
        };

        setMessages(prev => [...prev, newMessage]);

        setTimeout(() => {
            const botResponses = [
                '네, 알겠습니다!',
                '좋은 생각이네요.',
                '흥미롭군요!',
                '더 자세히 말씀해 주세요.',
                '동감합니다.',
            ];

            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                user: chatRoom.name,
                timestamp: new Date(),
                isOwnMessage: false,
            };

            setMessages(prev => [...prev, botMessage]);
        }, 1000 + Math.random() * 2000);
    };

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
                <MessageList messages={messages} />
            </ScrollView>

            <MessageInputBar onSendMessage={handleSendMessage} />
        </View>
    );
}
