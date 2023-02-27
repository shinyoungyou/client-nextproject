import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import type { NextPage } from 'next';
import RootState from "../store/state-types";
import { User } from '../store/state-types/user';

import AppLayout from '../components/AppLayout';
import UsernameEditForm from '../components/UsernameEditForm';
import FollowList from '../components/FollowList';

const Profile: NextPage = () => {
  const { my } = useSelector((state: RootState)=>state.user);
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
      <UsernameEditForm />
      <FollowList header="Followings" item={my?.Followings as User["Followings"]} />
      <FollowList header="Followers" item={my?.Followers as User["Followers"]}/>
    </AppLayout>
    </>
  )
}

export default Profile;