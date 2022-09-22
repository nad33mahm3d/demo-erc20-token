// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DemoToken is ERC20, Ownable {

    /** @dev Empty contructor method using parent constructor to set the values 
     * for {name} and {symbol}.
     */
    constructor () ERC20("DemoCrypto", "DEMOT") {
        mint(owner(), 5000);
    }
    
    /** @dev Public mint method to create or mint tokens amount to any acccount
     * Requirements: 
     * - `account` cannot be the zero address.
     * - `onlyOwner` only contract owner can run this method.
     */
    function mint(address account, uint numOfTokens) public onlyOwner returns (bool) {
        uint256 mintSupply = numOfTokens * (10 ** decimals());
        _mint(account, mintSupply);
        return true;
    }
}