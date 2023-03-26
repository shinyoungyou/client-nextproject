import { useSelector, useDispatch } from "react-redux";
import { loadFollowings, loadFollowers } from "../store/thunks/user";
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

  const dispatch = useDispatch();

  useEffect(()=>{
    if(!my) router.push('/')
  }, [my]);

  useEffect(()=>{
    dispatch(loadFollowings());
    dispatch(loadFollowers());
  }, []);

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