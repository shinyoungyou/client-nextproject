import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "../store/thunks/user";
import React, { BaseSyntheticEvent, Dispatch } from "react";
import RootState from "../store/state-types";
import { Post, Comment } from '../store/state-types/post';

import { StyledMenu } from "../styles";
import { MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import BackspaceIcon from '@mui/icons-material/Backspace';
import FlagIcon from "@mui/icons-material/Flag";
import { LoadingButton } from "@mui/lab";

interface MoreMenuProps {
  item: Post | Comment;
  anchorEl: BaseSyntheticEvent["currentTarget"];
  setAnchorEl: Dispatch<any>;
  open: boolean;
  editStatus: string;
  setEditStatus: React.Dispatch<React.SetStateAction<string>>;
  handleEdit: any;
  editLoading: boolean;
  handleDelete: any;
  removeLoading: boolean;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ item, anchorEl, setAnchorEl, open, editStatus, setEditStatus, handleEdit, editLoading, handleDelete, removeLoading }) => {
  const { my, followLoading, unfollowLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isFollowing = my?.Followings.find((user)=> user.id == item.User.id);

  const handleFollowing = (item: Post | Comment) => {
    if(isFollowing){
      dispatch(unfollow(item.User));
    } else {
      dispatch(follow(item.User));
      console.log(item.User);
      console.log(item.User.id);
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
          <MenuItem key="Edit" onClick={handleEdit}>
            <LoadingButton loading={editLoading} sx={{ p: 0, color: "inherit", textTransform: "inherit", fontSize: "inherit"  }}>
              <ListItemDecorator sx={{color: 'inherit'}}>
                <EditIcon/>
              </ListItemDecorator>{' '}
              {editStatus === "beforeEdit" && "Edit"}
              {editStatus === "editing" && "Done"}
            </LoadingButton>
          </MenuItem>
          {editStatus === "editing" && <MenuItem key="Cancel" onClick={()=>setEditStatus("beforeEdit")}>
            <LoadingButton
              loading={editLoading}
              sx={{p: 0, color: "inherit", textTransform: "inherit", fontSize: "inherit"}}>
              <ListItemDecorator sx={{color: 'inherit'}}>
                <BackspaceIcon/>
              </ListItemDecorator>{' '}
              Cancel
            </LoadingButton>
          </MenuItem>}
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