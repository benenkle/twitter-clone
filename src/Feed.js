import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let postsArr = [];
      QuerySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            avatar={post.avatar}
            displayName={post.displayName}
            image={post.image}
            text={post.text}
            username={post.username}
            verified={post.verified}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
