import { useSelector, useDispatch } from 'react-redux';
import { removePostRequest, likePostRequest, unlikePostRequest } from '../reducers/post'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PostImages from '../components/PostImages'
import CommentForm from '../components/CommentForm';
import CommentListItem from '../components/CommentListItem';
import {StyledMenu, ExpandMore} from "../styles";

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
  MenuItem,
  Tooltip
} from '@mui/material';
import {blue} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreMenu from "./MoreMenu";

const PostCard = ({ post }) => {
  const my = useSelector((state) => state.user.my);
  const { removePostLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeletePost = () => {
    dispatch(removePostRequest(post.id));
  }

  const handleLikeButton = (post) => {
    if(!my) return alert("로그인이 필요합니다.");
    if(post.Likes.find((like) => like.userId == my.id)){
      dispatch(unlikePostRequest({ postId: post.id, userId: my.id }));
    } else {
      dispatch(likePostRequest({ postId: post.id, userId: my.id }));

    }
  }

  return (<Card sx={{m: 1, mb: 3}}>
    <CardHeader
        avatar={
          <Avatar
              alt={post.User.username}
              src="/static/images/avatar/1.jpg"
              sx={{ bgcolor: blue[500] }}
          />
        }
        action={my && <>
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
              handleDelete={handleDeletePost}
              removeLoading={removePostLoading}
          />
        </>
        }
        title={post.User.username}
        subheader={post.createdAt}
    />
    {post.Images.length > 0 && post.Images.length < 5 && <PostImages images={post.Images}/>}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {post.content}
        {/*<PostCardContent content={post.content}/>*/}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Tooltip title={post.Likes.find((like) => like.userId == my.id) ? "Unlike": "Like"}>
        <IconButton onClick={()=>handleLikeButton(post)} aria-label="add to favorites" sx={{ py: 0, fontSize: "inherit", "&:hover": { color: "#F91880", bgcolor: 'transparent' } }}>
          <IconButton  sx={{ color: "inherit", "&:hover": { bgcolor: 'rgba(249, 24, 128, 0.1)' } }}>
            <FavoriteBorderIcon/>
          </IconButton>
          {post.Likes?.length > 0 ? post.Likes.length : 0}
        </IconButton>
      </Tooltip>
      <Tooltip title="Retweet">
        <IconButton aria-label="retweet">
          <RepeatIcon/>
        </IconButton>
      </Tooltip>
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
      {my && <CommentForm post={post}/>}
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

PostCard.propTypes = {
  post: PropTypes.shape({
    // id: PropTypes.number,
    id: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    User: PropTypes.object,
    Likes: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
}

export default PostCard;