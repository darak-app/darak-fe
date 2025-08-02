import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 48,
        maxWidth: 394,
        alignSelf: 'center',
        width: '100%',
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
        marginTop: 32,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(87,83,83,0.85)',
    },
    form: {
        flex: 1,
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 8,
    },
    input: {
        height: 48,
        paddingHorizontal: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        fontSize: 16,
        color: '#000000',
    },
    passwordContainer: {
        position: 'relative',
    },
    passwordInput: {
        height: 48,
        paddingHorizontal: 16,
        paddingRight: 48,
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        fontSize: 16,
        color: '#000000',
    },
    eyeButton: {
        position: 'absolute',
        right: 12,
        top: 14,
        padding: 4,
    },
    loginButton: {
        height: 48,
        backgroundColor: '#fa9884',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    disabledButton: {
        backgroundColor: '#e8856f',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    forgotPassword: {
        alignItems: 'center',
        marginBottom: 32,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#fa9884',
    },
    socialSection: {
        marginBottom: 32,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    dividerText: {
        fontSize: 12,
        color: '#9CA3AF',
        marginHorizontal: 16,
        textTransform: 'uppercase',
    },
    googleButton: {
        height: 48,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },
    signupSection: {
        alignItems: 'center',
        marginTop: 'auto',
    },
    signupText: {
        fontSize: 14,
        color: '#6B7280',
    },
    signupLink: {
        color: '#fa9884',
        fontWeight: '500',
    },
});