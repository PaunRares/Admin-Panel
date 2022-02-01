import React from 'react';
import PostItem from './PostItem'

function PostList(props) {
    const {posts} = props
  return (
        <div>
            <h2 className="fst-italic my-5">Lista Postari</h2>
            <div className="d-flex flex-column align-items-center">
                {
                    posts.map(post => {
                        return (
                            <PostItem
                                title = {post.title}
                                body = {post.body}
                                key = {post.id}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PostList;
