import { useSelector, useDispatch } from "react-redux";
import { loadMyInfo, loadFollowings, loadFollowers } from "../store/thunks/user";
import Head from "next/head";
import Router, { useRouter } from 'next/router';
import { useEffect } from "react";
import type { NextPage } from 'next';
import RootState from "../store/state-types";
import { User } from '../store/state-types/user';

import AppLayout from '../components/AppLayout';
import UsernameEditForm from '../components/UsernameEditForm';
import FollowList from '../components/FollowList';
import wrapper from "../store";
import axios from "axios";
import {loadPosts} from "../store/thunks/post";

const Profile: NextPage = () => {
  const { my } = useSelector((state: RootState)=>state.user);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(()=>{
    if(my === null) router.replace('/');
    return;
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

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(loadMyInfo());
  await context.store.dispatch(loadFollowings());
  await context.store.dispatch(loadFollowers());
  // console.log(context.req);
});

export default Profile;