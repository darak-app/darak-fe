import { Text, View } from 'react-native';
import { Message } from '../../screens/ChatRoomScreen/ChatRoomScreen';
import { styles } from './styles';

interface MessageItemProps {
    message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const isOwn = message.isOwnMessage;

    return (
        <View style={styles.container}>
            {/* 메시지 버블 */}
            <View style={[styles.bubbleContainer, isOwn ? styles.alignEnd : styles.alignStart]}>
                <View style={[styles.bubble, isOwn ? styles.ownBubble : styles.otherBubble]}>
                    <Text style={styles.messageText}>{message.text}</Text>
                </View>
            </View>

            {/* 타임스탬프 */}
            <View style={[styles.timestampContainer, isOwn ? styles.alignEnd : styles.alignStart]}>
                <Text style={styles.timestamp}>{formatTime(message.timestamp)}</Text>
            </View>
        </View>
    );
}
