import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/ui/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://codebuddy.review/posts");
        const data = await res.json();
        console.log(data.data);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
        alert("Something Went Wrong");
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 && posts.map((post) => <PostCard key={post.id} {...post} />)}
      </div>
    </div>
  );
};

export default Posts;
