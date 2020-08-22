import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Grid, Transition } from 'semantic-ui-react'

import { AuthContext } from '../context/Auth'
import PostCard from './PostCard'
import PostForm from './PostForm'
import { FETCH_POSTS_QUERY } from '../util/GraphQL'

const Home = () => {

    const { user } = useContext(AuthContext)

    const { loading, data } =  useQuery(FETCH_POSTS_QUERY)

    let posts = data === undefined ? [] : data.getPosts
    
    console.log(posts);

    return (
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recents Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}

          {loading ? (
            <h1>Loading Posts</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    );
}; 

export default Home;