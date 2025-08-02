import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ChatRoom } from '../../types/ChatRoomItemTypes'; // ChatRoom 타입을 별도 파일로 분리하는 것을 권장
import { styles } from './styles';

interface ChatRoomItemProps {
    chatRoom: ChatRoom;
    onClick: () => void;
}

export function ChatRoomItem({ chatRoom, onClick }: ChatRoomItemProps) {
    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return date.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
            });
        } else if (diffDays === 1) {
            return '어제';
        } else if (diffDays < 7) {
            return date.toLocaleDateString('ko-KR', { weekday: 'short' });
        } else {
            return date.toLocaleDateString('ko-KR', {
                month: 'short',
                day: 'numeric',
            });
        }
    };

    return (
        <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
            <View style={styles.container}>
                {/* Profile Image */}
                <View style={styles.avatarContainer}>
                    <Image
                        source={
                            chatRoom.avatar
                                ? { uri: chatRoom.avatar }
                                : require('../../assets/images/sample.png') // imgUnsplashGKxkbyCDk 대체
                        }
                        style={styles.avatar}
                    />
                    {chatRoom.isOnline && <View style={styles.onlineIndicator} />}
                </View>

                {/* Chat Info */}
                <View style={styles.chatInfo}>
                    <View style={styles.header}>
                        <Text style={styles.name} numberOfLines={1}>
                            {chatRoom.name}
                        </Text>
                        <Text style={styles.timestamp}>{formatTime(chatRoom.timestamp)}</Text>
                    </View>

                    <View style={styles.messageRow}>
                        <Text style={styles.lastMessage} numberOfLines={1}>
                            {chatRoom.lastMessage}
                        </Text>
                        {chatRoom.unreadCount && chatRoom.unreadCount > 0 && (
                            <View style={styles.unreadBadge}>
                                <Text style={styles.unreadText}>
                                    {chatRoom.unreadCount > 99 ? '99+' : chatRoom.unreadCount}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
