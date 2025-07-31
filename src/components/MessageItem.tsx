import { StyleSheet, Text, View } from 'react-native';
import { Message } from './ChatWindow';

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

const styles = StyleSheet.create({
    container: {
        marginBottom: 16, // mb-4
    },
    bubbleContainer: {
        flexDirection: 'row',
    },
    alignEnd: {
        justifyContent: 'flex-end',
    },
    alignStart: {
        justifyContent: 'flex-start',
    },
    bubble: {
        maxWidth: 280,
        paddingHorizontal: 17,
        paddingVertical: 12, // py-3
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ownBubble: {
        backgroundColor: '#e9dcc9',
        color: '#3f3c34',
        borderBottomLeftRadius: 20,
    },
    otherBubble: {
        backgroundColor: '#f5eee6',
        color: '#3f3c34',
        borderBottomRightRadius: 20,
    },
    messageText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#3f3c34',
        flexWrap: 'wrap',
    },
    timestampContainer: {
        marginTop: 4, // mt-1
        flexDirection: 'row',
    },
    timestamp: {
        fontSize: 10,
        color: '#a3a3a3', // text-neutral-400
        paddingHorizontal: 8,
    },
});
