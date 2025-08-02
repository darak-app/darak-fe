import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './styles';

export function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.text}>로딩 중입니다...</Text>
        </View>
    );
}

