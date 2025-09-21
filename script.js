// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// REAL API call to your .NET Backend
document.getElementById('stock-search').addEventListener('click', async () => {
    const symbol = document.getElementById('stock-symbol').value.trim().toUpperCase();
    if (!symbol) {
        showError('stocks-error', 'Please enter a stock symbol');
        return;
    }
    
    // Show loader, hide any previous errors
    document.getElementById('stocks-loader').style.display = 'block';
    document.getElementById('stocks-error').style.display = 'none';
    
    try {
        // 1. Call YOUR .NET API ON AZURE
        const response = await fetch(`https://financialtrackerapi-developer-f4gpgqbqhagde0bg.southafricanorth-01.azurewebsites.net/api/stock/${symbol}`);

        // 2. Check if the response from our API is OK
        if (!response.ok) {
            // If our backend returns an error (404, 500, etc.), get the message
            const errorText = await response.text();
            throw new Error(errorText || `Error: ${response.status}`);
        }

        // 3. Get the clean JSON data from our backend
        const stockData = await response.json();
        
        // 4. Hide loader and display the new card with REAL data
        document.getElementById('stocks-loader').style.display = 'none';
        addStockCardFromData(stockData);

    } catch (error) {
        // 5. Handle any errors that occurred during the fetch
        document.getElementById('stocks-loader').style.display = 'none';
        showError('stocks-error', error.message);
    }
});

// Placeholder for currency search (You can implement this later with a different API)
document.getElementById('currency-search').addEventListener('click', () => {
    showError('currency-error', 'Currency feature is coming soon!');
    
    // Optional: You can implement this similar to the stock search later.
    // You would need to add a new endpoint to your .NET API for currency data.
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.querySelector('p').textContent = message;
    errorElement.style.display = 'block';
}

// NEW FUNCTION: Creates a card from REAL API data
function addStockCardFromData(data) {
    const changeClass = data.changePercent >= 0 ? 'positive' : 'negative';
    const changeSign = data.changePercent >= 0 ? '+' : '';

    const cardHTML = `
        <div class="card">
            <div class="card-header">
                <span class="symbol">${data.symbol}</span>
                <span class="change ${changeClass}">${changeSign}${data.changePercent.toFixed(2)}%</span>
            </div>
            <div class="price">$${data.price.toFixed(2)}</div>
            <div class="card-footer">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Open</span>
                        <span class="info-value">$${data.open.toFixed(2)}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Volume</span>
                        <span class="info-value">${data.volume.toLocaleString()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">High</span>
                        <span class="info-value">$${data.high.toFixed(2)}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Low</span>
                        <span class="info-value">$${data.low.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Prepend the new card to the container so latest search appears first
    const container = document.getElementById('stocks-container');
    container.insertAdjacentHTML('afterbegin', cardHTML);
}