import hre from "hardhat";

const main = async () => {
  // Get the contract factory
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  
  // Deploy the contract
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for deployment to finish
  await transactionsContract.deployed();

  console.log("Transactions deployed at:", transactionsContract.target || transactionsContract.address);
};

// Wrapper to run main and handle errors
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
