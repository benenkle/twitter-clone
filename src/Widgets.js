import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetWrapper">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1618360595828576257"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="_abdelnflesh"
          options={{ height: 400 }}
        />
        <TwitterShareButton url={"https://github.com/benenkle"} options={{text:"Coding is a real fun thing!", via:"_abdelnflesh"}} />
      </div>
    </div>
  );
};

export default Widgets;
