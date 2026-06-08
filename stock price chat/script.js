const API_KEY = 'YOUR_API_KEY';
const symbol = 'AAPL';

fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const timeSeries = data["Time Series (Daily)"];
    // Parse the timeSeries for charting
    console.log(timeSeries);
  });
