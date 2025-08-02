import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    messageContainer: {
        // rowGap 대신 제거
    },
    messageItem: {
        marginBottom: 8, // 각 메시지 아래 간격
    },
});
