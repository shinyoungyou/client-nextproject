import Link from "next/link";
import { useSelector } from 'react-redux';
import React, { ReactNode } from 'react';
import RootState from "../store/state-types";

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles';

import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import '@fontsource/public-sans';

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { my } = useSelector((state: RootState)=>state.user);
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1, fontFamily: 'Public Sans' }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{ display: { xs: "flex", sm: "flex" } }}
            >
              <a style={{ cursor: "pointer" }}>MUI</a>
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Link href="/profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <a>
                  <AccountCircle />
                </a>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {my !== null ? <UserProfile user={my} maxWidth={345} /> : <LoginForm />}
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="https://shinyoung-portfolio.web.app/" target="_blank" rel="noreferrer noopener">Made by Austyn</a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
