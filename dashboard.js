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

async function convert() {
    const enteredAmount = Number(amount.value);

    const fromId = fromSelect.value;

    const toId = toSelect.value;

    if (enteredAmount <= 0 || isNaN(enteredAmount)) {
    alert("Please enter a valid amount.");
    return;
}
    const fromAsset = assets.find(asset => asset.id === fromId);

    const toAsset = assets.find(asset => asset.id === toId);

    console.log(fromAsset.type);

    console.log(toAsset.type);

    let url = "";
    const API_KEY = "APi-key-here";

    if (fromAsset.type === "crypto" && toAsset.type === "currency") {

        url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromId}&vs_currencies=${toId}&x_cg_demo_api_key=${API_KEY}`;

    }

    else if (fromAsset.type === "currency" && toAsset.type === "crypto") {

        url = `https://api.coingecko.com/api/v3/simple/price?ids=${toId}&vs_currencies=${fromId}&x_cg_demo_api_key=${API_KEY}`;

    }

    else if (fromAsset.type === "crypto" && toAsset.type === "crypto") {

        url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromId},${toId}&vs_currencies=usd&x_cg_demo_api_key=${API_KEY}`;

    }

    else {

        alert("Currency to Currency conversion is not supported.");

        return;

    }

    // console.log(url);

    try {

    const response = await fetch(url);

    const data = await response.json();

    let convertedAmount;

    // Crypto -> Currency
    if (fromAsset.type === "crypto" && toAsset.type === "currency") {

        const price = data[fromId][toId];

        convertedAmount = enteredAmount * price;

    }

    // Currency -> Crypto
    else if (fromAsset.type === "currency" && toAsset.type === "crypto") {

        const price = data[toId][fromId];

        convertedAmount = enteredAmount / price;

    }

    // Crypto -> Crypto
    else {

        const fromPrice = data[fromId].usd;

        const toPrice = data[toId].usd;

        convertedAmount = (enteredAmount * fromPrice) / toPrice;

    }

    result.textContent =
        `${enteredAmount} ${fromAsset.name} = ${convertedAmount.toFixed(6)} ${toAsset.name}`;

}
    catch(error){

     console.error(error);

     result.textContent = "Error fetching conversion rate.";

    }
}

convertBtn.addEventListener("click", convert);

displayFavorites();
function displayFavorites() {

    favorites.innerHTML = "";

    const savedPairs = JSON.parse(localStorage.getItem("favorites")) || [];

    savedPairs.forEach(pair => {

        const li = document.createElement("li");

        li.textContent = pair;

        favorites.appendChild(li);

    });

}

function saveFavorite() {
    const fromAsset = assets.find(asset => asset.id === fromSelect.value);

    const toAsset = assets.find(asset => asset.id === toSelect.value);

    const pair =`${fromAsset.name} → ${toAsset.name}`;

    const savedPairs = JSON.parse(localStorage.getItem("favorites")) || [];

    if(savedPairs.includes(pair)){

    alert("Favorite already exists.");

    return;

}
    savedPairs.push(pair);

    localStorage.setItem(
        "favorites",
        JSON.stringify(savedPairs)
);
    displayFavorites();
}

saveBtn.addEventListener("click", saveFavorite);



logoutBtn.addEventListener("click",()=>{

    sessionStorage.clear();

    window.location.href="index.html";

});