import React from 'react';
import PropTypes from 'prop-types';

class PostListItem extends React.Component{
    
    shouldComponentUpdate(nextProps) {        
        return (
            this.props.title !== nextProps.title 
            || this.props.body !== nextProps.body 
        )        
    }

    render(){
        const {title, body} = this.props;
        return(
            <li>
                <h3>{title}</h3>
                <p>{body}</p>
            </li>
        )
    }
}

PostListItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
}

export default PostListItem;