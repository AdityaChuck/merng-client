import React, { useContext } from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/Auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import PopUp from "../util/PopUp";

const PostCard = (props) => {
  // console.log(props.post);

  const { user } = useContext(AuthContext);

  const {
    body,
    createdAt,
    id,
    username,
    likeCount,
    commentCount,
    likes,
  } = props.post;

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <LikeButton user={user} post={{ id, likes, likeCount }} />
          <PopUp content="comment on post">
            <Button as="div" labelPosition="right">
              <Button color="blue" basic as={Link} to={`/posts/${id}`}>
                <Icon name="comments" />
              </Button>
              <Label basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          </PopUp>
          {user && user.username === username && <DeleteButton postId={id} />}
        </Card.Content>
      </Card>
    </>
  );
};

export default PostCard;
