// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0; //solidity compiler version

contract SimpleStorage {
    uint256 private storedValue; //variable 

    function setValue(uint256 newValue) public {
        storedValue = newValue; //setting the value of storedvalue variable 
    }

    function getValue() public view returns (uint256) {
        return storedValue; //getting the value of storedvalue variable
    }
}
