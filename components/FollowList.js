import { useState } from 'react';
import PropTypes from 'prop-types';
import { ListSubheader, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Button, Avatar } from '@mui/material';

const FollowList = ({ header }) => {
  const [checked, setChecked] = useState([1]);
  const [targetIndex, setTargetIndex] = useState(-1);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List 
      dense 
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {header}
        </ListSubheader>
      }
    >
      {[0, 1, 2, 3, 4].map((value, index) => {
        const labelId = `error`;
        return (
          <ListItem
            key={value}
            secondaryAction={
            <Button 
              variant="outlined" 
              onMouseEnter={()=>setTargetIndex(index)}
              onMouseLeave={()=>setTargetIndex(-1)}
              sx={{
                width: '110px',
                "&:hover": {
                  backgroundColor: "rgba(211, 47, 47, 0.04)",
                  border: "1px solid #d32f2f",
                  color: "#d32f2f"
                } 
              }}
            >{index == targetIndex ? "Unfollow" : "Following"}</Button>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Lila R. Mabry ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired
}

export default FollowList;