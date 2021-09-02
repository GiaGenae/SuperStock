class StockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :company, :ticker, :sector, :price, :shares
end
