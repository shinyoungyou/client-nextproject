import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { my } = useSelector((state)=>state.user);
  const router = useRouter();

  useEffect(()=>{
    if(!my) router.push('/')
  }, [my])

  return (
    <>
     <Head>
        <title>Profile Page</title>
    </Head>
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="Followings" item={my?.Followings} />
      <FollowList header="Followers" item={my?.Followers}/>
    </AppLayout>
    </>
  )
}

export default Profile;