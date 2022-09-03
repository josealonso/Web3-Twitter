import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "web3uikit";
import './Settings.css';
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp3.png";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";
import { defaultImgs } from "../defaultimgs";
import { useMoralis } from "react-moralis";

const Settings = () => {

  const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5];
  const [selectedPFP, setSelectedPFP] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [username, setUserName] = useState();
  const [bio, setBio] = useState();
  const { Moralis } = useMoralis();

  const onBannerClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  const saveEdits = async () => {
    // const User = Moralis.Object.extend("_User");
    // const query = new Moralis.Query(User);
    // const myDetails = await query.first();

    // if (bio) {
    //   myDetails.set("bio", bio);
    // }

    // if (username) {
    //   myDetails.set("username", username);
    // }

    // if (theFile) {
    //   const data = theFile;
    //   const file = new Moralis.File(data.name, data);
    //   await file.saveIPFS();
    //   myDetails.set("banner", file.ipfs());
    // }

    // await myDetails.save();
    // window.location.reload();
  }

  return (
    <>
      <div className="pageIdentity">Settings</div>
      <div className="settingsPage">
        <Input
          label="Name"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e) => setBio(e.target.value)}
        />

        <div className="pfp">
          Profile Image (Your NFTs)

          <div className="pfpOptions">
            {pfps.map((e, i) => {
              return (
                <>
                  <img
                    src={e} alt=""
                    className={
                      selectedPFP === e ? "pfpOptionsSelected" : "pfpOption"
                    }
                    onClick={() => { setSelectedPFP(pfps[i]); }}
                  ></img>
                </>
              )
            })}

          </div>
        </div>

        <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            <img
              src={selectedFile}
              alt=""
              onClick={onBannerClick}
              className="banner"
            ></img>
            <input
              type="file"
              name="file"
              ref={inputFile}
              onChange={changeHandler}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>
      </div>

    </>
  );
};

export default Settings;

