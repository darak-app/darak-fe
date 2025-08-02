import { ChevronLeft, Phone, Video } from 'lucide-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface ChatHeaderProps {
    userName: string;
    isOnline: boolean;
    onBack?: () => void;
}

export function ChatRoomHeader({ userName, isOnline, onBack }: ChatHeaderProps) {
    return (
        <View style={styles.container}>
            {/* Back button */}
            <TouchableOpacity
                onPress={onBack}
                activeOpacity={0.7}
                style={[styles.iconButton, { left: 15 }]}
            >
                <ChevronLeft size={20} color="#A3A3A3" />
            </TouchableOpacity>

            {/* User profile */}
            <View style={styles.profileContainer}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={require('../../assets/images/sample.png')} // imgUnsplashGKxkbyCDk 대체
                        style={styles.avatar}
                    />
                    {isOnline && <View style={styles.onlineIndicator} />}
                </View>

                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.statusText}>
                        {isOnline ? 'Online now' : 'Offline'}
                    </Text>
                </View>
            </View>

            {/* Action buttons */}
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                    <Video size={20} color="#A3A3A3" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                    <Phone size={20} color="#A3A3A3" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

