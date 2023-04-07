import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import wrapper from "../../store";
import { loadMyInfo } from "../../store/thunks/user";
import { loadSinglePost } from "../../store/thunks/post";
import type { NextPage } from 'next';
import RootState from "../../store/state-types";
import axios from "axios";
import Head from 'next/head';

import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import React from "react";
const Post: NextPage = () => {
  const { singlePost } = useSelector((state: RootState)=>state.post);
  const router = useRouter();
  const { id } = router.query;

  return (
      <AppLayout>
        {singlePost && <Head>
          <title>
            {singlePost.User.username}
            님의 글
          </title>
          <meta name="description" content={singlePost.content}/>
          <meta property="og:title" content={`${singlePost.User.username}님의 게시글`}/>
          <meta property="og:description" content={singlePost.content}/>
          <meta property="og:image"
                content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'}/>
          <meta property="og:url" content={`https://nodebird.com/post/${id}`}/>
        </Head>}
        {singlePost && (singlePost.Retweet ? <PostCard post={singlePost.Retweet} posts={[singlePost]} retweetingPostId={singlePost.id} key={singlePost.id} /> : <PostCard post={singlePost} posts={[singlePost]} retweetingPostId={null} />)}
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
  await context.store.dispatch(loadSinglePost({ id: parseInt(context.params?.id as string) }));

  console.log(context.req);
})

export default Post;