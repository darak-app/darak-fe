import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { AuthStackParamList } from '../../types/navigation';
import { styles } from './styles';



type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

interface LoginScreenProps {
    onLogin: (email: string, password: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const navigateSignUp = () => {
        navigation.navigate('Signup');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        onLogin(email, password);
        setIsLoading(false);
    };


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.content}>
                        {/* 헤더 */}
                        <View style={styles.header}>
                            <View style={styles.titleContainer}>
                                <Ionicons name="heart" size={32} color="#fa9884" />
                                <Text style={styles.title}>Figma Date</Text>
                            </View>
                            <Text style={styles.subtitle}>새로운 인연을 시작해보세요</Text>
                        </View>

                        {/* 로그인 폼 */}
                        <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>이메일</Text>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="이메일을 입력하세요"
                                    placeholderTextColor="rgba(87,83,83,0.6)"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>비밀번호</Text>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        value={password}
                                        onChangeText={setPassword}
                                        placeholder="비밀번호를 입력하세요"
                                        placeholderTextColor="rgba(87,83,83,0.6)"
                                        secureTextEntry={!showPassword}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={styles.passwordInput}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)}
                                        style={styles.eyeButton}
                                    >
                                        <Ionicons
                                            name={showPassword ? "eye-off" : "eye"}
                                            size={20}
                                            color="#9CA3AF"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* 로그인 버튼 */}
                            <TouchableOpacity
                                onPress={handleSubmit}
                                disabled={isLoading}
                                style={[styles.loginButton, isLoading && styles.disabledButton]}
                            >
                                {isLoading ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    <Text style={styles.loginButtonText}>로그인</Text>
                                )}
                            </TouchableOpacity>

                            {/* 비밀번호 찾기 */}
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>비밀번호를 잊으셨나요?</Text>
                            </TouchableOpacity>

                            {/* 소셜 로그인 */}
                            <View style={styles.socialSection}>
                                <View style={styles.dividerContainer}>
                                    <View style={styles.divider} />
                                    <Text style={styles.dividerText}>또는</Text>
                                    <View style={styles.divider} />
                                </View>

                                <TouchableOpacity style={styles.googleButton}>
                                    <Text style={styles.googleButtonText}>Google로 계속하기</Text>
                                </TouchableOpacity>
                            </View>

                            {/* 회원가입 링크 */}
                            <View style={styles.signupSection}>
                                <Text style={styles.signupText}>
                                    계정이 없으신가요?{' '}
                                    <Text
                                        style={styles.signupLink}
                                        onPress={navigateSignUp}
                                    >
                                        회원가입
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
