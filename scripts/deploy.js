async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying Demo Token contracts with the account:", deployer.address);
  
    console.log("Account Balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("DemoToken");
    const token = await Token.deploy();
  
    console.log("Token Contract Address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });