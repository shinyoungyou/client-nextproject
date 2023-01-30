import React, {useState} from "react";

import {StyledMenu} from "../styles";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlagIcon from "@mui/icons-material/Flag";
const CommentListItem = ({comment}) => {
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
      <>
        <ListItem key={comment.id}
          secondaryAction={
            <>
              <Tooltip title="More">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={replyOpen ? 'long-menu' : undefined}
                  aria-expanded={replyOpen ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleReplyClick}
                >
                  <MoreVertIcon/>
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
                <MenuItem key={0} onClick={handleTweetClose} disableRipple>
                  <EditIcon/>
                  Edit
                </MenuItem>
                <MenuItem key={1} onClick={handleReplyClose} variant="soft" color="danger">
                  <ListItemDecorator sx={{color: 'inherit'}}>
                    <DeleteIcon/>
                  </ListItemDecorator>{' '}
                  Delete
                </MenuItem>
                <MenuItem key={0} onClick={handleTweetClose} disableRipple>
                  <PersonAddAltRoundedIcon/>
                  Follow
                </MenuItem>
                <MenuItem key={1} onClick={handleTweetClose} disableRipple>
                  <FlagIcon/>
                  Report
                </MenuItem>
              </StyledMenu>
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