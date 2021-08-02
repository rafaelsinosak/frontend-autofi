import { React, useState } from "react";
import {
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Collapse,
  Tooltip,
  Menu,
  MenuItem,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ShareIcon from "@material-ui/icons/Share";

import usePost from "../usePost";
import Comments from "../../Comments/Comments";
import PublishComments from "../../Comments/PublishComments/PublishComments";

import "./PostsIndividual.css";

const PostsIndividual = (props) => {
  const { post, comment, handleChange, handleSubmit } = usePost(props);

  const [expandedId, setExpandedId] = useState(-1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [likeButton, setlikeButton] = useState(false);

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === +id ? -1 : +id);
  };

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setAnchorEl(null);
  };

  const handleLikeButtonClick = (event) => {
    setlikeButton(!likeButton);
  };

  return (
    <>
      <Card className="card" key={+post.id}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className="avatar">
              {post.userId}
            </Avatar>
          }
          titleTypographyProps={{ variant: "h4" }}
          title={post.title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Like">
            <IconButton
              aria-label="add to favorites"
              onClick={handleLikeButtonClick}
            >
              <FavoriteIcon style={{ color: likeButton ? "red" : "inherit" }} />
              <span className="actionCounter">{likeButton ? 1 : 0}</span>
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleShareClick}
              aria-label="share"
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Comments">
            <IconButton
              onClick={() => handleExpandClick(+post.id)}
              aria-expanded={+expandedId === +post.id}
              aria-label="show more comments"
            >
              <InsertCommentIcon />
              <span className="actionCounter">{post.comments.length}</span>
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={+expandedId === +post.id} timeout="auto" unmountOnExit>
          <Comments key={+post.id} comments={post.comments} />
          <PublishComments
            postId={+post.id}
            comment={comment}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Collapse>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleShareClose}
        >
          <a href="mailto:email@autofi.com">
            <MenuItem onClick={handleShareClose}>E-mail</MenuItem>
          </a>
          <a
            href={`https://web.whatsapp.com/send?text=Hey, check it out:\n\n ${post.title}\n${post.body}`}
          >
            <MenuItem onClick={handleShareClose}>Whatsapp</MenuItem>
          </a>
        </Menu>
      </Card>
    </>
  );
};

export default PostsIndividual;
