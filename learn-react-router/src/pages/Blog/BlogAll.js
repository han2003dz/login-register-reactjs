import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async (req, res) => {
      await fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setData(data.posts);
        });
    };
    fetchApi();
  }, []);
  return (
    <>
      <h2>Trang tin tức</h2>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Link to={"/blog/" + item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default BlogAll;
