import React from 'react';
import PostListItem from './PostListItem';
import PropTypes from 'prop-types';

function PostList({posts}) {
    return(
        <ul>
            {posts.map(item => <PostListItem 
                key= {item.id} 
                title= {item.title} 
                body= {item.body} 
            />)}
        </ul>
    )
}

PostList.propTypes = {
    posts: PropTypes.array,
}
export default PostList;