import { ScrollView, StyleSheet } from 'react-native';
import { Message } from './ChatWindow';
import { MessageItem } from './MessageItem/MessageItem';

interface MessageListProps {
    messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf8f5',
        paddingHorizontal: 16, // px-4
        paddingVertical: 24,   // py-6
    },
    contentContainer: {
        rowGap: 8, // space-y-2 (RN 0.71 이상에서 rowGap 지원)
    },
});
