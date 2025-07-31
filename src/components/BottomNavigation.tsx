import { Heart, Home, MessageSquare, Settings } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type TabType = 'home' | 'chat' | 'activity' | 'profile';

interface BottomNavigationProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
    const tabs = [
        { id: 'home' as TabType, icon: Home, label: '홈' },
        { id: 'chat' as TabType, icon: MessageSquare, label: '채팅' },
        { id: 'activity' as TabType, icon: Heart, label: '활동' },
        { id: 'profile' as TabType, icon: Settings, label: '설정' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <TouchableOpacity
                            key={tab.id}
                            onPress={() => onTabChange(tab.id)}
                            style={[styles.tabButton, isActive && styles.activeTabButton]}
                            activeOpacity={0.7}
                        >
                            <Icon
                                size={20}
                                color={isActive ? '#f97316' : '#9ca3af'}
                                strokeWidth={isActive ? 2.4 : 2}
                            />
                            <Text style={[styles.label, isActive && styles.activeLabel]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Home Indicator */}
            <View style={styles.homeIndicatorContainer}>
                <View style={styles.homeIndicator} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e9dcc9',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: 'center',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    activeTabButton: {
        // active 상태 추가 스타일이 필요하면 정의
    },
    label: {
        fontSize: 10,
        color: '#9ca3af', // text-neutral-400
        marginTop: 2,
    },
    activeLabel: {
        color: '#f97316', // text-orange-500
    },
    homeIndicatorContainer: {
        alignItems: 'center',
        marginTop: 8,
    },
    homeIndicator: {
        backgroundColor: '#262626', // neutral-800
        height: 5,
        width: 133,
        borderRadius: 90,
    },
});
