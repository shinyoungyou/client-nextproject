import { useState, useEffect } from 'react';

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import { Button, Input } from "@mui/material";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const PostForm = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [targetIndex, setTargetIndex] = useState(-1);

  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  // useEffect(()=>{
  //   console.log(targetIndex);
  //   setImages([images.filter((index) => index != targetIndex)]);
  // }, [targetIndex>-1])
  const handleFileChange = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, { url: reader.result, file } ])
      };
      reader.readAsDataURL(file);
    }
  }
  const handleImageDelete = (index) => {

  }
  const handleSubmit = () => {

  }
  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Type in here…"
          value={text}
          onChange={(event) => setText(event.target.value)}
          minRows={2}
          maxRows={4}
          startDecorator={
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Tooltip title="Media" placement="top">
                <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
                  <ImageOutlinedIcon color="primary"/>
                </IconButton>
                </Tooltip>
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
              <Typography level="body3" sx={{ ml: 'auto', color: '#73738c', fontSize: '14px'  }}>
                {text.length} letter(s)
              </Typography>
            </Box>
          }
          endDecorator={
          <Box sx={{ width: '100%' }} >
            <ImageList sx={{ width: 500, maxHeight: 350 }} cols={3} rowHeight={164}>
              {images?.map((item, index) => (
                <ImageListItem sx={{ position: 'relative' }} key={item.id}>
                  <IconButton sx={{ position: 'absolute' }} onClick={()=>setTargetIndex(index)}>
                    <ClearRoundedIcon sx={{ bgcolor: 'rgba(25, 25, 25, 0.5)', color: 'white', borderRadius: '100%', p: 0.5, my: 0.5 }} />
                  </IconButton>
                  <img
                    src={item.url}
                    srcSet={item.url}
                    alt={item.file?.name}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
              </ImageList>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
              <Button type="submit" variant="contained">Tweet</Button>
            </Box>
          </Box>
          }
          sx={{ minWidth: 300, borderColor: '#D8D8DF', "&:hover": { borderColor: '#B9B9C6' } }}
        />
      </form>
    </Box>
  )
}

export default PostForm;