import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        backgroundColor: '#fa98846e',
        color: '#3f3c34',
        borderBottomLeftRadius: 20,
    },
    otherBubble: {
        backgroundColor: '#E8E8E8',
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
