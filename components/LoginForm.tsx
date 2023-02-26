import React, { useState, useEffect, useCallback, MouseEvent, ChangeEvent, FormEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../store/thunks/user';
import Link from 'next/link';
import RootState from "../store/state-types";

import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  ButtonGroup,
  Button
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from '@mui/lab';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const LoginForm: React.FC = () => {
  const { logInLoading, logInDone, logInError } = useSelector((state: RootState)=>state.user)
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    pass:""
  });
  const { email, pass } = form;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=>{
    if(logInDone){
      setForm({
        email: "",
        pass:""
      })
    }
  }, [logInDone])
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, [form]);


  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logIn(form));
  }, [form]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" style={{ marginBottom: "4px" }}>
          <InputLabel htmlFor="Email">
            Email
          </InputLabel>
          <OutlinedInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="Email"
            label="Email"
          />
        </FormControl>
        
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" style={{ marginTop: "4px" }}>
          <InputLabel htmlFor="Password">
            Password
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            name="pass"
            value={pass}
            onChange={handleChange}
            id="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {logInError && <Stack sx={{ mx: 1, width: '100%' }} spacing={2}>
          <Alert severity="error">{logInError}</Alert>
        </Stack>}
        <ButtonGroup aria-label="outlined button group" style={{ width: '100%', margin: '0 8px' }}>
          <LoadingButton type="submit" variant="contained" loading={logInLoading}>Login</LoadingButton>
          <Button variant="outlined">
            <Link href="/signup">
              <a style={{ textDecoration: 'none', color: '#1976d2' }}>
                Sign Up
              </a>
            </Link>
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default LoginForm;
