// scripts/showAccounts.js
import { ethers } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();

  signers.forEach((signer, i) => {
    console.log(`Account #${i}: ${signer.address}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
