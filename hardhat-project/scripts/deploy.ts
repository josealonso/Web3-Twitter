import hre, { ethers } from "hardhat";

async function main() {

  const WAITING_UNTIL_DEPLOYMENT = 40000;    // in miliseconds
  const Tweets = await ethers.getContractFactory("tweets");
  const tweets = await Tweets.deploy();
  await tweets.deployed();

  console.log("tweets contract deployed to:", tweets.address);

  // Verify the contract
  const waitFor = (delay: number) =>
    new Promise((resolve) =>
      setTimeout(() => {
        hre.run("verify:verify", {
          address: tweets.address,
        });
      }, delay)
    );
  await waitFor(WAITING_UNTIL_DEPLOYMENT);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

