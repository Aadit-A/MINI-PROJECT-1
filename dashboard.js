const welcome = document.getElementById("welcome");

const amount = document.getElementById("amount");

const fromSelect = document.getElementById("fromSelect");

const toSelect = document.getElementById("toSelect");

const convertBtn = document.getElementById("convertBtn");

const saveBtn = document.getElementById("saveBtn");

const result = document.getElementById("result");

const favorites = document.getElementById("favorites");

const logoutBtn = document.getElementById("logoutBtn");





const assets = [

    {
        id:"bitcoin",
        name:"Bitcoin (BTC)",
        type:"crypto"
    },

    {
        id:"ethereum",
        name:"Ethereum (ETH)",
        type:"crypto"
    },

    {
        id:"tether",
        name:"Tether (USDT)",
        type:"crypto"
    },

    {
        id:"binancecoin",
        name:"BNB",
        type:"crypto"
    },

    {
        id:"solana",
        name:"Solana (SOL)",
        type:"crypto"
    },

    {
        id:"ripple",
        name:"XRP",
        type:"crypto"
    },

    {
        id:"dogecoin",
        name:"Dogecoin (DOGE)",
        type:"crypto"
    },

    {
        id:"cardano",
        name:"Cardano (ADA)",
        type:"crypto"
    },

    {
        id:"usd",
        name:"US Dollar (USD)",
        type:"currency"
    },

    {
        id:"inr",
        name:"Indian Rupee (INR)",
        type:"currency"
    },

    {
        id:"eur",
        name:"Euro (EUR)",
        type:"currency"
    },

    {
        id:"gbp",
        name:"British Pound (GBP)",
        type:"currency"
    },

    {
        id:"jpy",
        name:"Japanese Yen (JPY)",
        type:"currency"
    }

];

assets.forEach(asset=>{
    const option=document.createElement("option");
    option.value=asset.id;
    option.textContent=asset.name;
    fromSelect.appendChild(option);
    const option2=document.createElement("option");
    option2.value=asset.id;
    option2.textContent=asset.name;
    toSelect.appendChild(option2);
});

logoutBtn.addEventListener("click",()=>{

    sessionStorage.clear();

    window.location.href="index.html";

});