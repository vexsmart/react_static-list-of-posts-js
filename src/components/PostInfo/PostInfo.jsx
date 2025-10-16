import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post, users, comments }) => {
  const postComments = comments.filter(comment => comment.postId === post.id);
  const relatedUser = users.find(user => user.id === post.userId);
  let commentsList = <CommentList comments={postComments} />;

  if (postComments.length === 0) {
    commentsList = (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={relatedUser} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {commentsList}
    </div>
  );
};
