import { useSelector, useDispatch } from 'react-redux';
import { loadMyInfo } from "../store/thunks/user";
import { loadPosts } from "../store/thunks/post";
import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import RootState from "../store/state-types";

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Link from "next/link";
const Home: NextPage = () => {
  const { my } = useSelector((state: RootState)=>state.user);
  const { mainPosts, loadPostsLoading, bringMorePosts } = useSelector((state: RootState)=>state.post);
  const dispatch = useDispatch();

  const [prevLastId, setPrevLastId] = useState<number>(-1);

  useEffect(()=>{
    if(mainPosts.length < 10){
      dispatch(loadMyInfo());
      dispatch(loadPosts());
    }
    console.log("loadPosts")
  }, [])

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
        if(!loadPostsLoading && bringMorePosts){
          if(prevLastId != mainPosts[mainPosts.length - 1]?.id){
            dispatch(loadPosts({
              lastId: mainPosts[mainPosts.length - 1]?.id
            }));
          }
          setPrevLastId(mainPosts[mainPosts.length - 1]?.id);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [loadPostsLoading, bringMorePosts])

  return (
    <AppLayout>
      {my && <PostForm/>}
      {mainPosts.map((post)=>(post.Retweet ? <PostCard post={post.Retweet} retweetingPostId={post.id} key={post.id} /> : <PostCard post={post} retweetingPostId={null} key={post.id} />))}
    </AppLayout>
  )
}

export default Home;