//import styles from '../Posts.module.css';

async function getPost(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function PostPage({ params }: any) {
  // Fetch the post data
  const post = await getPost(params.id);

  // Mock data for the author, likes, and comments
  const authorName = 'John Doe';
  const authorAvatar = 'avatar-url.jpg'; // Provide a URL to an avatar image
  const likes = 42;
  const comments = 12;

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 mt-4">
      {/* Post header */}
      <div className="flex items-center mb-4">
        <img
          src={authorAvatar}
          alt="Author Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold text-lg">{authorName}</p>
          <p className="text-gray-600 text-sm">{post.created}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="text-lg">{post.content}</p>

      {/* Post title */}
      <h1 className="text-2xl font-semibold mt-2">{post.title}</h1>

      {/* Like, Comment, Share buttons */}
      <div className="flex items-center mt-4">
        <div className="flex items-center mr-4">
          <p className="text-gray-600">{likes} Likes</p>
        </div>
        <div className="flex items-center mr-4">
          <p className="text-gray-600">{comments} Comments</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600">Share</p>
        </div>
      </div>
    </div>
  );
}