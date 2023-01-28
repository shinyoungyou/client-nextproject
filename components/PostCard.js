import React, { useState } from 'react';
import CommentForm from '../components/CommentForm';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';

import { alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/joy';

const PostCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [tweetAnchorEl, setTweetAnchorEl] = React.useState(null);
  const [replyAnchorEl, setReplyAnchorEl] = React.useState(null);

  const twwetOpen = Boolean(tweetAnchorEl);
  const replyOpen = Boolean(replyAnchorEl);

  const handleTweetClick = (event) => {
    setTweetAnchorEl(event.currentTarget);
  };

  const handleTweetClose = () => {
    setTweetAnchorEl(null);
  };

  const handleReplyClick = (event) => {
    setReplyAnchorEl(event.currentTarget);
  };


  const handleReplyClose = () => {
    setReplyAnchorEl(null);
  };

  return (
      <Card sx={{ m: 1 }}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <>
                <Tooltip title="More">
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={twwetOpen ? 'long-menu' : undefined}
                    aria-expanded={twwetOpen ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleTweetClick}
                >
                  <MoreVertIcon />
                </IconButton>
                </Tooltip>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={tweetAnchorEl}
                    open={twwetOpen}
                    onClose={handleTweetClose}
                >
                  <MenuItem onClick={handleTweetClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleReplyClose} variant="soft" color="danger">
                    <ListItemDecorator sx={{ color: 'inherit' }}>
                      <DeleteIcon />
                    </ListItemDecorator>{' '}
                    Delete
                  </MenuItem>
                  <MenuItem onClick={handleTweetClose} disableRipple>
                    <PersonAddAltRoundedIcon />
                    Follow
                  </MenuItem>
                  <MenuItem onClick={handleTweetClose} disableRipple>
                    <FlagIcon />
                    Report
                  </MenuItem>
                </StyledMenu>
              </>

            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="100%"
            image="https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg"
            alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Like">
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Retweet">
          <IconButton aria-label="retweet">
            <RepeatIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Reply">
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
          >
            <ModeCommentOutlinedIcon />
          </ExpandMore>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CommentForm />
          <List
              subheader={<ListSubheader>{commentData.length}개의 댓글</ListSubheader>}
              sx={{ m: 1, bgcolor: 'background.paper' }}
          >
            {commentData.map((comment)=>(
                <>
              <ListItem
                  secondaryAction={
                    <>
                      <Tooltip title="More">
                      <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={replyOpen ? 'long-menu' : undefined}
                          aria-expanded={replyOpen ? 'true' : undefined}
                          aria-haspopup="true"
                          onClick={handleReplyClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      </Tooltip>
                      <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={replyAnchorEl}
                          open={replyOpen}
                          onClose={handleReplyClose}
                      >
                        <MenuItem onClick={handleReplyClose} disableRipple>
                          <EditIcon />
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleReplyClose} variant="soft" color="danger">
                          <ListItemDecorator sx={{ color: 'inherit' }}>
                            <DeleteIcon />
                          </ListItemDecorator>{' '}
                          Delete
                        </MenuItem>
                        <MenuItem onClick={handleTweetClose} disableRipple>
                          <PersonAddAltRoundedIcon />
                          Follow
                        </MenuItem>
                        <MenuItem onClick={handleReplyClose} disableRipple>
                          <FlagIcon />
                          Report
                        </MenuItem>
                      </StyledMenu>
                    </>
                  }
                  alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.username} src="/static/images/avatar/1.jpg"/>
              </ListItemAvatar>
              <ListItemText
                  sx={{ m: 1 }}
                  primary={comment.username}
                  secondary={
                    <React.Fragment>
                      {comment.comment}
                    </React.Fragment>
                  }
              />
            </ListItem>
              <Divider variant="inset" component="li" /></>))}
          </List>
        </Collapse>
      </Card>
  );
}

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const commentData = [
  {
    id: 1,
    username: "Mary S Bing",
    comment: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
  },
  {
    id: 2,
    username: "Rose A Kramer",
    comment: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo."
  },
  {
    id: 3,
    username: "Joy T Jones",
    comment: "Add rice and stir very gently to distribute. Top with artichokes andpeppers, and cook without stirring, until most of the liquid is absorbed,15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp andmussels, tucking them down into the rice, and cook again."
  },
]

export default PostCard;