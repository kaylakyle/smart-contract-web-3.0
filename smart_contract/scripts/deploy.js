import { ethers } from "ethers";
import fs from "fs";

const main = async () => {
  // Connect to Hardhat local node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Use the first private key from the node output
  const signer = new ethers.Wallet(
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    provider
  );

  // Load compiled contract
  const contractJson = JSON.parse(
    fs.readFileSync("./artifacts/contracts/Transactions.sol/Transactions.json", "utf8")
  );

  // Create contract factory with signer
  const factory = new ethers.ContractFactory(
    contractJson.abi,
    contractJson.bytecode,
    signer
  );

  // Deploy
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  console.log("Transactions address:", contract.target);
};

main().catch(console.error);
