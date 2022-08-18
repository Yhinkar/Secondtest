require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");
async function main() {
    
    const CONTRACT_ADDRESS = "0x779c3275001e72259d0655CCCDc059e92D0cE567";

  

 const amount = ethers.utils.parseEther("0.0001");
 

 
 const bank= await ethers.getContractAt("IBankSimulation", CONTRACT_ADDRESS)

 const contractBal = await bank.Deposit();
 console.log("Our contract balance is", contractBal);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});