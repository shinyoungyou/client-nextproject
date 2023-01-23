import { useState } from "react";
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
  Button
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [form, setForm] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((){ [name]: value })
  }

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
        <ButtonGroup aria-label="outlined button group" style={{ width: '100%', margin: '0 8px' }}>
          <Button type="submit" variant="contained">Login</Button>
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
