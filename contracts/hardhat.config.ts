import { config as dotenv } from "dotenv"
dotenv()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const accounts = [
  process.env.PRIVATE_KEY!
]

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },
  networks: {
    saga_guildpay: {
      url: 'https://guildpay-2713973266287000-1.jsonrpc.sagarpc.io',
      accounts,
    },
    bnb_testnet: {
      url: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
      accounts,
    },
    op_sepolia: {
      url: 'https://sepolia.optimism.io',
      accounts,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
