import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { SignupScreen } from '../screens/SignUpScreen/SignUpScreen';


const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack({ onLogin }: { onLogin: () => void }, { onSignup }: { onSignup: () => void }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login">
                {(props) => (
                    <LoginScreen
                        {...props}
                        onLogin={onLogin} />
                )}
            </Stack.Screen>
            <Stack.Screen name="Signup">
                {(props) => (
                    <SignupScreen
                        {...props}
                        onSignup={onSignup} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
