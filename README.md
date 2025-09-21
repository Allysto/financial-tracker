# 💹 Financial Tracker

A full-stack web application that displays real-time stock market data. Built with a .NET Core Web API backend and a vanilla JavaScript frontend, deployed on Azure and GitHub Pages.

![Financial Tracker Screenshot](https://via.placeholder.com/800x400?text=Screenshot+of+Financial+Tracker) 
*(Pro Tip: Add a screenshot of your live app here!)*

## ✨ Features

- **Real-time Stock Data:** Search for any stock symbol (e.g., MSFT, AAPL) to get the latest price, change, volume, and more.
- **Clean UI:** Responsive design with a modern, card-based layout.
- **Secure Backend:** API keys are securely stored server-side in Azure, not exposed in the frontend.
- **Full-Stack Architecture:** Demonstrates a complete client-server application.

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript  
**Backend:** C#, ASP.NET Core Web API  
**Deployment:** Azure App Services (Backend), GitHub Pages (Frontend)  
**Data Source:** [Alpha Vantage API](https://www.alphavantage.co/)

## 🌐 Live Demo

Experience the live application:  
[**https://allysto.github.io/financial-tracker-frontend/**](https://allysto.github.io/financial-tracker-frontend/)

## 📁 Project Structure

financial-tracker-frontend/
├── index.html # Main HTML page
├── styles.css # CSS styles
├── script.js # Frontend JavaScript logic
└── README.md # This file


## 🚀 How to Run Locally

### Prerequisites
- A modern web browser
- (For backend) [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)

### Running the Frontend
1. Clone the repository: `git clone https://github.com/allysto/financial-tracker-frontend.git`
2. Open `index.html` in a browser using a local server (e.g., VS Code Live Server).

### Running the Backend
1. Clone the backend repo: `git clone https://github.com/allysto/FinancialTrackerAPI.git`
2. Navigate to the project directory: `cd FinancialTrackerAPI`
3. Get an API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
4. Set the API key as a user secret: `dotnet user-secrets set "AlphaVantageApiKey" "YOUR_API_KEY"`
5. Run the project: `dotnet run`
6. The API will be available at `https://localhost:7186`

## 🔧 API Usage

### Get Stock Quote
```http
GET /api/stock/{symbol}

{
  "symbol": "MSFT",
  "price": 517.93,
  "change": 9.48,
  "changePercent": 1.8645,
  "high": 519.30,
  "low": 510.31,
  "open": 510.56,
  "volume": 52474093
}

👨‍💻 Developer
Alfred Lebu P

Portfolio: allysto.github.io/portfolio-site/

Email: allylebo@gmail.com

LinkedIn: Your LinkedIn Profile


