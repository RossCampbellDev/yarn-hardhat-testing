const { ethers } = require("hardhat")

async function main() {
    // need to use a contractfactory
    // automatically uses the ABI and bytecode to make a deployable object
    const RossToken = await ethers.getContractFactory("RossToken")

    // create a transaction that deploys the contract.  this essentially calls the constructor in our solidity code
    //const myContract = await RossToken.deploy("RossToken", "RT")

    // note:  the transaction above may not be immediately mined, so this returns a promise
    // we AWAIT so that we don't progress until we know it's worked or has errored
    //await myContract.deployed()

    // interact with an already-deployed contract
    const myContract = await RossToken.attach(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    )
    //const myContract = await ethers.getContract("RossToken")

    // ethers.getContractAt lets us combine the getContractFactory and attach functions into one line
    // attach seems more reliable.  cant find getcontractat in the docs
    //const myContract = await ethers.getContractAt("RossToken", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")

    console.log("Minting...")
    await myContract.mint()

    console.log(`Number of owners: ${await myContract.ownerCount()}`)
    console.log(`First Owner: ${await myContract.owners(0)}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
