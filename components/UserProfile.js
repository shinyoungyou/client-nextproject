import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

import { Avatar, Box, Button, BottomNavigation, BottomNavigationAction, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { blue } from '@mui/material/colors';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LoadingButton } from '@mui/lab';

const UserProfile = () => {
  const { my, logOutLoading } = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const handleLogout = () =>{
    dispatch(logoutRequestAction);
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '8px 0' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }}aria-label="recipe">
            S
          </Avatar>
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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction label="Tweets" icon={my.Posts ? my.Posts.length : 0} />
        <BottomNavigationAction label="Following" icon={my.Followings ? my.Followings.length: 0}  />
        <BottomNavigationAction label="Followers" icon={my.Followers ? my.Followers.length: 0} />

      </BottomNavigation>
      </Box>
      </CardActions>
    </Card>

  );
}

export default UserProfile;

