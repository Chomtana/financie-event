// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

string constant BASE_URL = "https://ai-mint-metadata.chom.dev/images";

contract AIMintNFT is Initializable, ERC721Upgradeable {
    uint256 private _nextTokenId = 1;
    uint256 private _maxSupply;
    string public collectionId;

    function initialize(
        string memory name,
        string memory symbol,
        string memory _collectionId,
        address recipient,
        uint256 maxSupply
    ) external initializer {
        __ERC721_init(name, symbol);
        _maxSupply = maxSupply;
        collectionId = _collectionId;

        for (uint256 i = 0; i < maxSupply; i++) {
            _safeMint(recipient, _nextTokenId);
            _nextTokenId++;
        }
    }

    function _baseURI() internal view override returns (string memory) {
        return BASE_URL;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        
        string memory base = _baseURI();
        return bytes(base).length > 0 ? string(abi.encodePacked(base, "/", collectionId, "-", Strings.toString(tokenId), ".json")) : "";
    }
}