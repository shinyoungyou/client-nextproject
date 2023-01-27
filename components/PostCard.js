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
import { red } from '@mui/material/colors';
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

const PostCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card sx={{ m: 1 }}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="100%"
            image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Beef_curry_rice_003.jpg"
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
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="retweet">
            <RepeatIcon />
          </IconButton>
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
          >
            <ModeCommentOutlinedIcon />
          </ExpandMore>
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
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
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