import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import "./App.css";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from './config/config';

const App = async () => {
  await Moralis.start({ apiKey: MORALIS_APP_ID });
  const { web3, enableWeb3, chainId, isWeb3Enabled } = useMoralis();
  // const { isAuthenticated, Moralis } = useMoralis();

  return (
    <>
      {web3 ?
        (
          <div className="page">
            <div className="sideBar">
              <Sidebar />
              <div
              // className="logout"
              // onClick={() => {
              //   Moralis.User.logOut().then(() => {
              //     window.location.reload();
              //   });
              // }}
              >
                Logout
              </div>
            </div>
            <div className="mainWindow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            <div className="rightBar">
              <Rightbar />
            </div>
          </div>
        ) : (
          <div className="loginPage">
            <Icon fill="#ffffff" size={40} svg="twitter" />
            <ConnectButton />
          </div>

        )}
    </>
  );
};

export default App;
