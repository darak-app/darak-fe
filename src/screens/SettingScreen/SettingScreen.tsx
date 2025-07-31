import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    Bell,
    Edit2,
    Globe,
    HelpCircle,
    Info,
    LogOut,
    Moon,
    Palette,
    Shield,
    Sun,
    User
} from 'lucide-react-native';
import { SettingItem } from '../../components/SettingItem/SettingItem';
import { styles } from '../../components/SettingItem/styles';
import { SettingItemProps } from '../../components/SettingItem/types';
const imgUnsplash = require('../../assets/images/sample.png');

interface SettingSection {
    title: string;
    items: SettingItemProps[];
}




export function SettingsScreen() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [onlineStatus] = useState(true);

    const profileData = {
        name: '김민지',
        statusMessage: '오늘도 좋은 하루 보내세요! ✨',
        avatar: imgUnsplash,
        isOnline: onlineStatus,
    };
    const settingSections: SettingSection[] = [
        {
            title: '계정',
            items: [
                {
                    id: 'account',
                    icon: <User size={20} color="#333" />,
                    title: '계정 정보',
                    subtitle: '개인정보 및 계정 설정',
                    hasArrow: true,
                    onPress: () => console.log('계정 정보'),
                },
                {
                    id: 'privacy',
                    icon: <Shield size={20} color="#333" />,
                    title: '개인정보 보호',
                    subtitle: '프라이버시 설정 관리',
                    hasArrow: true,
                    onPress: () => console.log('개인정보 보호'),
                },
            ],
        },
        {
            title: '알림',
            items: [
                {
                    id: 'notifications',
                    icon: <Bell size={20} color="#333" />,
                    title: '푸시 알림',
                    subtitle: '메시지 및 활동 알림',
                    hasSwitch: true,
                    switchValue: notifications,
                    onSwitchChange: setNotifications,
                },
            ],
        },
        {
            title: '환경설정',
            items: [
                {
                    id: 'theme',
                    icon: darkMode ? <Moon size={20} color="#333" /> : <Sun size={20} color="#333" />,
                    title: '다크 모드',
                    subtitle: '어두운 테마 사용',
                    hasSwitch: true,
                    switchValue: darkMode,
                    onSwitchChange: setDarkMode,
                },
                {
                    id: 'language',
                    icon: <Globe size={20} color="#333" />,
                    title: '언어',
                    subtitle: '한국어',
                    hasArrow: true,
                    onPress: () => console.log('언어 설정'),
                },
                {
                    id: 'appearance',
                    icon: <Palette size={20} color="#333" />,
                    title: '화면 설정',
                    subtitle: '폰트 크기, 테마 색상',
                    hasArrow: true,
                    onPress: () => console.log('화면 설정'),
                },
            ],
        },
        {
            title: '지원',
            items: [
                {
                    id: 'help',
                    icon: <HelpCircle size={20} color="#333" />,
                    title: '도움말',
                    subtitle: '자주 묻는 질문',
                    hasArrow: true,
                    onPress: () => console.log('도움말'),
                },
                {
                    id: 'about',
                    icon: <Info size={20} color="#333" />,
                    title: '앱 정보',
                    subtitle: '버전 1.0.0',
                    hasArrow: true,
                    onPress: () => console.log('앱 정보'),
                },
            ],
        },
    ];



    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>설정</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Profile */}
                <View style={styles.profileContainer}>
                    <View style={styles.profileInner}>
                        <View>
                            <Image source={profileData.avatar} style={styles.avatar} />
                            {profileData.isOnline && <View style={styles.onlineDot} />}
                        </View>
                        <View style={styles.profileText}>
                            <View style={styles.profileNameRow}>
                                <Text style={styles.profileName}>{profileData.name}</Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Edit2 size={16} color="#FFA500" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.profileMessage}>{profileData.statusMessage}</Text>
                        </View>
                    </View>
                </View>

                {/* Settings Sections */}
                {settingSections.map((section) => (
                    <View key={section.title} style={styles.section}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        {section.items.map((item) => (
                            SettingItem(item)
                        ))}
                    </View>
                ))}

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('로그아웃')}>
                    <View style={styles.logoutInner}>
                        <LogOut size={20} color="#FF4D4F" />
                        <Text style={styles.logoutText}>로그아웃</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
