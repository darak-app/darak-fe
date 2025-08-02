import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,                    // 화면 전체 차지
        justifyContent: 'center',   // 수직 가운데 정렬
        alignItems: 'center',       // 수평 가운데 정렬
        backgroundColor: '#fff',
    },
    text: {
        marginTop: 16,
        fontSize: 16,
        color: '#555',
    },
});
