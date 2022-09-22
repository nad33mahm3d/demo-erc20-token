/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-truffle5');
require('solidity-coverage');
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    matic: {
      url: process.env.MATIC_URL,
      accounts: [process.env.MATIC_PRIVATE_KEY]
    },
    hardhat: {

    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}