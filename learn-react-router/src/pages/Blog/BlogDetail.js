/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const params = useParams(); // lấy ra id đã gửi lên params
  const [post, setPost] = useState();
  console.log(params.id);
  useEffect(() => {
    const fetchApi = async (req, res) => {
      await fetch(`https://dummyjson.com/posts/${params.id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    };
    fetchApi();
  }, []);
  return (
    <>
      {post && (
        <>
          <h3>{post.title}</h3>

          <div>{post.body}</div>
        </>
      )}
    </>
  );
}

export default BlogDetail;
