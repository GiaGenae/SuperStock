class PortfolioSerializer < ActiveModel::Serializer
  attributes :investor
  has_many :stocks
end
