import {
    Heart,
    MessageCircle,
    MoreHorizontal,
    Send
} from 'lucide-react-native';
import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

type Post = {
    id: number;
    username: string;
    handle: string;
    profileImage: string;
    postImage: string;
    likes: number;
    comments: number;
    caption: string;
    timeAgo: string;
};

type PostItemProps = {
    post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => (
    <View style={styles.postContainer}>
        {/* Post Header */}
        <View style={styles.postHeader}>
            <View style={styles.userInfo}>
                <View style={styles.profileImageContainer}>
                    <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
                </View>
                <View style={styles.userTextInfo}>
                    <Text style={styles.username}>{post.username}</Text>
                    <Text style={styles.handle}>{post.handle}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <MoreHorizontal size={20} color="#706C6C" />
            </TouchableOpacity>
        </View>

        {/* Post Image */}
        <Image source={{ uri: post.postImage }} style={styles.postImage} />

        {/* Post Actions */}
        <View style={styles.postActions}>
            <View style={styles.leftActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Heart size={20} color="#000000" />
                    <Text style={styles.actionCount}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <MessageCircle size={20} color="#292D32" />
                    <Text style={styles.actionCount}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Send size={18} color="#000000" style={{ transform: [{ rotate: '-36.85deg' }] }} />
                </TouchableOpacity>
            </View>
            <Text style={styles.timeAgo}>{post.timeAgo}</Text>
        </View>

        {/* Post Caption */}
        <Text style={styles.caption}>{post.caption}</Text>
    </View>
);

export const HomeScreen = () => {
    const posts: Post[] = [
        {
            id: 1,
            username: 'Anton Demeron',
            handle: '@anton_demeron',
            profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            postImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
            likes: 573,
            comments: 30,
            caption: 'Down the road',
            timeAgo: '35 min ago',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.menuButton}>
                        <View style={[styles.menuDot, { backgroundColor: '#FA9884' }]} />
                        <View style={[styles.menuDot, { backgroundColor: '#FA9884' }]} />
                        <View style={[styles.menuDot, { backgroundColor: '#FA9884' }]} />
                        <View style={[styles.menuDot, { backgroundColor: '#9E9898' }]} />
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Send size={20} color="#FA9884" />
                        <View style={styles.notificationBadge}>
                            <Text style={styles.notificationBadgeText}>2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>


                {/* Posts */}
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </ScrollView>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 28,
        paddingTop: 20,
        paddingBottom: 10,
    },
    headerLeft: {},
    menuButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 29,
        height: 29,
    },
    menuDot: {
        width: 13,
        height: 13,
        borderRadius: 3,
        marginRight: 3,
        marginBottom: 3,
    },
    headerRight: {},
    notificationButton: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#575353',
        borderRadius: 6,
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#FFFFFF',
    },
    notificationBadgeText: {
        color: '#FFFFFF',
        fontSize: 7,
        fontWeight: '400',
    },
    storiesContainer: {
        marginTop: 30,
    },
    storiesContent: {
        paddingHorizontal: 13,
        paddingVertical: 10,
    },
    storyContainer: {
        marginRight: 15,
        alignItems: 'center',
    },
    storyImageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    storyImageContainerWithBorder: {
        borderWidth: 3,
        borderColor: '#FA9884',
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    addStoryButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FA9884',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postContainer: {
        backgroundColor: '#FCFCFC',
        marginHorizontal: 27,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 20,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#FA9884',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userTextInfo: {
        marginLeft: 16,
    },
    username: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 3,
    },
    handle: {
        fontSize: 12,
        fontWeight: '600',
        color: 'rgba(87, 83, 83, 0.85)',
    },
    postImage: {
        width: width - 72,
        height: 310,
        borderRadius: 20,
        marginHorizontal: 18,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 14,
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    actionCount: {
        marginLeft: 6,
        fontSize: 10,
        fontWeight: '600',
        color: '#000000',
    },
    timeAgo: {
        fontSize: 12,
        fontWeight: '700',
        color: '#9E9898',
    },
    caption: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(66, 61, 61, 0.89)',
        height: 75,
        borderRadius: 20,
        marginHorizontal: 22,
        marginBottom: 20,
    },
    navButton: {
        padding: 10,
    },
    activeNavButton: {
        backgroundColor: '#FA9884',
        borderRadius: 10,
    },
    navIcon: {
        width: 20,
        height: 20,
        backgroundColor: '#FA9884',
    },
});

