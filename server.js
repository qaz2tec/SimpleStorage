const { ethers } = require("ethers"); //importing ether.js library

const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/9ZaoXaC82eWjtj4GF_kgyfUqoioinVnP`); // connecting to alchemy node to interact with our smart contract on blockchain

const contractABI = [
 
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}

];  // when contract is compiled two files are created - 1. ABI 2.bytecode 
// ABI is required to interact with deployed smart contract 
//byte code is the smart contract code which is deployed on the blockchain

const contractAddress = '0xbd33E08956734ACDB312D109D86df6392B072240';


const privateKey = '0x9902d7e0435bf5b372eeecbf86fbdc95a34ef6f149b9fe17c9573b725f95f3cc'; // account's private key to initialize the transaction 

async function main() {
  try {
    //ether.js 
    const wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    
    // Get the current value from the smart contract
    const value = await contract.getValue();
    console.log('Current value:', value.toNumber());

    // Set a new value in the smart contract
    const newValue = 42;
    const tx = await contract.setValue(newValue);
    await tx.wait(); // Wait for the transaction to be mined
    console.log('Transaction Hash:', tx.hash);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
