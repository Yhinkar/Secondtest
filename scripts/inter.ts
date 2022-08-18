import { ethers } from "hardhat";

async function main() {
  const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const BNBAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOut = 2000;

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDCHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
  await helpers.impersonateAccount(USDCHolder);
  const impersonatedSigner = await ethers.getSigner(USDCHolder);

  const USDC= await ethers.getContractAt(
    "IERC20",
    USDCAddress,
    impersonatedSigner
  );
  const BNB= await ethers.getContractAt("IERC20", BNBAddress);
  const ROUTER = await ethers.getContractAt(
    "IUniswap",
    UNIRouter,
    impersonatedSigner
  );
  await USDC.approve(UNIRouter, amountOut);
    const usdtBal = await USDC.balanceOf(USDCHolder);
    const daiBal = await BNB.balanceOf(USDCHolder);

    console.log("balance before swap", usdtBal);

  await ROUTER.swapExactTokensForTokens(
    amountOut,
    3000,
    [USDCAddress, BNBAddress],
    USDCHolder,
    1670674129
  );

    const usdcBalAfter = await USDC.balanceOf(USDCHolder);
    const BNBBalAfter = await BNB.balanceOf(USDCHolder);

    console.log("balance after swap=========>", usdcBalAfter, BNBBalAfter);

    //..................................................................................
    //const tokenAddress = 

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });