import { useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface MessageInputProps {
    onSendMessage: (message: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
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
                    <Text style={styles.plusIcon}>➕</Text>
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
                    style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
                >
                    <Text style={styles.sendIcon}>⬆️</Text>
                </TouchableOpacity>
            </View>

            {/* Home indicator */}
            <View style={styles.homeIndicatorContainer}>
                <View style={styles.homeIndicator} />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        width: '100%',
        backgroundColor: '#F5F5F5', // Background for the input area
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        minHeight: 60, // Minimum height for the input bar
    },
    plusButton: {
        height: 38,
        width: 38,
        backgroundColor: '#F5F5F5',
        borderRadius: 8, // Rounded-md equivalent
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        // Add shadow if desired, similar to other components
    },
    plusIcon: {
        fontSize: 20, // Adjust size as needed
        color: '#FF7841', // Using the gradient end color as a solid color
    },
    inputAreaWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    textInput: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 0, // No border
        paddingVertical: 8, // Adjust padding
        paddingHorizontal: 0, // No horizontal padding
        fontSize: 14,
        color: '#333',
        // No direct font-family support like web, rely on system fonts
        // minHeight and maxHeight are handled by state and onContentSizeChange
        textAlignVertical: 'center', // Align text to center vertically for Android
    },
    divider: {
        position: 'absolute',
        right: -20, // Adjust position to match original layout
        height: 38,
        width: 1,
        backgroundColor: '#D4D4D4',
        // No direct transform for translate-y-1/2, rely on parent alignment
    },
    sendButton: {
        height: 38,
        width: 38,
        backgroundColor: '#F5F5F5',
        borderRadius: 8, // Rounded-md equivalent
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 24, // ml-6 equivalent
    },
    sendButtonDisabled: {
        opacity: 0.5,
    },
    sendIcon: {
        fontSize: 20, // Adjust size as needed
        color: '#FF7841', // Using the gradient end color as a solid color
    },
    homeIndicatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15, // Adjust vertical padding as needed
        backgroundColor: '#F5F5F5', // Match background
    },
    homeIndicator: {
        backgroundColor: '#333',
        height: 5,
        width: 133,
        borderRadius: 180, // High value for full pill shape
    },
});
