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
     url: "https://eth-rinkeby.alchemyapi.io/v2/UM3dl6sgo5QF_hy91pIz4j619Xci05ZC",
      //@ts-ignore
     accounts: ["45d3590f57a8d81557198b8f0d17132cee3d704d8886554bdca04bcff5b404a4"],
    },
  },
};
export default config;
