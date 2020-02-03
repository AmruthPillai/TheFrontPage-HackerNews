import React from 'react';
import './Post.css';

import CaretUp from '../../assets/images/caret-up.png';
import CaretUpFilled from '../../assets/images/caret-up-filled.png';
import HideIcon from '../../assets/images/hide.png';
import CommentIcon from '../../assets/images/comment.png';

function Post({ upvoted = false }) {
  return (
    <div id="Post" className="d-flex align-items-center">
      <div className="upvote d-flex flex-column justify-content-center align-items-center">
        {
          upvoted ? <img className="img-fluid" src={CaretUpFilled} alt="Upvoted" /> : <img className="img-fluid" src={CaretUp} alt="Upvoted" />
        }
        <span className="font-weight-bold">218</span>
      </div>

      <div className="meta ml-4">
        <h4 className="mb-1 font-weight-bold">
          Old CSS, New CSS
          {' '}
          <small>(eeve.ee)</small>
        </h4>
        <h6 className="mb-0">by culturedsystems</h6>
      </div>

      <div className="actions ml-auto d-flex align-items-center">
        <div className="comment pr-5 d-flex flex-column align-items-center">
          <img className="img-fluid" src={CommentIcon} alt="Comment on Post" />
          <span className="font-weight-bold">23</span>
        </div>

        <div className="hide pr-5">
          <img className="img-fluid" src={HideIcon} alt="Hide Post" />
        </div>

        <div className="timestamp">4 hours ago</div>
      </div>
    </div>
  );
}

export default Post;
