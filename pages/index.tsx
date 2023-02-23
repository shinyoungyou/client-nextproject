import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from "../store/thunks/post";
import { useEffect } from "react";
import type { NextPage } from 'next';
import RootState from "../store/state-types";

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
const Home: NextPage = () => {
  const { my } = useSelector((state: RootState)=>state.user);
  const { mainPosts, loadPostsLoading, bringMorePosts } = useSelector((state: RootState)=>state.post);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(mainPosts.length < 10){
      dispatch(loadPosts());
    }
    console.log("loadPosts")
  }, [])

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 700){
        if(!loadPostsLoading && bringMorePosts){
          dispatch(loadPosts());
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [loadPostsLoading, bringMorePosts])

  return (
    <>
      <AppLayout>
        {my && <PostForm/>}
        {mainPosts.map((post)=>(<PostCard post={post} key={post.id} />))}
      </AppLayout>
    </>
  )
}

export default Home;