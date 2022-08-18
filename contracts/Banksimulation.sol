//SPDX-License-Identifier:MIT
pragma solidity ^0.8.1;
  
//A simple smart contract simulating banking transactions
contract BankSimulation{

    address payable Customer; 
    bool _switch=false; 
    constructor() {	
        Customer ==msg.sender; 
    }
   modifier onlyOwner(){
       require(Customer==msg.sender,"Chief! You're not owner"); 
        _; 
    }
    function Deposit() public payable{
    }
    function withDrawFunds(uint _amount) public onlyOwner{
        require(msg.sender != address(0));
        if(Customer.send(_amount)){
            _switch=true;
        }
        else {
            _switch=false;  
        }
    }
	//to retrieve fund
    function retrieveFunds() view public onlyOwner returns(uint ){
        return address(this).balance;
    }
    
    function transferFunds(address payable recipient,uint _amount) public onlyOwner{
        recipient.transfer(_amount);
    }

}

//=============================deployed contract================================/// @title A title that should describe the contract/interface
// Contract address=====0x779c3275001e72259d0655CCCDc059e92D0cE567==========
// Transaction receipt=== 0x3564a44fa772f456bfa48b586e34c17526098d39456216bc6bf63133e8b80bda