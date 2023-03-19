require("dotenv").config({ path: ".env" });

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks:{
 alfajores: {
 url: "https://alfajores-forno.celo-testnet.org",
 accounts: [process.env.PRIVATE_KEY],
 chainId: 44787,
 }
}
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
