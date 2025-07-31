import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChatRoom } from './ChatRoomItemTypes'; // ChatRoom 타입을 별도 파일로 분리하는 것을 권장

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
                                : require('./assets/defaultAvatar.png') // imgUnsplashGKxkbyCDk 대체
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        width: 48,
        height: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    onlineIndicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 12,
        height: 12,
        backgroundColor: '#22c55e',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#faf8f5',
    },
    chatInfo: {
        flex: 1,
        marginLeft: 12,
        minWidth: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937', // text-neutral-800
        flexShrink: 1,
    },
    timestamp: {
        fontSize: 10,
        color: '#9ca3af', // text-neutral-400
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 12,
        color: '#6b7280', // text-neutral-500
        flexShrink: 1,
    },
    unreadBadge: {
        marginLeft: 8,
        backgroundColor: '#FF7841',
        paddingHorizontal: 6,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#fff',
    },
});
