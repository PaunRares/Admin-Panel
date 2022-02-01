import React from 'react';
import './PostItem.css'

function PostItem(props) {
    const {title, body} = props;
    return (
        <div className="PostItem d-flex flex-column align-items-start p-3">
            <h3 className="fs-5 m-2 fw-bold mb-3">{title}</h3>
            <p className="ms-5">{body}</p>
        </div>
    );
}

export default PostItem;
