import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation, TabType } from './src/components/BottomNavigation';
import { ChatRoomList } from './src/components/ChatRoomList';
import { ChatWindow } from './src/components/ChatWindow';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { SettingsScreen } from './src/screens/SettingScreen/SettingScreen';
import { ChatRoom } from './src/types/ChatRoomItemTypes';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedChatRoom, setSelectedChatRoom] = useState<ChatRoom | null>(null);

  const handleSelectChatRoom = (chatRoom: ChatRoom) => {
    setSelectedChatRoom(chatRoom);
  };

  const handleBackToList = () => {
    setSelectedChatRoom(null);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab !== 'chat') {
      setSelectedChatRoom(null);
    }
  };

  const renderContent = () => {
    if (activeTab === 'home') {
      return <HomeScreen />;
    }

    if (activeTab === 'chat') {
      return selectedChatRoom ? (
        <ChatWindow chatRoom={selectedChatRoom} onBack={handleBackToList} />
      ) : (
        <ChatRoomList onSelectChatRoom={handleSelectChatRoom} />
      );
    }

    if (activeTab === 'activity') {
      return (
        <View style={styles.center}>
          <View style={styles.iconWrapper}>
            <Text style={{ fontSize: 28 }}>💖</Text>
          </View>
          <Text style={styles.title}>활동</Text>
          <Text style={styles.subtitle}>좋아요와 댓글 알림이 여기에 표시됩니다</Text>
        </View>
      );
    }

    if (activeTab === 'profile') {
      return <SettingsScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      {!selectedChatRoom && (
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8f5',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    height: 64,
    width: 64,
    backgroundColor: '#f5eee6',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});
