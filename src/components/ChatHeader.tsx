import { ChevronLeft, Phone, Video } from 'lucide-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChatHeaderProps {
    userName: string;
    isOnline: boolean;
    onBack?: () => void;
}

export function ChatHeader({ userName, isOnline, onBack }: ChatHeaderProps) {
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
                        source={require('../assets/images/sample.png')} // imgUnsplashGKxkbyCDk 대체
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

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#faf8f5',
        height: 89,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 1,
        elevation: 1,
    },
    profileContainer: {
        position: 'absolute',
        left: 73,
        top: 41,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        position: 'relative',
        width: 38,
        height: 38,
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    onlineIndicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        backgroundColor: '#22C55E',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#faf8f5',
    },
    userName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937', // neutral-800
    },
    statusText: {
        fontSize: 10,
        color: '#f97316', // orange-500
    },
    actionButtons: {
        position: 'absolute',
        right: 15,
        top: 41,
        flexDirection: 'row',
        columnGap: 8,
    },
    iconButton: {
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
