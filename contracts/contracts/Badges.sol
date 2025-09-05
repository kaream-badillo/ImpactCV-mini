//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Badges is ERC1155{
    constructor(string memory baseURI) ERC1155(baseURI){}

    function mintSelf(uint256 id, uint256 amount) external{
        _mint(msg.sender, id, amount,"");
    }
}
