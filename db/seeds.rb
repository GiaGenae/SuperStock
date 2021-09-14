# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Portfolio1 = Portfolio.create(investor: 'Gia Jennings')

Stock.create(company: "Microsoft", ticker: "MSFT", sector: "Technology", price: 301.83, shares: 0, portfolio: Portfolio1)
Stock.create(company: "Tesla", ticker: "TSLA", sector: "Capital Goods", price: 734.09, shares: 0, portfolio: Portfolio1)
Stock.create(company: "Gamestop", ticker: "GME", sector: "Retail/Wholesale", price: 210.57, shares: 0, portfolio: Portfolio1)

Portfolio2 = Portfolio.create(investor: 'Warren Buffet')

Stock.create(company: "Coca-Cola Co", ticker: "KO", sector: "Consumer Defensive", price: 36.33, shares: 0, portfolio: Portfolio2)
Stock.create(company: "Apple Inc", ticker: "AAPL", sector: "Technology", price: 7148.97, shares: 0, portfolio: Portfolio2)
Stock.create(company: "American Express", ticker: "AXP", sector: "Financial Services", price: 158.72, shares: 0, portfolio: Portfolio2)

Portfolio3 = Portfolio.create(investor: 'Cathie Wood')

Stock.create(company: "ARK Autonomous Technology & Robotics ETF", ticker: "ARKQ", sector: "Information Technology", price: 83.25, shares: 0, portfolio: Portfolio3)
Stock.create(company: "ARK Next Generation Internet ETF", ticker: "ARKW", sector: "Information Technology", price: 149.78, shares: 0, portfolio: Portfolio3)
Stock.create(company: "ARK Genomic Revolution ETF", ticker: "ARKG", sector: "Information Technology", price: 83.74, shares: 0, portfolio: Portfolio3)