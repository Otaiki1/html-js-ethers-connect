async function connect(){
    if(typeof window.ethereum != undefined){
        await window.ethereum.request({method: "eth_requestAccounts"});
        document.getElementById("connect-button").innerHTML = "Connected"
    }
}

const{ ethers } = require("ethers");