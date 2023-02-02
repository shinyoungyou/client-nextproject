import { useSelector } from "react-redux";
import React, { useState } from "react";

import { StyledMenu } from "../styles";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlagIcon from "@mui/icons-material/Flag";
import {LoadingButton} from "@mui/lab";

const MoreMenu = ({ item, anchorEl, setAnchorEl, open, handleDelete, removeLoading }) => {
  const my = useSelector((state) => state.user.my);

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <LoadingButton loading={removeLoading} sx={{ p: 0, color: "inherit" }}>
              <ListItemDecorator sx={{color: 'inherit'}}>
                <DeleteIcon/>
              </ListItemDecorator>{' '}
              Delete
            </LoadingButton>
          </MenuItem>
        </> : <>
          <MenuItem key="Follow" onClick={handleClose} disableRipple>
            <PersonAddAltRoundedIcon/>
            Follow
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