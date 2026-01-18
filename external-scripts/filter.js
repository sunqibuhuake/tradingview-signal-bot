const fs = require('fs');
const path = require('path');

// Load the stocks.json file
const stocksFilePath = path.join(__dirname, '..', 'config', 'stocks.json');
const stocksData = JSON.parse(fs.readFileSync(stocksFilePath, 'utf-8'));

// 过滤名称中有银行的股票
const filteredStocks = stocksData.filter(stock => stock.name.includes('银行'));

// save filtered stocks to a new JSON file
const outputFilePath = path.join(__dirname, '..', 'config', 'filtered_stocks.json');
fs.writeFileSync(outputFilePath, JSON.stringify(filteredStocks, null, 4), 'utf-8');