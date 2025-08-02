import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#faf8f5',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e9dcc9',
        paddingHorizontal: 16,
        paddingVertical: 16,
        paddingTop: Platform.OS === 'android' ? 16 : 0, // Adjust for Android status bar
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600', // SF Pro Semibold is around 600
        color: '#333',
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconButton: {
        height: 32,
        width: 32,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    icon: {
        fontSize: 16, // Adjust size as needed for icons
        color: '#555',
    },
    searchBarContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        fontSize: 16,
        color: '#999',
        zIndex: 1, // Ensure icon is above input
    },
    searchInput: {
        width: '100%',
        paddingLeft: 40,
        paddingRight: 16,
        paddingVertical: 10,
        backgroundColor: '#f5eee6',
        borderWidth: 0.5,
        borderColor: '#e9dcc9',
        borderRadius: 8,
        fontSize: 14,
        color: '#333',
        // No direct font-family support like web, rely on system fonts
    },
    chatListScrollView: {
        flex: 1,
    },
    noResultsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,

    },
    noResultsIconCircle: {
        height: 64,
        width: 64,
        backgroundColor: '#f5eee6',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    noResultsIcon: {
        fontSize: 24,
        color: '#999',
    },
    noResultsText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777',
        marginBottom: 4,
    },
    noResultsSubText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#999',
    },
    chatRoomItemsContainer: {
        // This view acts as the `divide-y` equivalent
        // Individual ChatRoomItem components will have their own styles
    },
    bottomIndicatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#faf8f5', // Match background
    },
    bottomIndicator: {
        backgroundColor: '#333',
        height: 5,
        width: 133,
        borderRadius: 180, // High value for full pill shape
    },
});
