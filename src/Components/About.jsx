// get -for getting data
// post - for adding data
// delete -foe deleting data
// put-patch - update
import React, { useEffect, useState } from "react";
import Promise from "./../../node_modules/lodash-es/_Promise";
import axios from "axios";

export default function About() {
  const [posts, setPosts] = useState([]);
  const product = [
    {
      id: 1,
      name: "burger",
      price: 30,
    },
    {
      id: 2,
      name: "burger",
      price: 30,
    },
    {
      id: 3,
      name: "burger",
      price: 30,
    },
  ];
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
      // console.log(data);
    };

    fetchPosts();
  }, []);
  const deletePosts = async (id) => {
    console.log(id);

    const { data } = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts",
      id
    );
  };
  // const addPosts = async (newPost) => {
  //   console.log(id);

  //   const { data } = await axios.post(
  //     "https://jsonplaceholder.typicode.com/posts",
  //     newPost
  //   );
  // };
  // const updatePosts = async (newPost) => {
  //   console.log(id);

  //   const { data } = await axios.patch(
  //     "https://jsonplaceholder.typicode.com/posts",
  //     newData
  //   );
  // };

  return (
    <>
      {posts.map((post) => (
        <div className="p-2 bg-info m-2 shadow shadow-lg" key={post.id}>
          {post.title}
          <button onClick={() => deletePosts(post.id)}>-</button>

          <button>+</button>
        </div>
      ))}
    </>
  );
}
