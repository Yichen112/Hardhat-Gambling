require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  contracts: {
    paths: ["contracts"],
    artifactsDir: "artifacts",
    // Add the following lines to compile multiple solidity files
    // relative to the contracts folder
    glob: [
      "Engine.sol",
      "Game.sol"
    ]
  }
};
