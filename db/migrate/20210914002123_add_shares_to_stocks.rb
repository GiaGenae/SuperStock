class AddSharesToStocks < ActiveRecord::Migration[6.1]
  def change
    add_column :stocks, :shares, :integer
  end
end
