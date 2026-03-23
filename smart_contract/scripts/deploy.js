import { ethers } from "ethers";
import fs from "fs";

// URL of your running Hardhat node
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const main = async () => {
  // Get the first signer from the local node
  const signer = provider.getSigner(0);

  // Load compiled contract JSON
  const contractJson = JSON.parse(
    fs.readFileSync("./artifacts/contracts/Transactions.sol/Transactions.json", "utf8")
  );

  // Create a contract factory
  const factory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, signer);

  // Deploy the contract
  const contract = await factory.deploy();

  // Wait for deployment to be mined
  await contract.waitForDeployment();

  console.log("Transactions deployed at:", contract.target); // ethers v6 uses 'target'
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
