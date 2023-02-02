import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const [tweetImg, setTweetImg] = useState("");
  const submitTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      avatar:
        "https://imgs.search.brave.com/TEFgBboItW_SUb8ThnFopwzmi3jQ5K7-1LiauJqikig/rs:fit:944:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNTU3MjAxLnBu/Zw",
      dispalyName: "Abdel Ben",
      username: "_abdelnflesh",
      verified: true,
      text: tweet,
      image: tweetImg,
    });
    setTweet("");
    setTweetImg("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://imgs.search.brave.com/bLzhBk4U7W6KR2kdngsDh9n8n3fimo0Lb6Pt1iVP-O0/rs:fit:400:400:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/bGFkeWdhZ2EvaW1h/Z2VzLzUvNWQvVHdp/dHRlcl9lZ2dfYXZh/dGFyLmpwZy9yZXZp/c2lvbi9sYXRlc3Q_/Y2I9MjAxMzA3MDUx/NTE4NTg" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
          className="tweetBox__imgInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          type="submit"
          className="tweetBox__tweetBtn"
          onClick={submitTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
