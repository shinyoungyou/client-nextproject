import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCommentRequest } from '../reducers/post';

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import Tooltip from '@mui/material/Tooltip';
import { LoadingButton } from '@mui/lab';

const CommentForm = ({ post }) => {
  const { my } = useSelector((state)=>state.user);
  const { addCommentLoading, addCommentDone } = useSelector((state)=>state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(()=>{
    if(addCommentDone){
      setText('');
    }
  }, [addCommentDone])


  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCommentRequest({ content: text, postId: post.id, userId: my.id, User: my }));
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