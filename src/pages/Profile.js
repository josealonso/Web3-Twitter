import React from "react";
import { Link } from "react-router-dom";
import TweetInFeed from "../components/TweetInFeed";
import { defaultImgs } from "../defaultimgs";
import './Profile.css';


const Profile = () => {

  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" alt="" src={defaultImgs[1]}>Home</img>
      <div className="pfpContainer">
        <img className="profilePFP" alt="" src={defaultImgs[0]}></img>
        <div className="profileName">Julian</div>
        <div className="profileWallet">0x42..314</div>
        <Link to="/settings">
          <div className="profileEdit">Edit profile</div>
        </Link>
        <div className="profileBio">
          Just one more developer
        </div>
        <div className="profileTabs">
          <div className="profileTab">
            Your tweets
          </div>
        </div>
      </div>
      <TweetInFeed profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

