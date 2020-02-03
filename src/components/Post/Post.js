import React from 'react';
import moment from 'moment';
import './Post.css';

// import CaretUp from '../../assets/images/caret-up.png';
import CaretUpFilled from '../../assets/images/caret-up-filled.png';
import HideIcon from '../../assets/images/hide.png';
import CommentIcon from '../../assets/images/comment.png';

function domainFromUrl(url) {
  let result;
  let match;
  // eslint-disable-next-line no-cond-assign
  if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im)) {
    // eslint-disable-next-line prefer-destructuring
    result = match[1];
    // eslint-disable-next-line no-cond-assign
    if (match = result.match(/^[^.]+\.(.+\..+)$/)) {
      // eslint-disable-next-line prefer-destructuring
      result = match[1];
    }
  }
  return result;
}

function Post({ post }) {
  return (
    <div id="Post" className="d-flex align-items-center">
      <div className="upvote cursor-pointer d-flex flex-column justify-content-center align-items-center">
        <img className="img-fluid" src={CaretUpFilled} alt="Upvoted" />
        <span className="font-weight-bold">{post.score}</span>
      </div>

      <div className="meta ml-4">
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <h4 className="mb-1 font-weight-bold">
            {post.title}
            {' '}
            <small>
              (
              {domainFromUrl(post.url)}
              )
            </small>
          </h4>
        </a>
        <h6 className="mb-0">
          by
          {' '}
          {post.by}
        </h6>
      </div>

      <div className="actions ml-auto d-flex align-items-center">
        <div className="comment cursor-pointer pr-5 d-flex flex-column align-items-center">
          <img className="img-fluid" src={CommentIcon} alt="Comment on Post" />
          <span className="font-weight-bold">{post.descendants}</span>
        </div>

        <div className="hide cursor-pointer pr-5">
          <img className="img-fluid" src={HideIcon} alt="Hide Post" />
        </div>

        <div className="timestamp text-right">{moment.unix(post.time).fromNow()}</div>
      </div>
    </div>
  );
}

export default Post;
