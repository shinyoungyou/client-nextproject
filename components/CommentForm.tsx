import { useDispatch, useSelector } from "react-redux";
import { addComment } from '../store/thunks/post';
import React, { useState, useEffect, FormEvent } from 'react';
import RootState from "../store/state-types";
import { Post } from "../store/state-types/post";
import { User } from "../store/state-types/user";

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import Tooltip from '@mui/material/Tooltip';
import { LoadingButton } from '@mui/lab';

interface CommentFormProps {
  post: Post
}

const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const { my } = useSelector((state: RootState)=>state.user);
  const { addCommentLoading, addCommentDone } = useSelector((state: RootState)=>state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(()=>{
    if(addCommentDone){
      setText('');
    }
  }, [addCommentDone])


  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addComment({ content: text, postId: post.id, userId: my?.id as number | string, User: my as User  }));
  }
  return (
      <Box sx={{ m: 1 }}>
        <form onSubmit={handleSubmit}>
          <Textarea
              placeholder="Type in here…"
              value={text}
              onChange={(event) => setText(event.target.value)}
              minRows={1}
              maxRows={2}
              startDecorator={
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Tooltip title="Good" placement="top">
                    <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('👍')}>
                      👍
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Summer" placement="top">
                    <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('🏖')}>
                      🏖
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Love" placement="top">
                    <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('😍')}>
                      😍
                    </IconButton>
                    </Tooltip>
                  </Box>
                  <Typography level="body3" sx={{ ml: 'auto', color: '#73738c', fontSize: '14px' }}>
                    {text.length} letter(s)
                  </Typography>
                </Box>
              }
              endDecorator={
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
                    <LoadingButton type="submit" variant="contained" loading={addCommentLoading}>Reply</LoadingButton>
                </Box>
              }
              sx={{ minWidth: 300, borderColor: '#D8D8DF', "&:hover": { borderColor: '#B9B9C6' } }}
          />
        </form>
      </Box>
  )
}

export default CommentForm;