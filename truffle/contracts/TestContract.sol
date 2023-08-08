// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract TestContract {
  address public owner;
  string private testString = "testString";

  constructor() public {
    owner = msg.sender;
  }

  function getString() public view returns (string memory) {
    return testString;
  }

  function setString(string memory _testString) public {
    testString = _testString;
  }
}
