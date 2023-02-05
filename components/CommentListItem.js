import { useDispatch, useSelector } from "react-redux";
import { removeCommentRequest } from "../store/action-creators/post";
import { useState } from "react";
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

const CommentListItem = ({ comment }) => {
  const { removeCommentLoading } = useSelector((state) => state.post);
  const { my } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteComment = () => {
    dispatch(removeCommentRequest(comment));
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