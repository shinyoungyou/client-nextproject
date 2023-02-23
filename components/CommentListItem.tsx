import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../store/thunks/post";
import React, { useState, MouseEvent, BaseSyntheticEvent } from "react";
import RootState from "../store/state-types";
import { Comment } from '../store/state-types/post';

import MoreMenu from './MoreMenu';

import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CommentListItemProps {
  comment: Comment
}

const CommentListItem: React.FC<CommentListItemProps> = ({ comment }) => {
  const { removeCommentLoading } = useSelector((state: RootState) => state.post);
  const { my } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<BaseSyntheticEvent["currentTarget"]>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteComment = () => {
    dispatch(removeComment(comment));
  }

  return (
      <>
        <ListItem key={comment.id}
          secondaryAction={
            my && <>
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
                item={comment}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                handleDelete={handleDeleteComment}
                removeLoading={removeCommentLoading}
              />
            </>
        } alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={comment.User.username} src="/static/images/avatar/1.jpg"/>
          </ListItemAvatar>
          <ListItemText
              sx={{m: 1}}
              primary={comment.User.username}
              secondary={comment.content}
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
      </>
  )
}

export default CommentListItem;