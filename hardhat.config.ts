require("@nomicfoundation/hardhat-toolbox");
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@openzeppelin/hardhat-upgrades');
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/pgFWE_N6Huqe256KzefCht2rZV2zTlVa"
      },
    },
   rinkeby: {
     url: process.env.URL,
      //@ts-ignore
     accounts: process.env.KEY,
    },
  },
};
export default config;
