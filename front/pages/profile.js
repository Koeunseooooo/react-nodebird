import AppLayout from "../components/AppLayout";
const Profile = () => {
    const followerList=[{nickname:"고은서"},{nickname:"고은서부계"},{nickname:"고은서부계2"},]
    const followingList=[{nickname:"고은서"},{nickname:"고은서부계"},{nickname:"고은서부계2"},]
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;