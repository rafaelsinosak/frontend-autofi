import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";

import "./Comments.css";

const Comments = (props) => {
  const comments = props.comments;
  return (
    <div key={comments.id}>
      <List className="list">
        {comments.map((comment, key) => {
          return (
            <span key={key}>
              <Divider component="li" />
              <ListItem key={key}>
                <ListItemAvatar>
                  <Avatar aria-label="recipe" className="avatar">
                    {comment.email.substring(0, 1).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={comment.email}
                  secondary={comment.body}
                />
              </ListItem>
            </span>
          );
        })}
      </List>
    </div>
  );
};

export default Comments;
