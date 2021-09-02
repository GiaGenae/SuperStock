class PortfolioSerializer
  include FastJsonapi::ObjectSerializer
  attributes :investor
  has_many :stocks
end
