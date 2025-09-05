import {ethers} from "hardhat";

async function main(){
    const badges=await hre.ethers.deployContract("Badges", ["ipfs://badge-meta/{id}.json"]);
    await badges.waitForDeployment();
    console.log("Badges deployed:", await badges.getAddress());
}
main().catch((e)=> {
    console.error(e); 
    process.exit(1)
});