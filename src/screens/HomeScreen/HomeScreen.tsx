import { Plus } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
// For icons, you would typically use a library like 'react-native-vector-icons'
// For example: import Icon from 'react-native-vector-icons/Feather';
// For this example, we'll use simple text or mock the icons.

// Define types for Post and UserProfile
interface User {
    name: string;
    isOnline: boolean;
}

interface Post {
    id: string;
    user: User;
    content: string;
    timestamp: Date;
    likes: number;
    isLiked: boolean;
}

interface UserProfile {
    id: string;
    name: string;
    bio: string;
    mutualFriends: number;
    isOnline: boolean;
}

// --- PostCard Component (React Native Version) ---
interface PostCardProps {
    post: Post;
    onLike: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
    const timeAgo = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + '년 전';
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + '개월 전';
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + '일 전';
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + '시간 전';
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + '분 전';
        return Math.floor(seconds) + '초 전';
    };

    return (
        <View style={postCardStyles.card}>
            {/* User Info */}
            <View style={postCardStyles.userInfo}>
                <View style={postCardStyles.avatarContainer}>
                    <Image
                        source={require('../../assets/images/sample.png')} // Placeholder image
                        style={postCardStyles.avatar}
                    />
                    {post.user.isOnline && <View style={postCardStyles.onlineIndicator} />}
                </View>
                <View style={postCardStyles.userNameTime}>
                    <Text style={postCardStyles.userName}>{post.user.name}</Text>
                    <Text style={postCardStyles.postTime}>{timeAgo(post.timestamp)}</Text>
                </View>
            </View>

            {/* Post Content */}
            <Text style={postCardStyles.postContent}>{post.content}</Text>

            {/* Actions */}
            <View style={postCardStyles.actions}>
                <TouchableOpacity
                    onPress={() => onLike(post.id)}
                    style={postCardStyles.likeButton}
                >
                    <Text style={postCardStyles.likeIcon}>
                        {post.isLiked ? '❤️' : '🤍'}
                    </Text>
                    <Text style={postCardStyles.likeCount}>{post.likes}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const postCardStyles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 24,
        padding: 16,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2, // For Android
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ccc', // Fallback background
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50', // Green for online
        borderWidth: 1.5,
        borderColor: 'white',
    },
    userNameTime: {
        flex: 1,
    },
    userName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    postTime: {
        fontSize: 11,
        color: '#777',
        marginTop: 2,
    },
    postContent: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
        marginBottom: 12,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    likeIcon: {
        fontSize: 16,
        marginRight: 4,
    },
    likeCount: {
        fontSize: 13,
        color: '#555',
        fontWeight: '500',
    },
    postCardContainer: {
        marginBottom: 8, // Space between posts
    },
});

// --- UserProfileCard Component (React Native Version) ---
interface UserProfileCardProps {
    profile: UserProfile;
    onFollow: (userId: string) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ profile, onFollow }) => {
    return (
        <View style={userProfileCardStyles.card}>
            <View style={userProfileCardStyles.avatarContainer}>
                <Image
                    source={require('../../assets/images/sample.png')} // Placeholder image
                    style={userProfileCardStyles.avatar}
                />
                {profile.isOnline && <View style={userProfileCardStyles.onlineIndicator} />}
            </View>
            <Text style={userProfileCardStyles.name}>{profile.name}</Text>
            <Text style={userProfileCardStyles.bio}>{profile.bio}</Text>
            <Text style={userProfileCardStyles.mutualFriends}>
                친구 {profile.mutualFriends}명
            </Text>
            <TouchableOpacity
                onPress={() => onFollow(profile.id)}
                style={userProfileCardStyles.followButton}
            >
                <Text style={userProfileCardStyles.followButtonText}>팔로우</Text>
            </TouchableOpacity>
        </View>
    );
};

const userProfileCardStyles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 24,
        padding: 16,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2, // For Android
        width: 140, // Fixed width for horizontal scroll
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 8,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc', // Fallback background
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: 'white',
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
        textAlign: 'center',
    },
    bio: {
        fontSize: 11,
        color: '#777',
        textAlign: 'center',
        marginBottom: 4,
    },
    mutualFriends: {
        fontSize: 10,
        color: '#999',
        marginBottom: 12,
    },
    followButton: {
        backgroundColor: '#FF6F61', // A warm, inviting color
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#FF6F61',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    followButtonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    cardContainer: {
        marginRight: 12, // Space between user profile cards
    },
});

// --- HomeScreen Component (React Native Version) ---
export function HomeScreen() { // Changed to default export for easier use in App.js/App.tsx
    const [posts, setPosts] = useState<Post[]>([
        {
            id: '1',
            user: {
                name: '김민지',
                isOnline: true,
            },
            content: '오늘 날씨가 정말 좋네요! 산책하기 딱 좋은 날이에요 ☀️',
            timestamp: new Date(Date.now() - 15 * 60 * 1000),
            likes: 12,
            isLiked: false,
        },
        {
            id: '2',
            user: {
                name: 'Alberto Moedano',
                isOnline: false,
            },
            content: '새로운 프로젝트를 시작했어요! 정말 기대가 됩니다 🚀',
            timestamp: new Date(Date.now() - 45 * 60 * 1000),
            likes: 28,
            isLiked: true,
        },
        {
            id: '3',
            user: {
                name: '박서현',
                isOnline: true,
            },
            content: '커피 한 잔의 여유... 월요일을 시작하는 가장 좋은 방법이죠 ☕',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
            likes: 15,
            isLiked: false,
        },
        {
            id: '4',
            user: {
                name: '정수빈',
                isOnline: true,
            },
            content: '새로운 디자인 작업 중... 창의적인 아이디어가 계속 떠올라요! ✨',
            timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
            likes: 8,
            isLiked: false,
        },
        {
            id: '5',
            user: {
                name: '이준호',
                isOnline: false,
            },
            content: '오늘 하루도 화이팅! 모두 좋은 일만 있기를 🌟',
            timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
            likes: 22,
            isLiked: true,
        },
    ]);

    // Mock data for recommended users
    const recommendedUsers: UserProfile[] = React.useMemo(() => [
        {
            id: '1',
            name: '정수빈',
            bio: '디자이너 | 여행을 사랑하는 사람',
            mutualFriends: 3,
            isOnline: true,
        },
        {
            id: '2',
            name: '이준호',
            bio: '개발자 | 커피와 코딩',
            mutualFriends: 7,
            isOnline: false,
        },
        {
            id: '3',
            name: '최유진',
            bio: '사진가 | 순간을 담는 사람',
            mutualFriends: 2,
            isOnline: true,
        },
    ], []);

    // Animation values
    const animatedValues = useRef(
        new Map<string, Animated.Value>()
    ).current;

    // Initialize animated values for each post and user profile
    useEffect(() => {
        const allItems = [...recommendedUsers, ...posts];
        allItems.forEach(item => {
            // Only create a new Animated.Value if it doesn't exist
            if (!animatedValues.has(item.id)) {
                animatedValues.set(item.id, new Animated.Value(0));
            }
        });

        // Animate items sequentially
        allItems.forEach((item, index) => {
            const animatedValue = animatedValues.get(item.id);
            if (animatedValue) { // Ensure animatedValue is not undefined before starting animation
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 700,
                    delay: index * 100,
                    useNativeDriver: true,
                }).start();
            }
        });
    }, [posts, recommendedUsers, animatedValues]); // 'animatedValues' is a stable ref.current, but its contents change.

    const handleLike = (postId: string) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                    }
                    : post
            )
        );
    };

    const handleFollow = (userId: string) => {
        console.log('Follow user:', userId);
        // Implement follow logic here
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image
                            source={require('../../assets/images/sample.png')} // Placeholder image
                            style={styles.myProfileImage}
                        />
                        <View>
                            <Text style={styles.greetingText}>안녕하세요! 👋</Text>
                            <Text style={styles.subGreetingText}>
                                오늘도 좋은 하루 보내세요
                            </Text>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.iconButton}>
                            {/* Search Icon */}
                            <Text style={styles.icon}>🔍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            {/* Bell Icon */}
                            <Text style={styles.icon}>🔔</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Quick Write Section */}
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                            <View style={styles.inner}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-...' }} // imgUnsplashGKxkbyCDk 에 해당하는 URL
                                    style={styles.avatar}
                                />
                                <Text style={styles.placeholder}>오늘 어떤 일이 있었나요?</Text>
                                <Plus size={20} color="#a3a3a3" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Recommended Users Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>이런 사람은 어때요? ✨</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                            {recommendedUsers.map((profile) => {
                                const animatedValue = animatedValues.get(profile.id);
                                const translateY = animatedValue
                                    ? animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [20, 0], // Start 20 units down, animate to 0
                                    })
                                    : 0; // Fallback to 0 if animatedValue is not yet set

                                const opacity = animatedValue || new Animated.Value(0); // Fallback for opacity

                                const animatedStyle = {
                                    opacity: opacity,
                                    transform: [{ translateY: translateY }],
                                };
                                return (
                                    <Animated.View key={profile.id} style={[userProfileCardStyles.cardContainer, animatedStyle]}>
                                        <UserProfileCard
                                            profile={profile}
                                            onFollow={handleFollow}
                                        />
                                    </Animated.View>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* Posts Section */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>친구들의 한마디 💭</Text>
                        <View style={styles.postsContainer}>
                            {posts.map((post) => {
                                const animatedValue = animatedValues.get(post.id);
                                const translateY = animatedValue
                                    ? animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [30, 0], // Start 30 units down, animate to 0
                                    })
                                    : 0; // Fallback to 0 if animatedValue is not yet set

                                const opacity = animatedValue || new Animated.Value(0); // Fallback for opacity

                                const animatedStyle = {
                                    opacity: opacity,
                                    transform: [{ translateY: translateY }],
                                };
                                return (
                                    <Animated.View key={post.id} style={[postCardStyles.postCardContainer, animatedStyle]}>
                                        <PostCard
                                            post={post}
                                            onLike={handleLike}
                                        />
                                    </Animated.View>
                                );
                            })}
                        </View>
                    </View>

                    {/* End spacing */}
                    <View style={styles.bottomSpacer} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
