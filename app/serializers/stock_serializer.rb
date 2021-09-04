class StockSerializer < ActiveModel::Serializer
  attributes :company, :ticker, :sector, :price, :shares, :portfolio
  belongs_to :portfolio
end
