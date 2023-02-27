import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from "../store/thunks/user";
import RootState from '../store/state-types';
import React, { useState, useEffect } from 'react';

import { Box, Button, Input, InputLabel, InputAdornment, FormControl } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface UsernameEditFormProps {
}

const UsernameEditForm: React.FC<UsernameEditFormProps> = () => {
  const { changeUsernameDone } = useSelector((state: RootState)=>state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  useEffect(()=>{
    if(changeUsernameDone){
      setUsername("");
    }
  }, [changeUsernameDone])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeUsername({ username }));
  }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, width: '100%' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <FormControl variant="standard" sx={{ flexGrow: 1 }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Change Username
          </InputLabel>
          <Input
            name="new-nickname"
            value={username}
            onChange={handleChange}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button type="submit" variant="contained">Edit</Button>
        </Box>
      </form>
    </Box>
  );
}

export default UsernameEditForm