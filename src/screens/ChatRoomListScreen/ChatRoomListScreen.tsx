import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { ChatRoomItem } from '../../components/ChatRoomItem/ChatRoomItem';
import { ChatStackParamList } from '../../types/navigation';
import { styles } from './styles';
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

type ChatScreenProps = NativeStackNavigationProp<ChatStackParamList, 'ChatRoomList'>;

export const ChatRoomListScreen = () => {
    const navigation = useNavigation<ChatScreenProps>();

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

    const handleSelectChatRoom = (id: string) => {
        navigation.navigate("ChatRoom", { id });
    };

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
                                    onClick={() => { handleSelectChatRoom }}
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
