# 💹 Financial Tracker

A full-stack web application that displays real-time stock market data. Built with a .NET Core Web API backend and a vanilla JavaScript frontend, deployed on Azure and GitHub Pages.

![Financial Tracker](https://img.shields.io/badge/Status-Live-brightgreen)
![.NET](https://img.shields.io/badge/.NET-8.0-blue)
![Azure](https://img.shields.io/badge/Azure-Deployed-0078D4)

## ✨ Features

- **✅ Real-time Stock Data:** Search for any stock symbol (e.g., MSFT, AAPL) to get the latest price, change, volume, and more
- **✅ Clean UI:** Responsive design with a modern, card-based layout
- **✅ Secure Backend:** API keys securely stored server-side in Azure, not exposed in frontend
- **✅ Full-Stack Architecture:** Complete client-server application demonstration
- **🔄 Currency Exchange:** Coming soon in future update

## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript  
**Backend:** C#, ASP.NET Core Web API, Entity Framework  
**Deployment:** Azure App Services (Backend), GitHub Pages (Frontend)  
**Data Source:** [Alpha Vantage API](https://www.alphavantage.co/)  
**Version Control:** Git, GitHub

## 🌐 Live Demo

Experience the live application:  
[**https://allysto.github.io/financial-tracker-frontend/**](https://allysto.github.io/financial-tracker-frontend/)

**API Endpoint:** `https://financialtrackerapi-developer.azurewebsites.net/api/stock/{symbol}`

## 📁 Project Structure

### Frontend Repository

financial-tracker-frontend/
├── index.html # Main HTML page
├── styles.css # CSS styles and responsive design
├── script.js # Frontend JavaScript logic
├── assets/ # Images and static files
└── README.md # Project documentation

### Backend Repository

FinancialTrackerAPI/
├── Controllers/
│ └── StockController.cs # Handles API requests for stock data
├── Models/
│ └── StockQuote.cs # Data model for stock information
├── Program.cs # Application configuration & startup
├── appsettings.json # Configuration settings
└── FinancialTrackerAPI.csproj


## 🚀 How to Run Locally

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge)
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Git](https://git-scm.com/)
- Alpha Vantage API key (free tier)

### Running the Frontend
```bash
# Clone the repository
git clone https://github.com/allysto/financial-tracker-frontend.git

# Navigate to project directory
cd financial-tracker-frontend

# Open with live server (VS Code extension recommended)
# Or simply open index.html in a browser

# Clone the backend repository
git clone https://github.com/allysto/FinancialTrackerAPI.git

# Navigate to project directory
cd FinancialTrackerAPI

# Set up API key (replace with your actual key)
dotnet user-secrets set "AlphaVantageApiKey" "YOUR_API_KEY_HERE"

# Run the application
dotnet run

# API will be available at: https://localhost:7186

GET /api/stock/{symbol}

GET /api/stock/MSFT

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

📋 Future Enhancements
Currency Exchange Rates - Forex API integration

User Authentication - Personalized watchlists and favorites

Historical Data Charts - Interactive price charts with Chart.js

Cryptocurrency Data - Support for major cryptocurrencies

News Integration - Relevant financial news for each stock

Advanced Analytics - Technical indicators and analysis

🤝 Contributing
This is a portfolio project, but suggestions and improvements are welcome! Feel free to:

Fork the repository

Create a feature branch

Submit a pull request

📄 License
This project is open source and available under the MIT License.

👨‍💻 Developer
Alfred 
🎓BSc IT Student | North West University
📍 South Africa 

📁 Portfolio: allysto.github.io/portfolio-site/

📧 Email: allylebo@gmail.com

📱 Phone: +27608560703

💼 LinkedIn: https://www.linkedin.com/in/alfred-l-b373a5283/
