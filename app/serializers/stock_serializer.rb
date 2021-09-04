class StockSerializer < ActiveModel::Serializer
  attributes :company, :ticker, :sector, :price, :shares
end
