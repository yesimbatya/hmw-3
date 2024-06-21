import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
