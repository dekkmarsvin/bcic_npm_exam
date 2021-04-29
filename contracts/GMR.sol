pragma solidity ^0.5.16;
contract GMR {
    address public manager;
    address payable[] public players;
    constructor() public {
        manager = msg.sender;
    }
    function enterGame() public payable {
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }
    function chooseByTime() private view returns (uint) {
        uint result = now % players.length;
        return result;
    }
    function getBalance()public view returns(uint256) {
        return address(this).balance;
    }
    function payMoneyToPlayer() public restricted {
        
        uint256 winnerId = chooseByTime();
        players[winnerId].transfer(address(this).balance);
        players = new address payable[](0);
    }
    modifier restricted() {
        require(msg.sender==manager);
        _;
    }
    function getCurrentPlayers() public view returns (address payable[] memory) {
        return players;
    }
}