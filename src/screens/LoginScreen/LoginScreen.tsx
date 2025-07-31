import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface LoginScreenProps {
    onLogin: (email: string, password: string) => void;
    onSwitchToSignup: () => void;
}

export function LoginScreen({ onLogin, onSwitchToSignup }: LoginScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        if (!email || !password) return;

        setIsLoading(true);
        setTimeout(() => {
            onLogin(email, password);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>💬</Text>
                </View>
                <Text style={styles.title}>안녕하세요! 👋</Text>
                <Text style={styles.subtitle}>소셜 앱에 오신 것을 환영합니다</Text>
            </View>

            {/* Email Input */}
            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="이메일을 입력하세요"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력하세요"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color="#999"
                    />
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    (!email || !password || isLoading) && styles.buttonDisabled,
                ]}
                onPress={handleSubmit}
                disabled={!email || !password || isLoading}
            >
                {isLoading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>로그인</Text>
                )}
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.forgotText}>비밀번호를 잊으셨나요?</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>또는</Text>
                <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons (Mock) */}
            <TouchableOpacity style={styles.socialButton}>
                <View style={styles.socialIconFacebook}>
                    <Text style={styles.socialIconText}>f</Text>
                </View>
                <Text style={styles.socialText}>Facebook으로 계속하기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <View style={styles.socialIconGoogle}>
                    <Text style={styles.socialIconText}>G</Text>
                </View>
                <Text style={styles.socialText}>Google로 계속하기</Text>
            </TouchableOpacity>

            {/* Sign up */}
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>계정이 없으신가요? </Text>
                <TouchableOpacity onPress={onSwitchToSignup}>
                    <Text style={styles.signupLink}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
