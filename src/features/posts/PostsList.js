import React from 'react';
// read state data from redux store
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function PostsList(props) {
    const posts = useSelector(state => state.posts)
    // const renderedPosts = posts.map(post => (
    //     <article className='post-excerpt' key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p className='post-content'>{post.content.substring(0,100)}</p>
    //     </article>
    // ))
    // console.log(useSelector(state => state));
    return (
      <section className="posts-list">
        <h2>Posts</h2>
        {/* {renderedPosts} */}
        {posts.map((post) => (
          <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className='button muted-button'>View Post</Link>
          </article>
        ))}
      </section>
    )
}

export default PostsList;