import { ethers } from "hardhat";

async function main() {

  const amount = ethers.utils.parseEther("1");
  const Bank = await ethers.getContractFactory(
    "BankSimulation"
  );
  const bank = await Bank.deploy();
  await bank.deployed();

  console.log("Bank deployed to: ", bank.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });