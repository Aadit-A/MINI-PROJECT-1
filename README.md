# Crypto & Currency Converter

A simple web-based Crypto & Currency Converter built using HTML, JavaScript, JSON, and the CoinGecko API. The project demonstrates user authentication, API integration, DOM manipulation, browser storage, and basic frontend development concepts.

---

## Features

### Authentication
- Login system using a local `users.json` file.
- User credentials are fetched dynamically using the JavaScript `fetch()` API.
- Invalid login credentials are handled with appropriate error messages.
- Protected dashboard using `sessionStorage`.
- Logout functionality.

---

### Currency & Crypto Converter
- Convert between:
  - Cryptocurrency → Cryptocurrency
  - Cryptocurrency → Currency
  - Currency → Cryptocurrency
- Live conversion rates fetched from the CoinGecko API.
- Supports popular cryptocurrencies including:
  - Bitcoin (BTC)
  - Ethereum (ETH)
  - Tether (USDT)
  - BNB
  - Solana (SOL)
  - XRP
  - Dogecoin (DOGE)
  - Cardano (ADA)
- Supports common currencies including:
  - USD
  - INR
  - EUR
  - GBP
  - JPY

---

### Favorites
- Save frequently used conversion pairs.
- Favorites are stored using `localStorage`.
- Favorites remain available even after refreshing or reopening the browser.
- Duplicate favorite pairs are prevented.

---

## Technologies Used

- HTML5
- Vanilla JavaScript
- Fetch API
- CoinGecko Demo API
- JSON
- Local Storage
- Session Storage
- Git & GitHub

---

## Project Structure

```
Crypto-Currency-Converter/
│
├── index.html
├── dashboard.html
├── users.json
│
├── login.js
├── auth.js
├── dashboard.js
│
└── README.md
```

---

## How It Works

1. User logs in using credentials stored in `users.json`.
2. Credentials are verified using JavaScript and the Fetch API.
3. On successful login, the user is redirected to the dashboard.
4. The dashboard allows users to:
   - Enter an amount.
   - Select source and destination assets.
   - Fetch live conversion rates from the CoinGecko API.
   - Display the converted value.
5. Users can save favorite conversion pairs.
6. Logout clears the current session and redirects back to the login page.

---

## Limitations

### Currency → Currency conversion is not supported.

This project uses the CoinGecko API, which is primarily designed for cryptocurrency market data. It provides live prices for cryptocurrencies in various fiat currencies (such as USD, INR, EUR, etc.), making the following conversions possible:

- Crypto → Crypto
- Crypto → Currency
- Currency → Crypto

However, CoinGecko does **not** provide direct exchange rates between fiat currencies (for example, USD → INR or EUR → GBP). Because of this API limitation, fiat-to-fiat conversion is not implemented in this project.

Supporting currency-to-currency conversion would require integrating an additional foreign exchange API (such as ExchangeRate API), but this project intentionally uses only the CoinGecko API to keep the implementation focused and consistent.

---

## Future Improvements

- Add Currency → Currency conversion using a foreign exchange API.
- Add a swap button to exchange the "From" and "To" selections.
- Add historical price charts.
- Add search functionality inside dropdowns.
- Improve the user interface with CSS and responsive design.

---

## Author

Developed as a mini web development project to demonstrate:
- HTML
- JavaScript
- Fetch API
- DOM Manipulation
- JSON Handling
- API Integration
- Browser Storage
- Git Version Control