import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        width: '100%',
        backgroundColor: '#F5F5F5', // Background for the input area
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
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

});
