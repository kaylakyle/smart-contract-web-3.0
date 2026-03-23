import { ethers } from "ethers";
import fs from "fs";

const main = async () => {
  // Connect to local Hardhat node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = provider.getSigner(0);

  // Load compiled contract JSON
  const contractJson = JSON.parse(
    fs.readFileSync("./artifacts/contracts/Transactions.sol/Transactions.json", "utf8")
  );

  // Create contract factory
  const factory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, signer);

  // Deploy contract
  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("Transactions address:", contract.target);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
