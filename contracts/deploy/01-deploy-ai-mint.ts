import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMyNFTFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying AIMintFactory contract with deployer:", deployer);

  await deploy("AIMintFactory", {
    from: deployer,
    log: true,
  });

  console.log("AIMintFactory deployed");
};

export default deployMyNFTFactory;
deployMyNFTFactory.tags = ["AIMintFactory"];