<!-- @format -->

# Group AE Screenshots

The following folder contains a screenshot of the most fundamanetal application functionality. These are split into two categories:

1. Desktop View
2. Mobile View

As the application is fully responsive it would therefore be best to demonstrate the user interface and how it functions throughout both environments.

## Screenshots

### Desktop/Mobile Home Page.png:
This screenshot showcases the initial view of the application upon loading. The information seen represents a navbar with links and search functionality, a header with information about the overall crypto market conditions, and finally a body made up of the top 100 cryptocurrencies ordered by market cap.

### Desktop Header.png:
This section depicts the type of information seen in the header content of the application e.g. total cryptocurrencies in circulation, total volume, total market cap, total markets, total exchanges and the domincance of Bitcoin (BTC) in the crypto marketplace. This information is retrieved via the coinRanking API which is then formatted via the inbuilt Javascript formatter to make the data readable.

### Desktop Body Content.png:
The section depicted in this screenshot showcases some of the key data points retreived through using the CoinGecko API. The top 100 cryptocurrencies are displayed in order of market cap displaying recent price movements for each individual coin, including how the price of the asset has moved in the past 24h depicted by "Daily Change" as a percentage and the current price of the asset.

### Desktop/Mobile Modal View
This screenshot highlights the view displayed on both mobile and desktop when clicking on any asset within the body of the application. Further information is displayed upon completing this action with the correct asset being displayed depending on which coin the user clicks. Additional information such as total volume, Highest price in the last 24h and the price changed in USD over the past 24h.

### Desktop/Mobile Search View #1 & #2
THe final screenshot represents the functionality of the search bar after a valid coin pair is submitted. This makes a seperate request to the CoinGecko API and retrieves only those with matching keywords. In doing so, users don't have to scroll past up to 100 coins to find their desired asset.
