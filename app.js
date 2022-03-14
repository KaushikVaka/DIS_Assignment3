window.onscroll = function() {
    myFunction()
};

console.log("scrollign caling");
var navbar = document.getElementById("navbarID");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// chart js logic

const data = [{
    "id": "1e31218a-e44e-4285-820c-8282ee222035",
    "slug": "bitcoin",
    "symbol": "BTC",
    "metrics": {
        "market_data": {
            "price_usd": 38938.94080925571
        }
    }
}, {
    "id": "21c795f5-1bfd-40c3-858e-e9d7e820c6d0",
    "slug": "ethereum",
    "symbol": "ETH",
    "metrics": {
        "market_data": {
            "price_usd": 2574.248316793049
        }
    }
}, {
    "id": "7dc551ba-cfed-4437-a027-386044415e3e",
    "slug": "binance-coin",
    "symbol": "BNB",
    "metrics": {
        "market_data": {
            "price_usd": 375.9903582614153
        }
    }
}, {
    "id": "4515ba15-2719-4183-b0ca-b9255d55b67e",
    "slug": "usd-coin",
    "symbol": "USDC",
    "metrics": {
        "market_data": {
            "price_usd": 190.00053971404919
        }
    }
}, {
    "id": "97775be0-2608-4720-b7af-f85b24c7eb2d",
    "slug": "xrp",
    "symbol": "XRP",
    "metrics": {
        "market_data": {
            "price_usd": 10000.7919255978040348
        }
    }
}, {
    "id": "86da9b7d-922b-4abb-8599-e75c6fa5a138",
    "slug": "terra",
    "symbol": "LUNA",
    "metrics": {
        "market_data": {
            "price_usd": 8008.95119158980766
        }
    }
}, {
    "id": "362f0140-ecdd-4205-b8a0-36f0fd5d8167",
    "slug": "cardano",
    "symbol": "ADA",
    "metrics": {
        "market_data": {
            "price_usd": 12900.7925874723597238
        }
    }
}, {
    "id": "b3d5d66c-26a2-404c-9325-91dc714a722b",
    "slug": "solana",
    "symbol": "SOL",
    "metrics": {
        "market_data": {
            "price_usd": 8091.4599049802864
        }
    }
}, {
    "id": "2db6b38a-681a-4514-9d67-691e319597ee",
    "slug": "avalanche",
    "symbol": "AVAX",
    "metrics": {
        "market_data": {
            "price_usd": 7100.81862666154647
        }
    }
}, {
    "id": "da6a0575-ec95-4c47-855d-5fc6a3e22ada",
    "slug": "polkadot",
    "symbol": "DOT",
    "metrics": {
        "market_data": {
            "price_usd": 18000.24227087916434
        }
    }
}, {
    "id": "5da7bde4-61e9-4a6f-9fc3-7ed66effb198",
    "slug": "binance-usd",
    "symbol": "BUSD",
    "metrics": {
        "market_data": {
            "price_usd": 19000.0002326463070093
        }
    }
}, {
    "id": "7d793fa7-5fc6-432a-b26b-d1b10769d42e",
    "slug": "dogecoin",
    "symbol": "DOGE",
    "metrics": {
        "market_data": {
            "price_usd": 9070.11597326628032505
        }
    }
}, {
    "id": "ad4b5281-c36c-4c1f-9d79-1d5d60566d97",
    "slug": "terrausd",
    "symbol": "UST",
    "metrics": {
        "market_data": {
            "price_usd": 1678.0038856163941814
        }
    }
}, {
    "id": "8c4f84a7-6484-4074-8c17-fe363a243e7f",
    "slug": "shiba-inu",
    "symbol": "SHIB",
    "metrics": {
        "market_data": {
            "price_usd": 1230.000022253983744144422
        }
    }
}, {
    "id": "4b474270-99ba-4a18-869d-11cd3fc0201a",
    "slug": "polygon",
    "symbol": "MATIC",
    "metrics": {
        "market_data": {
            "price_usd": 1990.4161642739466458
        }
    }
}, {
    "id": "81bbf507-29d5-4458-8d42-b81d7c197996",
    "slug": "wrapped-bitcoin",
    "symbol": "WBTC",
    "metrics": {
        "market_data": {
            "price_usd": 38964.42118552235
        }
    }
}, {
    "id": "a3b64831-4288-48bd-a3e7-eb4f77f6f740",
    "slug": "dai",
    "symbol": "DAI",
    "metrics": {
        "market_data": {
            "price_usd": 1.000376850424365
        }
    }
}, {
    "id": "de533c50-6a57-4975-bb83-62862fb9af09",
    "slug": "crypto-com-chain",
    "symbol": "CRO",
    "metrics": {
        "market_data": {
            "price_usd": 0.3853122816388064
        }
    }
}, {
    "id": "3385649f-7e22-4260-9995-309f05650e47",
    "slug": "cosmos",
    "symbol": "ATOM",
    "metrics": {
        "market_data": {
            "price_usd": 27.419416043497193
        }
    }
}, {
    "id": "c7c3697d-1b9c-42bf-9664-a366634ce2b3",
    "slug": "litecoin",
    "symbol": "LTC",
    "metrics": {
        "market_data": {
            "price_usd": 105.35282144419106
        }
    }
}]
let coinNames = [];
let coinPrices = [];

data.map((item) => {
    coinNames.push(item.slug);
    coinPrices.push(item.metrics.market_data.price_usd);
})

let date = moment(new Date()).format('lll');

new Chart(document.getElementById("barchartexample"), {
    type: 'bar',
    data: {
        labels: coinNames,
        datasets: [{
            label: "Coin Price (USD)",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            data: coinPrices
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Price Chart for Top Cryptos ' + date
        }
    }
});

//Data tables js
async function myFunc(){
    let container = document.getElementsByClassName('Data-table');
    console.log(container);

    let Dtable = document.querySelector('table');
    let thead = document.querySelector('thead');
    let tbody = document.querySelector('tbody');
    console.log(data);
    const headings = Object.keys(data[0]);
    console.log(headings);

    thead.innerHTML = "<tr></tr>";
    tbody.innerHTML = ""

    for(let i=0; i<headings.length; i++){
        const heading = document.createElement("th");
        heading.textContent = headings[i];
        thead.querySelector("tr").appendChild(heading);
    }

    for(let i=0; i<50; i++){
        const row = document.createElement("tr");
        console.log(data[i]);
        let rowId = Object.keys(data[i])
        for(let j=0; j<rowId.length; j++){
            
            console.log("in", rowId[j]);
            const celldata = document.createElement("td")
            celldata.textContent = data[i][rowId[j]];
            console.log(data[i]);
            row.appendChild(celldata)
        }
        tbody.appendChild(row);
    }
}

(async function (node){
    let table = document.querySelector('Data-table')
    let thead = document.getElementsByClassName()

})