import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store/thunks/user';
import { navigateProfile } from '../store/reducers/user';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import RootState from "../store/state-types";
import { User } from '../store/state-types/user';

import { Avatar, Box, Button, BottomNavigation, BottomNavigationAction, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { blue } from '@mui/material/colors';
import { LoadingButton } from '@mui/lab';

interface UserProfileProps {
  user: User,
  maxWidth: number
}

const UserProfile: React.FC<UserProfileProps> = ({ user, maxWidth }) => {
  const { my, logOutLoading, profileMenu } = useSelector((state: RootState)=>state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logOut());
  }

  const RedirectToHome = () => {
    router.push('/')
  }
  const RedirectToProfile = () => {
    router.push('/profile')
  }

  return (
    <Card sx={{ maxWidth, margin: '8px 0' }}>
      <CardHeader
        avatar={
          <Avatar alt={user.username} src="/static/images/avatar/1.jpg" sx={{ bgcolor: blue[500] }} aria-label="recipe" />
        }
        action={
          my?.id == user.id && <LoadingButton onClick={handleLogout} variant="outlined" loading={logOutLoading} style={{ margin: '4px 8px' }}>Log Out</LoadingButton>
        }
        title={user.username}
      />
      <CardActions>
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={profileMenu}
        onChange={(event, newValue) => {
          dispatch(navigateProfile(newValue));
        }}
      >

        <BottomNavigationAction onClick={RedirectToHome} label="Tweets" icon={user.Posts ? user.Posts.length : 0} />
        <BottomNavigationAction onClick={RedirectToProfile} label="Following" icon={user.Followings ? user.Followings.length: 0} />
        <BottomNavigationAction onClick={RedirectToProfile} label="Followers" icon={user.Followers ? user.Followers.length: 0} />

      </BottomNavigation>
      </Box>
      </CardActions>
    </Card>

  );
}

export default UserProfile;

