// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./AIMintNFT.sol";

contract AIMintFactory {
    address public immutable implementation;

    event NFTCloned(address indexed cloneAddress);

    constructor() {
        implementation = address(new AIMintNFT());
    }

    function cloneNFT(string memory name, string memory symbol, string memory collectionId, address recipient, uint256 maxSupply) external returns (address) {
        address clone = Clones.clone(implementation);
        AIMintNFT(clone).initialize(name, symbol, collectionId, recipient, maxSupply);
        emit NFTCloned(clone);
        return clone;
    }
}