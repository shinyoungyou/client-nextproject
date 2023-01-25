import Head from "next/head";
import AppLayout from '../components/AppLayout';

import { useState, useCallback } from "react";
import Link from 'next/link';
import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormGroup,
  FormControl,
  ButtonGroup,
  Button,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    pass: "",
    passConfirm: ""
  });
  const { email, username, pass, passConfirm } = form;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, [form]);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setForm({ 
      email: "",
      username: "",
      pass: "",
      passConfirm: ""
    })
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
            <InputLabel htmlFor="Password-Confirm">
              Password Confirm
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              name="passConfirm"
              value={passConfirm}
              onChange={handleChange}
              id="Password-Confirm"
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
              label="Password-Confirm"
            />
          </FormControl>
          <Box sx={{ margin: '0 8px' }}>
            <FormControlLabel sx={{ display: 'block' }} control={<Checkbox required />} label="제로초 말을 잘 들을 것을 동의합니다." />
            <Button sx={{ display: 'block' }} type="submit" variant="contained">Register</Button>
          </Box>
          </form>
        </Box>
      </AppLayout>
    </>
  )
}

export default Signup;