import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
const Home = () => {
  const { my } = useSelector((state)=>state.user);
  const mainPosts = useSelector((state)=>state.post.mainPosts);

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