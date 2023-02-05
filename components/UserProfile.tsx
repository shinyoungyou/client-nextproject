import { useSelector, useDispatch } from 'react-redux';
import { logoutRequest, navigateProfileActionCreator } from '../store/action-creators/user';
import { useRouter } from 'next/router'
import React from 'react';
import RootState from "../store/state-types";

import { Avatar, Box, Button, BottomNavigation, BottomNavigationAction, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { blue } from '@mui/material/colors';
import { LoadingButton } from '@mui/lab';

const UserProfile: React.FC = () => {
  const { my, logOutLoading, navigateProfile } = useSelector((state: RootState)=>state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutRequest);
  }

  const RedirectToHome = () => {
    router.push('/')
  }
  const RedirectToProfile = () => {
    router.push('/profile')
  }

  if (!my) return null;

  return (
    <Card sx={{ maxWidth: 345, margin: '8px 0' }}>
      <CardHeader
        avatar={
          <Avatar alt={my.username} src="/static/images/avatar/1.jpg" sx={{ bgcolor: blue[500] }} aria-label="recipe" />
        }
        action={
          <LoadingButton onClick={handleLogout} variant="outlined" loading={logOutLoading} style={{ margin: '4px 8px' }}>Log Out</LoadingButton>
        }
        title={my.username}
      />
      <CardActions>
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={navigateProfile}
        onChange={(event, newValue) => {
          dispatch(navigateProfileActionCreator(newValue));
        }}
      >

        <BottomNavigationAction onClick={RedirectToHome} label="Tweets" icon={my.Posts ? my.Posts.length : 0} />
        <BottomNavigationAction onClick={RedirectToProfile} label="Following" icon={my.Followings ? my.Followings.length: 0} />
        <BottomNavigationAction onClick={RedirectToProfile} label="Followers" icon={my.Followers ? my.Followers.length: 0} />

      </BottomNavigation>
      </Box>
      </CardActions>
    </Card>

  );
}

export default UserProfile;

