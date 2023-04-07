import { useSelector, useDispatch } from 'react-redux';
import { editPost, removePost, likePost, unlikePost } from '../store/thunks/post'
import React, { useState, useEffect, MouseEvent, BaseSyntheticEvent } from 'react';
import Link from "next/link";
import RootState from "../store/state-types";
import { Post } from '../store/state-types/post';
import moment from 'moment';

import MoreMenu from "./MoreMenu";
import RetweetMenu from "./RetweetMenu";
import PostImages from './PostImages'
import CommentForm from './CommentForm';
import CommentListItem from './CommentListItem';
import { ExpandMore } from "../styles";
import { EditContent } from '../styles/styled-components'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  List,
  ListSubheader,
  Tooltip
} from '@mui/material';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

interface PostCardProps {
  post: Post;
  posts: Post[];
  retweetingPostId: number | null;
}


const PostCard: React.FC<PostCardProps> = ({ post, posts, retweetingPostId }) => {
  const my = useSelector((state: RootState) => state.user.my);
  const { editPostDone, editPostLoading, removePostLoading } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();

  const [editStatus, setEditStatus] = useState("beforeEdit");
  const [content, setContent] = useState(post.content);

  const [expanded, setExpanded] = useState(false);

  const retweetingPost = posts.find((retweetingPost)=> retweetingPost.id == retweetingPostId);
  const retweetedTimes = posts.filter((retweetingPost)=> retweetingPost.RetweetId == post.id).length;
  const isRetweetedByMe = post.RetweetId && post.UserId == my?.id || posts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId == my?.id);

  useEffect(()=>{
    if(editPostDone){
      setEditStatus("beforeEdit");
    }
  }, [editPostDone]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = useState<BaseSyntheticEvent["currentTarget"]>(null);
  const [retweetEl, setRetweetEl] = useState<BaseSyntheticEvent["currentTarget"]>(null);

  const open = Boolean(anchorEl);
  const openRetweet = Boolean(retweetEl);
  // MouseEvent<HTMLButtonElement, MouseEvent>
  // BaseSyntheticEvent<HTMLButtonElement>.currentTarget
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRetweetButton = (event: MouseEvent<HTMLButtonElement>) => {
    setRetweetEl(event.currentTarget);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleEditPost = (post: Post) => {
    if (editStatus === "beforeEdit"){
      setEditStatus("editing");
    } else if (editStatus === "editing"){
      dispatch(editPost({ id: post.id, content }));
      setEditStatus("pending");
    }
  }

  const handleDeletePost = (post: Post) => {
    dispatch(removePost(post));
  }

  const isLiked = post.Likers?.find((like) => like.id == my?.id);
  const handleLikeButton = (post: Post) => {
    if(my === null) return alert('로그인이 필요합니다.');
    if(isLiked){
      dispatch(unlikePost({ postId: post.id }));
    } else {
      dispatch(likePost({ postId: post.id }));
    }
  }

  return (<Card sx={{m: 1, mb: 3}}>
    {retweetingPostId && <Link href={`/user/${retweetingPost?.User.id}`}><a style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}><RepeatIcon/>{retweetingPost?.User.username === my?.username ? "You" : retweetingPost?.User.username} Retweeted</a></Link>}
    <CardHeader
        avatar={
          <Avatar
              alt={post.User.username}
              src="/static/images/avatar/1.jpg"
              sx={{ bgcolor: blue[500] }}
          />
        }
        action={my !== null && <>
          <Tooltip title="More">
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
              <MoreVertIcon/>
            </IconButton>
          </Tooltip>
          <MoreMenu
              item={post}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              open={open}
              editStatus={editStatus}
              setEditStatus={setEditStatus}
              handleEdit={()=>handleEditPost(post)}
              editLoading={editPostLoading}
              handleDelete={()=>handleDeletePost(post)}
              removeLoading={removePostLoading}
          />
        </>
        }
        title={<Link href={`/user/${post.UserId}`}><a style={{ color: 'inherit', textDecoration: 'none' }}>{post.User.username}</a></Link>}
        subheader={post.createdAt === post.updatedAt ? moment(post.createdAt).startOf('day').fromNow() : `Edited · ${moment(post.updatedAt).startOf('day').fromNow()}`}
    />
    {post.Images?.length > 0 && post.Images.length < 5 && <PostImages images={post.Images}/>}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {editStatus === "editing"
            ?
            <EditContent
              onChange={handleContentChange}
            >
              {content}
            </EditContent>
            : post.content
        }
        {/*<PostCardContent content={post.content}/>*/}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Tooltip title={isLiked ? "Unlike": "Like"}>
        <IconButton onClick={()=>handleLikeButton(post)} aria-label="add to favorites" sx={{ py: 0, fontSize: "inherit", "&:hover": { color: "#F91880", bgcolor: 'transparent' } }}>
          <IconButton sx={{ color: "inherit", "&:hover": { bgcolor: 'rgba(249, 24, 128, 0.1)' } }}>
            <FavoriteBorderIcon/>
          </IconButton>
          {post.Likers?.length > 0 ? post.Likers.length : 0}
        </IconButton>
      </Tooltip>
      <>
        <Tooltip title={isRetweetedByMe ? "Undo Retweet" : "Retweet"}>
          <IconButton onClick={handleRetweetButton} aria-label="retweet" sx={{ py: 0, fontSize: "inherit", "&:hover": { color: "#53b781", bgcolor: 'transparent' } }}>
            <IconButton sx={{ color: "inherit", "&:hover": { bgcolor: '#e6f1eb' } }}>
              <RepeatIcon/>
            </IconButton>
            {retweetedTimes}
          </IconButton>
        </Tooltip>
        <RetweetMenu
            post={post}
            anchorEl={retweetEl}
            setAnchorEl={setRetweetEl}
            open={openRetweet}
        />
      </>
      <Tooltip title="Reply">
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
          <ModeCommentOutlinedIcon/>
        </ExpandMore>
      </Tooltip>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      {my !== null && <CommentForm post={post}/>}
      <List
          subheader={<ListSubheader>{post.Comments ? post.Comments.length : 0}개의 댓글</ListSubheader>}
          sx={{m: 1, bgcolor: 'background.paper'}}
      >
        {post.Comments?.map((comment) => (
            <CommentListItem
                comment={comment}
                key={comment.id}
            />))}
      </List>
    </Collapse>
  </Card>);
}

export default PostCard;