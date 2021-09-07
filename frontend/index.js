document.addEventListener("DOMContentLoaded", () => {
    fetchPortfolio();
    buildForm()

})

const BASE_URL = "http://localhost:3000/"


// create stock in portfolio
function buildForm() {
    let stocksForm = document.getElementById("stocks-form")

    stocksForm.innerHTML +=
    `
    <form>
    <label for ="company">Company:</label>
    <input type="text" id="company">
    <br>
    <br>
    <label for ="ticker">Ticker:</label>
    <input type="text" id="ticker">
    <br>
    <br>
    <label for ="sector">Sector:</label>
    <select name="sector" id="sector">
    <option value="" selected disabled hidden>Choose Here</option>
    <option value="Communication Services">Communication Services</option>
    <option value="Consumer Discretionary">Consumer Discretionary</option>
    <option value="Consumer Staples">Consumer Staples</option>
    <option value="Energy">Energy</option>
    <option value="Financials">Financials</option>
    <option value="Industrials">Industrials</option>
    <option value="Information Technology">Information Technology</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Materials">Materials</option>
    <option value="Real Estate">Real Estate</option>
    <option value="Utilities">Utilities</option>
    </select>
    <br>
    <br>
    <label for ="price">Price:</label>
    <input type="text" id="price">
    <br>
    <br>
    <label for ="shares">Shares:</label>
    <input type="number" id="shares" min="1">
    <br>
    <br>
    <input type="submit" value="Add Stock to Portfolio">
    </form>
   `
    stocksForm.addEventListener("submit", stockFormSubmission)
}

function stockFormSubmission(){
    event.preventDefault();
    let company = document.getElementById("company").value
    let ticker = document.getElementById("ticker").value
    let sector = document.getElementById("sector").value
    let price = document.getElementById("price").value
    let shares = document.getElementById("shares").value
    
    console.log(company, ticker, sector, price, shares)
}

// read stocks in portfolio

function fetchPortfolio(){
    fetch(`${BASE_URL}/portfolios`)
    .then(resp => resp.json())
    .then(portfolios => {
        for (const portfolio of portfolios){
            let p = new Portfolio(portfolio.investor)
            p.renderPortfolio();
        }
    })
}

// update or delete stocks in portfolio