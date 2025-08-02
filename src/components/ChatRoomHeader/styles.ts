import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: 89,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 1,

    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // left, top 같은 절대 위치 제거
    },
    avatarWrapper: {
        width: 38,
        height: 38,
        position: 'relative',
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    onlineIndicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        backgroundColor: '#22C55E',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#faf8f5',
    },
    userInfo: {
        marginLeft: 8,
    },
    userName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1f2937',
    },
    statusText: {
        fontSize: 10,
        color: '#f97316',
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        backgroundColor: '#FAFAFA',
        borderRadius: 6,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8, // 간격 조절 (첫 버튼 제외하려면 컴포넌트에서 처리)
    },
});
