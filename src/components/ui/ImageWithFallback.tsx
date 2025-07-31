import { useState } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

const FALLBACK_IMAGE = require('../assets/fallback.png'); // 프로젝트 내 기본 대체 이미지 경로

export function ImageWithFallback(props: ImageProps) {
    const { source, style, ...rest } = props;
    const [error, setError] = useState(false);

    // source가 객체일 수도 있고, 숫자(로컬 require)일 수도 있음
    const resolvedSource = !error ? source : FALLBACK_IMAGE;

    return (
        <View style={[styles.container, style]}>
            <Image
                {...rest}
                source={resolvedSource}
                style={[styles.image, style]}
                onError={() => setError(true)}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
