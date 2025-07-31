import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Plus 아이콘은 vector-icons, react-native-svg 등 사용하세요
// 여기서는 간단히 텍스트로 대체
// import { Plus } from 'react-native-vector-icons/Feather';

import { ImageWithFallback } from './ui/ImageWithFallback'; // RN용으로 따로 구현 필요

export interface UserProfile {
    id: string;
    name: string;
    bio: string;
    avatar?: string;
    mutualFriends?: number;
    isOnline?: boolean;
}

interface UserProfileCardProps {
    profile: UserProfile;
    onFollow: (userId: string) => void;
}

export function UserProfileCard({ profile, onFollow }: UserProfileCardProps) {
    return (
        <View style={styles.card}>
            {/* Profile image */}
            <View style={styles.avatarWrapper}>
                <View>
                    {profile.avatar ? (
                        <ImageWithFallback
                            src={profile.avatar}
                            alt={profile.name}
                            style={styles.avatar}
                        />
                    ) : (
                        <Image
                            source={require('./assets/default-avatar.png')} // 기본 이미지 경로로 변경 필요
                            style={styles.avatar}
                        />
                    )}

                    {/* Online status indicator */}
                    {profile.isOnline && <View style={styles.onlineDot} />}
                </View>
            </View>

            {/* User info */}
            <View style={styles.info}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.bio} numberOfLines={2}>
                    {profile.bio}
                </Text>

                {profile.mutualFriends && profile.mutualFriends > 0 && (
                    <Text style={styles.mutualFriends}>
                        공통 친구 {profile.mutualFriends}명
                    </Text>
                )}
            </View>

            {/* Follow button */}
            <TouchableOpacity
                onPress={() => onFollow(profile.id)}
                style={styles.followButton}
                activeOpacity={0.8}
            >
                {/* 아이콘 대신 텍스트로 */}
                <Text style={styles.plusIcon}>＋</Text>
                <Text style={styles.followText}>팔로우</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 24,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        minWidth: 180,
    },
    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        resizeMode: 'cover',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    onlineDot: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 14,
        height: 14,
        backgroundColor: '#22c55e', // 초록색
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#fff',
    },
    info: {
        alignItems: 'center',
        marginBottom: 16,
    },
    name: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
        marginBottom: 4,
    },
    bio: {
        fontSize: 11,
        color: '#777',
        textAlign: 'center',
        lineHeight: 16,
    },
    mutualFriends: {
        marginTop: 6,
        fontSize: 10,
        color: '#fb923c', // 주황색
        fontWeight: '500',
    },
    followButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(90deg, #FFA925 0%, #FF7841 100%)', // RN에서 linear-gradient 쓰려면 라이브러리 필요
        paddingVertical: 10,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    plusIcon: {
        fontSize: 18,
        color: '#fff',
        marginRight: 6,
    },
    followText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#fff',
    },
});
