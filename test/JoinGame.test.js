const assert = require('chai').assert
const GMR = artifacts.require("GMR")
require('chai').use(require('chai-as-promised')).should()
let gmr1
beforeEach(async () => {
    // gmr1 = await GMR.deployed()
    // console.log("gmr1 is deloyed")
    // re-deploy
    console.log("re-deploy")
    gmr1 = await GMR.new();
    console.log("deloyed success")
})

contract("GMR test", (accounts) => {
    it("start test", () => {
        console.log("account=", accounts[0])
        assert.ok(accounts[0])
        //console.log(gmr1)
    })
    it("contract has an address", () => {
        console.log(gmr1.address)
        assert.ok(gmr1.address)
    })
    it("check gmr balance", async () => {
        const remaining = await gmr1.getBalance();
        console.log("value=", remaining);
    })
    it("player1 enter game(second account)", async () => {
        await gmr1.enterGame({
            from: accounts[1],
            value: web3.utils.toWei("0.2", "ether")
        })
        const players = await gmr1.getCurrentPlayers();
        console.log(players)
        assert.equal(accounts[1], players[0]);
        assert.equal(1, players.length);
    })
    it("player2, 3, 4", async () => {
        const joined = [accounts[2], accounts[3], accounts[4]]
        for (let player of joined) {
            await gmr1.enterGame({
                from: player,
                value: web3.utils.toWei("0.3", "ether")
            })
        }
        const players = await gmr1.getCurrentPlayers();
        console.log(players);
        console.log(joined[0])
        assert.equal(joined[0], players[0])
        assert.equal(joined[1], players[1])
        assert.equal(joined[2], players[2])
        assert.equal(3, players.length)

    })

})