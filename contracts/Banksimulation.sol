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