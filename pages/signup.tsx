import { useDispatch, useSelector } from 'react-redux';
import { loadMyInfo, signUp } from '../store/thunks/user';
import Head from "next/head";
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback, MouseEvent, ChangeEvent, FormEvent } from "react";
import type { NextPage } from 'next';
import RootState from "../store/state-types";

import AppLayout from '../components/AppLayout';

import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormControlLabel,
  Checkbox,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from '@mui/lab';
import wrapper from "../store";
import axios from "axios";
import {loadPosts} from "../store/thunks/post";

const Signup: NextPage = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, my } = useSelector((state: RootState)=>state.user);
  const [form, setForm] = useState({
    email: "",
    username: "",
    pass: "",
    passCheck: "",
    term: ""
  });
  const [passError, setPassError] = useState(false);
  const [termError, setTermError] = useState(false);
  const router = useRouter();

  const { email, username, pass, passCheck, term } = form;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if ((my !== null) && my.id) router.replace('/');
    return;
  }, [my])

  useEffect(()=>{
    if(signUpDone){
      setForm({
        email: "",
        username: "",
        pass: "",
        passCheck: "",
        term: ""
      })
      router.replace('/');
    }
  }, [signUpDone])

  useEffect(()=>{
    if(signUpError){
      // mui alert compo 사용하기
      alert(signUpError);
    }
  }, [signUpError])

  useEffect(()=>{
    if (pass !== passCheck){
      setPassError(true);
    }
    if (pass == passCheck){  
      setPassError(false);
    }
  }, [form])

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target; // 비구조화 할당 한 name와 value는 read-only라서 name 또는 value의 값을 바꿀 수 없다.
    if (e.target.checked){
      e.target.value = "checked";
    }

    setForm((prev) => ({ ...prev, [e.target?.name]: e.target?.value }));
  }, [form]);


  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pass !== passCheck){  
      console.log("before fake req");
      return setPassError(true);
    }

    if (!term){
      console.log("before fake req");
      return setTermError(true);
    }

    // send req first,
    dispatch(signUp({ email, username, pass }));
    console.log("fake req");
    console.log(email, username, pass);
    // and then initialize, but do not here
  }, [form]);

  return (
    <>
       <Head>
        <title>Signup Page</title>
      </Head>
      <AppLayout>
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

            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" style={{ marginBottom: "4px" }}>
              <InputLabel htmlFor="Username">
                Username
              </InputLabel>
              <OutlinedInput
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                id="Username"
                label="Username"
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
              required
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
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" style={{ marginTop: "4px" }}>
            <InputLabel htmlFor="Password-Check">
              Password Check
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              name="passCheck"
              value={passCheck}
              onChange={handleChange}
              required
              id="Password-Check"
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
              label="Password-Check"
            />
          </FormControl>
          {passError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
          <Box sx={{ margin: '0 8px' }}>
            <FormControlLabel sx={{ display: 'block' }} control={<Checkbox name="term" value={term} onChange={handleChange} />} label="제로초 말을 잘 들을 것을 동의합니다." />
            {termError && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <LoadingButton sx={{ display: 'block' }} type="submit" variant="contained" loading={signUpLoading}>Register</LoadingButton>
          </Box>
          </form>
        </Box>
      </AppLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context)=>{
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  await context.store.dispatch(loadMyInfo());
  // console.log(context.req);
});

export default Signup;