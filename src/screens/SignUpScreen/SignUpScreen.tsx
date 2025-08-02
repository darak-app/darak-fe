import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeft, Eye, Heart, Square } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { AuthStackParamList } from '../../types/navigation';


type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

interface SignupScreenProps {
  onSignup: (userData: SignupData) => void;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  location: string;
}

export function SignupScreen({ onSignup }: SignupScreenProps) {

  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    age: '',
    gender: '',
    location: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agreedToTerms) {
      Alert.alert('약관 동의 필요', '이용약관에 동의해주세요.');
      return;
    }

    setIsLoading(true);

    onSignup({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      age: parseInt(formData.age),
      gender: formData.gender,
      location: formData.location
    });
    setIsLoading(false);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateToLogin} style={styles.backButton}>

            <ArrowLeft size={24} color="#555" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            <Heart size={24} color="#fa9884" /> Figma Date
          </Text>
        </View>

        <Text style={styles.title}>회원가입</Text>
        <Text style={styles.subtitle}>새로운 인연을 만들어보세요</Text>

        {/* 폼 */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="이름"
            value={formData.name}
            onChangeText={(val) => updateFormData('name', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="나이"
            keyboardType="numeric"
            value={formData.age}
            onChangeText={(val) => updateFormData('age', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="성별 (남성 / 여성 / 기타)"
            value={formData.gender}
            onChangeText={(val) => updateFormData('gender', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="지역 (예: 서울 강남구)"
            value={formData.location}
            onChangeText={(val) => updateFormData('location', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="이메일"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(val) => updateFormData('email', val)}
          />
          {/* 비밀번호 */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(val) => updateFormData('password', val)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Eye size={20} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="비밀번호 확인"
              secureTextEntry={!showConfirmPassword}
              value={formData.confirmPassword}
              onChangeText={(val) => updateFormData('confirmPassword', val)}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Eye size={20} color="#888" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 약관 동의 */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAgreedToTerms(prev => !prev)}
        >
          <Square
            size={20}
            color="#fa9884"
          />
          <Text style={styles.termsText}>
            <Text style={{ color: '#fa9884' }}>이용약관</Text> 및{' '}
            <Text style={{ color: '#fa9884' }}>개인정보처리방침</Text>에 동의합니다.
          </Text>
        </TouchableOpacity>

        {/* 가입 버튼 */}
        <TouchableOpacity
          style={[styles.button, isLoading && { opacity: 0.6 }]}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? '가입 중...' : '가입하기'}
          </Text>
        </TouchableOpacity>

        {/* 로그인 링크 */}
        <Text style={styles.loginText}>
          이미 계정이 있으신가요?{' '}
          <Text style={styles.loginLink} onPress={navigateToLogin}>
            로그인
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  inputGroup: {
    gap: 12,
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  button: {
    backgroundColor: '#fa9884',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#fa9884',
    fontWeight: '600',
  },
});
