import { useSelector, useDispatch } from "react-redux";
import { followRequestAction, unfollowRequestAction } from "../reducers/user";
import React, { useState } from "react";

import { StyledMenu } from "../styles";
import {
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlagIcon from "@mui/icons-material/Flag";
import {LoadingButton} from "@mui/lab";

const MoreMenu = ({ item, anchorEl, setAnchorEl, open, handleDelete, removeLoading }) => {
  const { my, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isFollowing = my?.Followings.find((user)=> user.id == item.User.id);

  const handleFollowing = (item) => {
    if(isFollowing){
      dispatch(unfollowRequestAction(item.User.id));
    } else {
      dispatch(followRequestAction(item.User));
    }
  }

  return (
      <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
      >
        {my?.id == item.User.id ? <>
          <MenuItem key="Edit" onClick={handleClose} disableRipple>
            <EditIcon/>
            Edit
          </MenuItem>
          <MenuItem key="Delete" onClick={handleDelete} variant="soft" color="danger">
            <LoadingButton loading={removeLoading} sx={{ p: 0, color: "inherit", textTransform: "inherit", fontSize: "inherit"  }}>
              <ListItemDecorator sx={{color: 'inherit'}}>
                <DeleteIcon/>
              </ListItemDecorator>{' '}
              Delete
            </LoadingButton>
          </MenuItem>
        </> : <>
          <MenuItem key={isFollowing ?"Unfollow" : "Follow"} onClick={()=>handleFollowing(item)} disableRipple>
            <LoadingButton loading={isFollowing ? unfollowLoading : followLoading} sx={{ p: 0, color: "inherit", textTransform: "inherit", fontSize: "inherit" }}>
              <ListItemDecorator sx={{color: 'inherit'}}>
                <PersonAddAltRoundedIcon/>
              </ListItemDecorator>{' '}
              {isFollowing ? "Unfollow" : "Follow"}
            </LoadingButton>
          </MenuItem>
          <MenuItem key="Report" onClick={handleClose} disableRipple>
            <FlagIcon/>
            Report
          </MenuItem>
        </>}
      </StyledMenu>
  )
}

export default MoreMenu;