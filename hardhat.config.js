require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  contracts: {
    paths: ["contracts"],
    artifactsDir: "artifacts",
    // Add the following lines to compile multiple solidity files
    // relative to the contracts folder
    glob: [
      "hw_2_Challenge_Engine.sol",
      "hw_2_Challenge_Game.sol"
    ]
  }
};

