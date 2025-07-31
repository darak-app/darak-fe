import React, { useState } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
// For icons, you would typically use a library like 'react-native-vector-icons'
// For example: import Icon from 'react-native-vector-icons/Feather';
// For this example, we'll use simple text or mock the icons.

// Define types for ChatRoom
export interface ChatRoom {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: Date;
    unreadCount?: number;
    isOnline: boolean;
}

// --- ChatRoomItem Component (React Native Version) ---
interface ChatRoomItemProps {
    chatRoom: ChatRoom;
    onClick: (chatRoom: ChatRoom) => void;
}

const ChatRoomItem: React.FC<ChatRoomItemProps> = ({ chatRoom, onClick }) => {
    const timeAgo = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + '년 전';
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + '개월 전';
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + '일 전';
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + '시간 전';
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + '분 전';
        return Math.floor(seconds) + '초 전';
    };

    return (
        <TouchableOpacity onPress={() => onClick(chatRoom)} style={chatRoomItemStyles.container}>
            <View style={chatRoomItemStyles.avatarContainer}>
                <Image
                    source={{ uri: `https://placehold.co/50x50/cccccc/white?text=${chatRoom.name.charAt(0)}` }} // Placeholder image
                    style={chatRoomItemStyles.avatar}
                />
                {chatRoom.isOnline && <View style={chatRoomItemStyles.onlineIndicator} />}
            </View>

            <View style={chatRoomItemStyles.content}>
                <View style={chatRoomItemStyles.header}>
                    <Text style={chatRoomItemStyles.name}>{chatRoom.name}</Text>
                    <Text style={chatRoomItemStyles.timestamp}>{timeAgo(chatRoom.timestamp)}</Text>
                </View>
                <View style={chatRoomItemStyles.messageRow}>
                    <Text style={chatRoomItemStyles.lastMessage} numberOfLines={1}>
                        {chatRoom.lastMessage}
                    </Text>
                    {chatRoom.unreadCount && chatRoom.unreadCount > 0 && (
                        <View style={chatRoomItemStyles.unreadBadge}>
                            <Text style={chatRoomItemStyles.unreadText}>{chatRoom.unreadCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const chatRoomItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: 'transparent', // Ensure it blends with the background
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc', // Fallback background
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50', // Green for online
        borderWidth: 2,
        borderColor: 'white',
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        flexShrink: 1, // Allow text to shrink
        marginRight: 8,
    },
    timestamp: {
        fontSize: 11,
        color: '#777',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 13,
        color: '#555',
        flex: 1, // Take up available space
        marginRight: 8,
    },
    unreadBadge: {
        backgroundColor: '#FF6F61', // Orange/Red for unread count
        borderRadius: 10,
        minWidth: 20, // Ensure it's wide enough for single digit
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    unreadText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
});

// --- ChatRoomList Component (React Native Version) ---
interface ChatRoomListProps {
    onSelectChatRoom: (chatRoom: ChatRoom) => void;
}

export function ChatRoomList({ onSelectChatRoom }: ChatRoomListProps) {
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data for chat rooms
    const chatRooms: ChatRoom[] = [
        {
            id: '1',
            name: 'Alberto Moedano',
            lastMessage: '안녕하세요 반갑습니다 만',
            timestamp: new Date(Date.now() - 30000),
            unreadCount: 2,
            isOnline: true,
        },
        {
            id: '2',
            name: '김철수',
            lastMessage: '내일 회의 준비 완료했습니다',
            timestamp: new Date(Date.now() - 3600000),
            unreadCount: 1,
            isOnline: false,
        },
        {
            id: '3',
            name: '이영희',
            lastMessage: '사진 잘 받았어요 감사합니다!',
            timestamp: new Date(Date.now() - 7200000),
            isOnline: true,
        },
        {
            id: '4',
            name: '박민준',
            lastMessage: '네, 알겠습니다!',
            timestamp: new Date(Date.now() - 86400000),
            unreadCount: 5,
            isOnline: false,
        },
        {
            id: '5',
            name: '정수현',
            lastMessage: '좋은 아이디어네요',
            timestamp: new Date(Date.now() - 172800000),
            isOnline: true,
        },
        {
            id: '6',
            name: '최윤서',
            lastMessage: '오늘 일정 확인 부탁드려요',
            timestamp: new Date(Date.now() - 259200000),
            isOnline: false,
        },
    ];

    const filteredChatRooms = chatRooms.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Text style={styles.headerTitle}>채팅</Text>
                        <View style={styles.headerButtons}>
                            <TouchableOpacity style={styles.iconButton}>
                                {/* Plus Icon */}
                                <Text style={styles.icon}>➕</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                {/* Settings Icon */}
                                <Text style={styles.icon}>⚙️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Search Bar */}
                    <View style={styles.searchBarContainer}>
                        {/* Search Icon */}
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder="채팅방 검색..."
                            placeholderTextColor="#999"
                        />
                    </View>
                </View>

                {/* Chat Room List */}
                <ScrollView style={styles.chatListScrollView}>
                    {filteredChatRooms.length === 0 ? (
                        <View style={styles.noResultsContainer}>
                            <View style={styles.noResultsIconCircle}>
                                <Text style={styles.noResultsIcon}>🔍</Text>
                            </View>
                            <Text style={styles.noResultsText}>
                                검색 결과가 없습니다
                            </Text>
                            <Text style={styles.noResultsSubText}>
                                다른 키워드로 검색해보세요
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.chatRoomItemsContainer}>
                            {filteredChatRooms.map((chatRoom) => (
                                <ChatRoomItem
                                    key={chatRoom.id}
                                    chatRoom={chatRoom}
                                    onClick={() => onSelectChatRoom(chatRoom)}
                                />
                            ))}
                        </View>
                    )}
                </ScrollView>

                {/* Bottom indicator */}
                <View style={styles.bottomIndicatorContainer}>
                    <View style={styles.bottomIndicator} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#faf8f5',
    },
    container: {
        flex: 1,
        backgroundColor: '#faf8f5',
    },
    header: {
        backgroundColor: '#faf8f5',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e9dcc9',
        paddingHorizontal: 16,
        paddingVertical: 16,
        paddingTop: Platform.OS === 'android' ? 16 : 0, // Adjust for Android status bar
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600', // SF Pro Semibold is around 600
        color: '#333',
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconButton: {
        height: 32,
        width: 32,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    icon: {
        fontSize: 16, // Adjust size as needed for icons
        color: '#555',
    },
    searchBarContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        fontSize: 16,
        color: '#999',
        zIndex: 1, // Ensure icon is above input
    },
    searchInput: {
        width: '100%',
        paddingLeft: 40,
        paddingRight: 16,
        paddingVertical: 10,
        backgroundColor: '#f5eee6',
        borderWidth: 0.5,
        borderColor: '#e9dcc9',
        borderRadius: 8,
        fontSize: 14,
        color: '#333',
        // No direct font-family support like web, rely on system fonts
    },
    chatListScrollView: {
        flex: 1,
    },
    noResultsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,

    },
    noResultsIconCircle: {
        height: 64,
        width: 64,
        backgroundColor: '#f5eee6',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    noResultsIcon: {
        fontSize: 24,
        color: '#999',
    },
    noResultsText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777',
        marginBottom: 4,
    },
    noResultsSubText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#999',
    },
    chatRoomItemsContainer: {
        // This view acts as the `divide-y` equivalent
        // Individual ChatRoomItem components will have their own styles
    },
    bottomIndicatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#faf8f5', // Match background
    },
    bottomIndicator: {
        backgroundColor: '#333',
        height: 5,
        width: 133,
        borderRadius: 180, // High value for full pill shape
    },
});
