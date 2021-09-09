const buttonView = () => document.getElementById("button-view")
// const buttonNew = () => document.getElementsByClassName("button-new")
const BASE_URL = "http://localhost:3000"
const ul = 

document.addEventListener("DOMContentLoaded", () => {
    buttonView().addEventListener("click", handleClick)
    
})

const renderStocks = (stocks) => {
    stocks.forEach(element => {
        const li = document.createElement("li")
        li.innerHTML = `
            <h2 class="portfolio-name">${element.portfolio.investor}</h2>
            <h4 class="stock-company">${element.company}</h4>
            <p class="stock-ticker">${element.ticker}</p>
        `
        
    });
}

const handleClick = () => {
    fetch(`${BASE_URL}/stocks`)
    .then(resp => resp.json())
    .then(json => renderStocks(json))
    
}

