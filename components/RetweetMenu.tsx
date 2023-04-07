import { useSelector, useDispatch } from "react-redux";
import { retweet, undoRetweet } from "../store/thunks/post";
import React, { BaseSyntheticEvent, Dispatch } from "react";
import RootState from "../store/state-types";
import { Post } from '../store/state-types/post';

import { StyledMenu } from "../styles";
import { MenuItem } from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { LoadingButton } from "@mui/lab";

interface RetweetMenuProps {
  post: Post;
  anchorEl: BaseSyntheticEvent["currentTarget"];
  setAnchorEl: Dispatch<any>;
  open: boolean;
}

const RetweetMenu: React.FC<RetweetMenuProps> = ({ post, anchorEl, setAnchorEl, open }) => {
  const { mainPosts, retweetLoading, undoRetweetLoading } = useSelector((state: RootState) => state.post);
  const { my } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isRetweetedByMe = post.RetweetId && post.UserId == my?.id || mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId == my?.id);
  const isRetweetedByOthers = post.RetweetId && post.UserId == my?.id || mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId != my?.id);
  const isOriginalPost = mainPosts.find(mainPost => post.id == mainPost.RetweetId && mainPost.UserId);
  const retweetingPostId = isOriginalPost?.id; // the id of the post which is retweeting the original one.

  const handleRetweet = (post: Post) => {
    if(my === null) return alert('로그인이 필요합니다.');
    if(isRetweetedByMe){
      dispatch(undoRetweet({
        id: isOriginalPost ? retweetingPostId as number : post.id
      }));
    } else if(isRetweetedByOthers){
      dispatch(retweet({
        id: isOriginalPost ? post.id : post.RetweetId as number
      }));
    } else {
      dispatch(retweet({
        id: post.id
      }));
    }
  }

  return (
      <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
      >
          <MenuItem key={isRetweetedByMe ?"Undo Retweet" : "Retweet"} onClick={()=>handleRetweet(post)} disableRipple>
            <LoadingButton loading={isRetweetedByMe ? undoRetweetLoading : retweetLoading} sx={{ p: 0, color: "inherit", textTransform: "inherit", fontSize: "inherit" }}>
              <ListItemDecorator sx={{ color: 'inherit' }}>
                <RepeatIcon/>
              </ListItemDecorator>{' '}
              {isRetweetedByMe ? "Undo Retweet" : "Retweet"}
            </LoadingButton>
          </MenuItem>
          <MenuItem key="Quote Tweet" onClick={handleClose} disableRipple>
            <EditIcon/>
            Quote Tweet
          </MenuItem>
      </StyledMenu>
  )
}

export default RetweetMenu;