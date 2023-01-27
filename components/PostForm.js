import { useState, useEffect } from 'react';

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import { Button, Input } from "@mui/material";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PostForm = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  useEffect(()=>{
    console.log(preview);
  }, [preview])
  useEffect(()=>{
    console.log(images);
    setPreview([]);
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview((prev) => [...prev, { id: i+1, url: reader.result }])
      };
      reader.readAsDataURL(image);
    }
  }, [images])
  const handleFileChange = (e) => {
    setImages((prev)=> {
      return [...e.target.files, ...prev];
    });
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
                <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
                  <ImageOutlinedIcon color="primary"/>
                </IconButton>
                <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('👍')}>
                  👍
                </IconButton>
                <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('🏖')}>
                  🏖
                </IconButton>
                <IconButton variant="outlined" sx={{ borderColor: '#D8D8DF' }} color="neutral" onClick={addEmoji('😍')}>
                  😍
                </IconButton>
              </Box>
              <Typography level="body3" sx={{ ml: 'auto', color: '#73738c' }}>
                {text.length} letter(s)
              </Typography>
            </Box>
          }
          endDecorator={
          <Box sx={{ width: '100%' }} >
            <ImageList sx={{ width: 500, maxHeight: 350 }} cols={3} rowHeight={164}>
              {preview?.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={item.url}
                    srcSet={item.url}
                    alt={item.id}
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