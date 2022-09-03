import React from "react";
import { Icon } from "web3uikit";
import { defaultImgs } from "../defaultimgs";
import './TweetInFeed.css';

const TweetInFeed = () => {

  return (
    <>
      <div className="feedTweet">
        <img src={defaultImgs[0]} alt="" className="profilePic"></img>
        <div className="completeTweet">
          <div className="who">
            Julian
            <div className="accWhen">0x42..314 - 1h</div>
          </div>
        </div>
        <div className="tweetContent">
          Nice day golfing today
          {/* <img src={golf} className="tweetImg"></img> */}
        </div>
        <div className="interactions">
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="star" />
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="matic" />
          </div>
        </div>

      </div>
      <div className="feedTweet"></div>
    </>
  );
};

export default TweetInFeed;

