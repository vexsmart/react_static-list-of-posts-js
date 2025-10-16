import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} comments={comments} users={users} post={post} />
      ))}
    </div>
  );
};
