import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PostImages from '../components/PostImages'
import PostCardContent from "../components//PostCardContent";
import CommentForm from '../components/CommentForm';
import CommentListItem from '../components/CommentListItem';
import { StyledMenu, ExpandMore } from "../styles";

import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,Typography,List,ListItem,Divider,ListItemText,ListItemAvatar,ListSubheader, Menu, MenuItem, Tooltip} from '@mui/material';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlagIcon from "@mui/icons-material/Flag";

const PostCard = ({ post }) => {
  const my = useSelector((state)=>state.user.my);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [tweetAnchorEl, setTweetAnchorEl] = React.useState(null);
  const [replyAnchorEl, setReplyAnchorEl] = React.useState(null);

  const tweetOpen = Boolean(tweetAnchorEl);
  const replyOpen = Boolean(replyAnchorEl);

  const handleTweetClick = (event) => {
    setTweetAnchorEl(event.currentTarget);
  };

  const handleTweetClose = () => {
    setTweetAnchorEl(null);
  };

  const handleReplyClick = (event) => {
    setReplyAnchorEl(event.currentTarget);
  };


  const handleReplyClose = () => {
    setReplyAnchorEl(null);
  };

  return (
      <Card sx={{ m: 1 }}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <>
                <Tooltip title="More">
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={tweetOpen ? 'long-menu' : undefined}
                    aria-expanded={tweetOpen ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleTweetClick}
                >
                  <MoreVertIcon />
                </IconButton>
                </Tooltip>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={tweetAnchorEl}
                    open={tweetOpen}
                    onClose={handleTweetClose}
                >
                  {my?.id == post.User.id ?
                   <>
                     <MenuItem onClick={handleTweetClose} disableRipple>
                       <EditIcon/>
                       Edit
                     </MenuItem>
                     <MenuItem onClick={handleReplyClose} variant="soft" color="danger">
                       <ListItemDecorator sx={{color: 'inherit'}}>
                         <DeleteIcon/>
                       </ListItemDecorator>{' '}
                       Delete
                     </MenuItem>
                  </> : <>
                        <MenuItem onClick={handleTweetClose} disableRipple>
                          <PersonAddAltRoundedIcon/>
                          Follow
                        </MenuItem>
                        <MenuItem onClick={handleTweetClose} disableRipple>
                          <FlagIcon/>
                          Report
                        </MenuItem>
                      </>
                    }
                </StyledMenu>
              </>

            }
            title={post.User.username}
            subheader={post.createdAt}
        />
        {post.Images.length > 0 && post.Images.length < 5 && <PostImages images={post.Images}/>}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <PostCardContent content={post?.content} />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Like">
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Retweet">
          <IconButton aria-label="retweet">
            <RepeatIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Reply">
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
          >
            <ModeCommentOutlinedIcon />
          </ExpandMore>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CommentForm />
          <List
              subheader={<ListSubheader>{post.Comments.length}개의 댓글</ListSubheader>}
              sx={{ m: 1, bgcolor: 'background.paper' }}
          >
            {post.Comments.map((comment)=>(
                <CommentListItem comment={comment} key={comment.id} />
                ))}
          </List>
        </Collapse>
      </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    User: PropTypes.object,
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
}

export default PostCard;