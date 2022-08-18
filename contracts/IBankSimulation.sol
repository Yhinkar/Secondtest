//SPDX-License-Identifier:MIT
pragma solidity ^0.8.1;

interface IBankSimulation {
    function Deposit()  external payable;
    function withDrawFunds(uint _amount) external;
    function retrieveFunds() view external returns(uint );

}



