import { useSelector, useDispatch } from "react-redux";
import { addPost, uploadImages } from '../store/thunks/post';
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import RootState from "../store/state-types";
import { ImagePath } from "../store/state-types/post";
import { User } from "../store/state-types/user";

import { Box, IconButton, Textarea, Typography } from '@mui/joy';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { LoadingButton } from '@mui/lab';

const PostForm: React.FC = () => {
  const { imagePaths, addPostLoading, addPostDone } = useSelector((state: RootState)=>state.post);
  const { my } = useSelector((state: RootState)=>state.user);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [images, setImages] = useState<ImagePath[] | []>([]);

  useEffect(()=>{
    if(addPostDone){
      setText('');
    }
  }, [addPostDone])

  const [targetIndex, setTargetIndex] = useState(-1);
  useEffect(()=>{
    console.log(images);
  }, [images])
  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  // useEffect(()=>{
  //   console.log(targetIndex);
  //   setImages([images.filter((index) => index != targetIndex)]);
  // }, [targetIndex>-1])

  const handleChangeImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files){
      for (let i = 0; files?.length > i; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prev) => [...prev, { src: reader.result as string, file } ])
        };
        reader.readAsDataURL(file);
      }
    }
  }

  const onChangeImages = (e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.taret.files, (file) => {
      imageFormData.append('image', file);
    })
    dispatch(uploadImages());
  }

  // const handleImageDelete = (index) => {
  //
  // }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost({
      content: text,
      userId: my?.id as number | string,
      User: my as User
    }));
  }
  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                  <input hidden accept="image/*" multiple type="file" onChange={handleChangeImagePreview} />
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
              {imagePaths.map((item, index) => (
                <ImageListItem sx={{ position: 'relative' }} key={index}>
                  <IconButton sx={{ position: 'absolute', zIndex: 1 }} onClick={()=>setTargetIndex(index)}>
                    <ClearRoundedIcon sx={{ bgcolor: 'rgba(25, 25, 25, 0.5)', color: 'white', borderRadius: '100%', p: 0.5, my: 0.5 }} />
                  </IconButton>
                  <img
                    src={item.src}
                    srcSet={item.src}
                    alt={item.file?.name}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
              </ImageList>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
              <LoadingButton type="submit" variant="contained" loading={addPostLoading}>Tweet</LoadingButton>
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