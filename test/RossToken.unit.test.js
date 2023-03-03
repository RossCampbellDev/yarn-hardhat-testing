const { assert } = require("chai")

describe("RossToken", function () {
    let myContract
    beforeEach(async () => {
        const RossToken = await ethers.getContractFactory("RossToken")
        myContract = await RossToken.deploy("RossToken", "RT")
        await myContract.deployed()
    })

    describe("Constructor", function () {
        it("mints a token and a new owner", async () => {
            await myContract.mint()
            const response = await myContract.ownerCount()
            assert.greaterthan(response, 1)
        })
    })
})
