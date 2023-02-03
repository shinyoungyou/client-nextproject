import { useSelector, useDispatch } from "react-redux";
import { unfollowRequestAction } from "../reducers/user";

import { useState } from 'react';
import PropTypes from 'prop-types';
import { ListSubheader, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Button, Avatar } from '@mui/material';

const FollowList = ({ header, item }) => {
  const dispatch = useDispatch();
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

  const handleUnfollow = (id) => {
    dispatch(unfollowRequestAction(id));
  }

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
      {item?.length > 0 ? item.map((user, index) => {
        const labelId = `error`;
        return (
          <ListItem
            key={user.id}
            secondaryAction={
            <Button 
              variant="outlined"
              onClick={()=>handleUnfollow(user.id)}
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
                  alt={user.username}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.username} />
            </ListItemButton>
          </ListItem>
        );
      })
      : <img
        width="500px"
        alt="No Following"
        draggable="true"
        src="https://abs.twimg.com/responsive-web/client-web/yellow-birds-power-line-800x400.v1.0891edb9.png"
      />
      }
    </List>
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired
}

export default FollowList;