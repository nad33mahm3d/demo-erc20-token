# Description
This repository contain Demo token ERC20 smart contract code.

### Code Fold Structure
```
├── artifacts           # All compiled files of contracts (created after code compile)
├── cache               # Contains project cache (created after code compile)
├── contracts           # Contains smart contract code
|   └── DemoToken.sol    # Demo token smart contract
├── coverage            # Test code coverage report (created after run test coverage)
├── scripts             # Contains all scripts like deployment
|   └── deploy.js       # Contract deployment script
├── test                # Contains all test case suits
|   └── DemoToken.js     # Demo token test cases for hardhat
└── .env-example        # Environment variables example file
└── .gitignore          # Use for git ignore files
└── coverage.json       # Test code coverage report (created after run test coverage)
└── .hardhat.config.js  # Hardhat configuration file
└── .package-lock.json  # Node package manager installion tree
└── .package.json       # Node packages list used by project
└── README.md           # Project readme file

```    
## Prerequisites Tools
- [NodeJS](https://nodejs.org/en/)
- [NPM & NPX](https://www.npmjs.com/)
- [HARDHAT](https://hardhat.org/docs)
- [SOLIDITY](https://docs.soliditylang.org/)

## Quick start
First of all install all prerequisites tools to your system to setup this project successfully.    
### Clone repository

```sh
git clone https://github.com/nad33mahm3d/demo-erc20-token.git    
```
### Create .env file

```sh
cd demo-erc20-token
cp .env-example .env
```
### Enter required data in the `.env` file

```sh
MATIC_URL= add polygon network url here
MATIC_PRIVATE_KEY= add polygon network private key here
POLYGONSCAN_API_KEY= add polygon scan api key here
```
### Install node packages

```sh
npm install    
```

### Compile code using hardhat

```sh
npx hardhat compile
```
## Deployment & Run
### Run hardhat node
Once installed and compiled, let's run Hardhat's testing network

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to deploy your contract
```sh
npx hardhat run scripts/deploy.js --network localhost
```

To deploy the project other network please read [deploying to a live network](https://hardhat.org/tutorial/deploying-to-a-live-network) using hardhat

#### Add Network To Hardhat Config
You can add live networks to hardhat config `hardhat.config.js` file like below
```sh
module.exports = {
  defaultNetwork: "matic",
  networks: {
    matic: {
      url: process.env.MATIC_URL,
      accounts: [process.env.MATIC_PRIVATE_KEY]
    },
    hardhat: {

    }
  },
```
once you add any network you can deploy the smart contract using command
```sh
npx hardhat run scripts/deploy.js --network <network-name>

e.g for matic
npx hardhat run scripts/deploy.js --network matic
```
### Post Deployment
After successfully deployement you will get contract address of token along with account balance as below
```sh
Deploying DemoToken contracts with the account: 0xe05DA62XXXXXXXXXXXXXXXXX086adC445

Account Balance: 4000000000000162

Token Contract Address: 0x6a6689dXXXXXXXXXXXXXXXXXXXXXX19
```

## Contract Verify
After deployment you need to verify the contract using below command

```sh
npx hardhat verify <Smart Contract Address>
e.g
npx hardhat verify 0x6a6689dXXXXXXXXXXXXXXXXXXXXXX19
```
## Testing
Run Test cases using hardhat. First you need to change `defaultNework` to `hardhat` or you can pass network with flag `--network hardhat` in command

Run Test Cases Using Default Network
```sh
npx hardhat test 
```

Run Test Cases Using Network Flag
```sh
npx hardhat test --network hardhat
```

## License
For open source projects, say how it is licensed.

