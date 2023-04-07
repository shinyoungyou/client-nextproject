import { useDispatch, useSelector } from "react-redux";
import { editComment, removeComment } from "../store/thunks/post";
import React, { useState, MouseEvent, BaseSyntheticEvent, useEffect } from "react";
import RootState from "../store/state-types";
import { Comment } from '../store/state-types/post';

import MoreMenu from './MoreMenu';
import { EditContent } from '../styles/styled-components'

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
  const { editCommentDone, editCommentLoading, removeCommentLoading } = useSelector((state: RootState) => state.post);
  const { my } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

    const [editStatus, setEditStatus] = useState("beforeEdit");
    const [content, setContent] = useState(comment.content);

  const [anchorEl, setAnchorEl] = useState<BaseSyntheticEvent["currentTarget"]>(null);

  const open = Boolean(anchorEl);

    useEffect(()=>{
      if(editCommentDone){
        setEditStatus("beforeEdit");
      }
    }, [editCommentDone])

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

    const handleEditComment = (comment: Comment) => {
      if (editStatus === "beforeEdit"){
        setEditStatus("editing");
      } else if (editStatus === "editing"){
        dispatch(editComment({
          postId: comment.PostId,
          id: comment.id,
          content
        }));
        setEditStatus("pending");
      }
    }

  const handleDeleteComment = (comment: Comment) => {
    dispatch(removeComment({ postId: comment.PostId as number, id: comment.id }));
  }

  return (
      <>
        <ListItem key={comment.id}
          secondaryAction={
              my !== null && <>
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
                editStatus={editStatus}
                setEditStatus={setEditStatus}
                handleEdit={()=>handleEditComment(comment)}
                editLoading={editCommentLoading}
                handleDelete={()=>handleDeleteComment(comment)}
                removeLoading={removeCommentLoading}
              />
            </>
        } alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={comment.User.username} src="/static/images/avatar/1.jpg"/>
          </ListItemAvatar>
          <ListItemText
              sx={{ m: 1 }}
              primary={comment.User.username}
              secondary={editStatus === "editing"
                  ?
                  <EditContent
                      onChange={handleContentChange}
                  >
                      {content}
                  </EditContent>
                  : comment.content}
          />
        </ListItem>
        <Divider variant="inset" component="li"/>
      </>
  )
}

export default CommentListItem;