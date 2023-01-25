import Head from "next/head";
import AppLayout from '../components/AppLayout';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  return (
    <>
     <Head>
        <title>Profile Page</title>
    </Head>
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="Following" />
      <FollowList header="Followers" />
    </AppLayout>
    </>
  )
}

export default Profile;