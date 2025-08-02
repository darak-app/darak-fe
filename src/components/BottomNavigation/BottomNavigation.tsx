import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MessageSquare, User } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { HomeIcon } from '../icons/HomeIcon';
import { styles } from './styles';

export function BottomNavigation({ state, navigation }: BottomTabBarProps) {
    const tabs = [
        { id: 'Home', icon: HomeIcon },
        { id: 'Chat', icon: MessageSquare },
        { id: 'Profile', icon: User },
    ];

    return (
        <View style={styles.bottomNavigation}>
            {tabs.map((tab, index) => {
                const isFocused = state.index === index;
                const Icon = tab.icon;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: state.routes[index].key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(state.routes[index].name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={tab.id}
                        style={styles.navButton}
                        onPress={onPress}
                    >
                        <Icon size={20} color={isFocused ? '#FA9884' : '#9E9898'} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
