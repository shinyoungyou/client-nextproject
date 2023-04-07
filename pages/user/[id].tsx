import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import wrapper from "../../store";
import { loadMyInfo, loadSingleUser } from "../../store/thunks/user";
import { loadPostsByUser } from "../../store/thunks/post";
import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import RootState from "../../store/state-types";
import axios from "axios";
import Head from 'next/head';

import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import UserProfile from "../../components/UserProfile";

const Post: NextPage = () => {
  const { singleUser, my } = useSelector((state: RootState)=>state.user);
  const { postsByUser, loadPostsByUserLoading, bringMorePostsByUser } = useSelector((state: RootState)=>state.post);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [prevLastId, setPrevLastId] = useState<number>(-1);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
        if(!loadPostsByUserLoading && bringMorePostsByUser){
          if(id != null &&  postsByUser != null && prevLastId != postsByUser[postsByUser.length - 1]?.id){
            dispatch(loadPostsByUser({
              id: parseInt(id as string),
              lastId: postsByUser[postsByUser.length - 1].id
            }));
            setPrevLastId(postsByUser[postsByUser.length - 1]?.id);
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [loadPostsByUserLoading, bringMorePostsByUser])

  return (
      <AppLayout>
        {singleUser && (
            <Head>
              <title>
                {singleUser.username}
                님의 글
              </title>
              <meta name="description" content={`${singleUser.username}님의 게시글`} />
              <meta property="og:title" content={`${singleUser.username}님의 게시글`} />
              <meta property="og:description" content={`${singleUser.username}님의 게시글`} />
              <meta property="og:image" content="https://nodebird.com/favicon.ico" />
              <meta property="og:url" content={`https://nodebird.com/user/${id}`} />
            </Head>
        )}
        {singleUser && singleUser.id != my?.id
            ? <UserProfile user={singleUser} maxWidth={660} />
            : null}
        {postsByUser?.map((post)=>(post.Retweet ? <PostCard post={post.Retweet} posts={postsByUser} retweetingPostId={post.id} key={post.id} /> : <PostCard post={post} posts={postsByUser} retweetingPostId={null} key={post.id} />))}
      </AppLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(loadMyInfo());
  if (context.params != null) {
    await context.store.dispatch(loadSingleUser({ id: parseInt(context.params.id as string) }));
    await context.store.dispatch(loadPostsByUser({ id: parseInt(context.params.id as string) }));
  }
  // console.log(context.req);
})

export default Post;