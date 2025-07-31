import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf8f5',
        padding: 24,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logoCircle: {
        height: 80,
        width: 80,
        backgroundColor: '#FF7841',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    logoText: {
        fontSize: 24,
        color: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#111',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ffffff88',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#111',
    },
    button: {
        backgroundColor: '#FF8A26',
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: 'center',
        marginVertical: 12,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    forgotButton: {
        alignItems: 'center',
        marginBottom: 16,
    },
    forgotText: {
        fontSize: 12,
        color: '#999',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#e9dcc9',
    },
    dividerText: {
        marginHorizontal: 8,
        fontSize: 12,
        color: '#aaa',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ffffff88',
    },
    socialIconFacebook: {
        backgroundColor: '#1877F2',
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    socialIconGoogle: {
        backgroundColor: '#EA4335',
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    socialIconText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    socialText: {
        fontSize: 14,
        color: '#333',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    signupText: {
        fontSize: 12,
        color: '#666',
    },
    signupLink: {
        fontSize: 12,
        color: '#FF7841',
        fontWeight: '600',
    },
});
