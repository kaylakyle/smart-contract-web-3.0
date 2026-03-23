import { ethers } from "ethers";

async function main() {
  // Connect to local Hardhat node
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Get accounts (signers)
  const signers = await provider.listAccounts();

  // Print each account address
  signers.forEach((account, i) => {
    console.log(`Account #${i}: ${account}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
