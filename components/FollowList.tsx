import { useDispatch } from "react-redux";
import { unfollowRequest } from "../store/action-creators/user";
import React, { useState } from 'react';
import { User } from '../store/state-types/user';

import { ListSubheader, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Button, Avatar } from '@mui/material';

interface FollowListProps {
  header: string;
  item: User["Followings"] | User["Followers"];
}
const FollowList: React.FC<FollowListProps> = ({ header, item }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([1]);
  const [targetIndex, setTargetIndex] = useState(-1);

  const handleUnfollow = (id: number | string) => {
    dispatch(unfollowRequest(id));
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
              onClick={()=>handleUnfollow(user.id as number | string)}
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

export default FollowList;