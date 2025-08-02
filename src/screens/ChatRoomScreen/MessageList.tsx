import { ScrollView } from 'react-native';
import { MessageItem } from '../../components/MessageItem/MessageItem';
import { Message } from './ChatRoomScreen';
import { styles } from './styles';

interface MessageListProps {
    messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.messageContainer}
        >
            {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
            ))}
        </ScrollView>
    );
}

