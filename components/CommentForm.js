import { useState } from 'react';

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import { Button, Input } from "@mui/material";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';

const CommentForm = () => {
  const [text, setText] = useState('');

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const handleSubmit = () => {


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
                    <Button type="submit" variant="contained">Reply</Button>
                </Box>
              }
              sx={{ minWidth: 300, borderColor: '#D8D8DF', "&:hover": { borderColor: '#B9B9C6' } }}
          />
        </form>
      </Box>
  )
}

export default CommentForm;