import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        width: 48,
        height: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    onlineIndicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 12,
        height: 12,
        backgroundColor: '#22c55e',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#faf8f5',
    },
    chatInfo: {
        flex: 1,
        marginLeft: 12,
        minWidth: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937', // text-neutral-800
        flexShrink: 1,
    },
    timestamp: {
        fontSize: 10,
        color: '#9ca3af', // text-neutral-400
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 12,
        color: '#6b7280', // text-neutral-500
        flexShrink: 1,
    },
    unreadBadge: {
        marginLeft: 8,
        backgroundColor: '#FF7841',
        paddingHorizontal: 6,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#fff',
    },
});
