import { Platform, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#faf8f5', // Start color of gradient
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f2ee', // End color of gradient
        // For a true gradient, you would use react-native-linear-gradient
        // e.g., <LinearGradient colors={['#faf8f5', '#f5f2ee']} style={styles.container}>
    },
    header: {
        backgroundColor: 'rgba(250, 248, 245, 0.9)', // Adjusted for backdrop-blur effect
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(233, 220, 201, 0.5)',
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // No direct backdrop-blur support in RN, this is a visual approximation
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    myProfileImage: {
        height: 36,
        width: 36,
        borderRadius: 18,
        objectFit: 'cover',
        marginRight: 12,
        backgroundColor: '#ccc', // Fallback background
    },
    greetingText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    subGreetingText: {
        fontSize: 11,
        color: '#777',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconButton: {
        height: 32,
        width: 32,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        marginLeft: 8,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    icon: {
        fontSize: 16, // Adjust size as needed for icons
        color: '#555',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 80, // Space for potential bottom navigation
    },
    section: {
        marginBottom: 24,
    },
    quickWriteButton: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 24,
        padding: 16,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    quickWriteProfileImage: {
        height: 32,
        width: 32,
        borderRadius: 16,
        objectFit: 'cover',
        marginRight: 12,
        backgroundColor: '#ccc', // Fallback background
    },
    quickWritePlaceholder: {
        fontSize: 14,
        color: '#777',
        flex: 1,
    },
    plusIcon: {
        fontSize: 20,
        color: '#999',
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
        paddingHorizontal: 4,
    },
    horizontalScroll: {
        // No specific style needed here, contentContainerStyle handles spacing
    },
    bottomSpacer: {
        height: 16, // Small spacing at the very bottom
    },
    postsContainer: {
        gap: 8, // Space between post cards (or use marginBottom in postCardContainer)
        flexDirection: 'column',
    },
    button: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12, // RN은 gap 지원 X -> 아래처럼 manually 조절해야 함
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        resizeMode: 'cover',
        marginRight: 12,
    },
    placeholder: {
        flex: 1,
        fontSize: 14,
        color: '#737373', // Tailwind 기준 text-neutral-500
    },
});
