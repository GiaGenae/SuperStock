class Portfolio{
    constructor(investor){
        this.investor = investor;
    }

    renderPortfolio() {
        let portfoliosDiv = document.getElementById("portfolio-container")
        
        portfoliosDiv.innerHTML +=
        `
        <ul>
        <h1>Investor: ${this.investor}</h1>
        </ul>
        `
    }
}