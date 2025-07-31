

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Post {
    id: string;
    user: {
        name: string;
        avatar?: string;
        isOnline?: boolean;
    };
    content: string;
    timestamp: Date;
    likes: number;
    isLiked: boolean;
}

interface PostCardProps {
    post: Post;
    onLike: (postId: string) => void;
}

export function PostCard({ post, onLike }: PostCardProps) {
    const [imageError, setImageError] = useState(false);

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const diffMinutes = Math.floor(diff / (1000 * 60));
        const diffHours = Math.floor(diff / (1000 * 60 * 60));

        if (diffMinutes < 1) return '방금 전';
        if (diffMinutes < 60) return `${diffMinutes}분 전`;
        if (diffHours < 24) return `${diffHours}시간 전`;
        return `${Math.floor(diffHours / 24)}일 전`;
    };

    return (
        <View style={styles.container}>
            {/* User info */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <View style={styles.avatarWrapper}>
                        {post.user.avatar && !imageError ? (
                            <Image
                                source={{ uri: post.user.avatar }}
                                style={styles.avatar}
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <Image
                                source={require('./assets/defaultAvatar.png')} // 기본 아바타 이미지 경로
                                style={styles.avatar}
                            />
                        )}
                        {post.user.isOnline && <View style={styles.onlineIndicator} />}
                    </View>
                    <Text style={styles.userName}>{post.user.name}</Text>
                </View>
                <Text style={styles.timestamp}>{formatTime(post.timestamp)}</Text>
            </View>

            {/* Post content */}
            <Text style={styles.content}>{post.content}</Text>

            {/* Like button */}
            <View style={styles.likeContainer}>
                <TouchableOpacity
                    onPress={() => onLike(post.id)}
                    style={[
                        styles.likeButton,
                        post.isLiked ? styles.liked : styles.notLiked,
                    ]}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={`${post.user.name}님의 게시물 좋아요 버튼`}
                >
                    <Text style={[styles.likeCount, post.isLiked && { color: '#ef4444' }]}>
                        {post.likes}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 24,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        position: 'relative',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    onlineIndicator: {
        position: 'absolute',
        right: -3,
        bottom: -3,
        width: 10,
        height: 10,
        backgroundColor: '#22c55e',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
    },
    userName: {
        fontSize: 13,
        fontWeight: '500',
        color: '#1f2937',
        marginLeft: 8,
    },
    timestamp: {
        fontSize: 10,
        color: '#9ca3af',
    },
    content: {
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 12,
    },
    likeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 9999,
    },
    liked: {
        backgroundColor: 'rgba(254,202,202,0.5)', // 연한 빨강 배경
    },
    notLiked: {
        backgroundColor: 'transparent',
    },
    likeCount: {
        fontSize: 11,
        fontWeight: '600',
        color: '#9ca3af',
        marginLeft: 4,
    },
});
