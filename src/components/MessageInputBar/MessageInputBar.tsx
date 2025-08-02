import { Plus, Send } from 'lucide-react-native';
import { useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';

interface MessageInputBarProps {
    onSendMessage: (message: string) => void;
}

export function MessageInputBar({ onSendMessage }: MessageInputBarProps) {
    const [message, setMessage] = useState('');
    const [inputHeight, setInputHeight] = useState(40); // Initial height for TextInput
    const textInputRef = useRef<TextInput>(null);

    const handleSubmit = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
            // Reset height after sending message
            if (textInputRef.current) {
                textInputRef.current.clear(); // Clear text input
                setInputHeight(40); // Reset to initial height
            }
        }
    };

    const handleKeyPress = (e: any) => {
        if (e.nativeEvent.key === 'Enter' && !e.nativeEvent.shiftKey) {
            e.preventDefault(); // Prevent new line in TextInput
            handleSubmit();
        }
    };

    // Adjust TextInput height dynamically
    const handleContentSizeChange = (event: any) => {
        const newHeight = Math.max(40, Math.min(128, event.nativeEvent.contentSize.height)); // Min 40, Max 128 (approx 32*4 lines)
        setInputHeight(newHeight);
    };

    return (
        // KeyboardAvoidingView helps adjust layout when keyboard appears
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingContainer}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Adjust as needed
        >
            <View style={styles.container}>
                {/* Plus icon */}
                <TouchableOpacity style={styles.plusButton}>
                    <Plus size={20} color="#555" />
                </TouchableOpacity>

                {/* Text input area */}
                <View style={styles.inputAreaWrapper}>
                    <TextInput
                        ref={textInputRef}
                        value={message}
                        onChangeText={setMessage}
                        onKeyPress={handleKeyPress}
                        onContentSizeChange={handleContentSizeChange}
                        placeholder="Type something.."
                        placeholderTextColor="#999"
                        multiline={true} // Enable multiline input
                        style={[styles.textInput, { height: inputHeight }]}
                        scrollEnabled={true} // Allow scrolling if content exceeds max height
                    />

                    {/* Vertical divider */}
                    <View style={styles.divider} />
                </View>

                {/* Send button */}
                <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!message.trim()}
                    style={[
                        styles.sendButton,
                        !message.trim() && styles.sendButtonDisabled,
                    ]}
                >
                    <Send size={18} color={!message.trim() ? "#ccc" : "#333"} />
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    );
}
