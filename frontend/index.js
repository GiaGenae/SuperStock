document.addEventListener("DOMContentLoaded", () => {
    fetchPortfolio()

})

const BASE_URL = "http://localhost:3000/"
// create portfolio

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