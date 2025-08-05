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
    const [roomList, updateRoomList] = useState<Array<ChatRoom>|null>(null);

    const handleSelectChatRoom = (roomId: string) => {
        navigation.navigate("ChatRoom", { roomId });
    };

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
                if(roomList != null){
                    
                }
                {/* Chat Room List */}
                <ScrollView style={styles.chatListScrollView}>
                    {(roomList != null && roomList.length === 0) ? (
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
                            {roomList != null && roomList.map((chatRoom) => (
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
