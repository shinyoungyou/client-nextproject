import { useState } from 'react';
import Link from 'next/link';

import { Avatar, Box, Button, BottomNavigation, BottomNavigationAction, Card, CardHeader, CardContent,CardActions } from '@mui/material';
import { blue } from '@mui/material/colors';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserProfile = ({ setIsLoggedIn }) => {
  const [value, setValue] = useState(0);

  return (
    <Card sx={{ maxWidth: 345, margin: '8px 0' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }}aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <Button onClick={()=>setIsLoggedIn(false)} variant="outlined" style={{ margin: '4px 8px' }}>Log Out</Button>
        }
        title="Shrimp Chorizo"
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
        
        <BottomNavigationAction label="Tweets" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Following" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Followers" icon={<LocationOnIcon />} />
      
      </BottomNavigation>
      </Box>
      </CardActions>
    </Card>

  );
}

export default UserProfile;

