require("@nomicfoundation/hardhat-toolbox")

const RINKEBY_RPC_URL = "https://google.com"
const PRIVATE_KEY =
    "12345678911234567892123456789312123456789112345678921234567893121111"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            /*accounts: [we dont need any because hardhat node gives us 10]*/
            chainId: 31337,
        },
        /*rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },*/
    },
}
