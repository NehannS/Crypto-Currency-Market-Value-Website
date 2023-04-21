# group-project-group-ae
group-project-group-ae created by GitHub Classroom

## Group AE members:
* Alexander : 45970548
* Dazhou : 44202172
* Nehan : 45848009
* Yetian : 46204423


## CryptoCentral
The main purpose of CryptoCentral is to display the top 100 crypto assets in order of their current coin price. It simply compares their daily market changes and market cap and arranges them in order from highest market cap to lowest.

## Target Users 
The application was created with the initial thought of providing an understandable and simple means for beginners to get into crypto. <br/> 
It’s deconstructed to just the essential values and displayed straightforwardly. <br/> It also would be beneficial to existing traders that want to keep track of market cap.

## Data Sources 
APIs were used from the sites - ""https://api.coingecko.com" and "https://coinranking1.p.rapidapi.com".

Web socket streams were trialed via - https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md.

Graph/Chart library - https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Candlestick/React/Light/

## MVP

The MVP currently consists of a header (pulled from coin ranking) which is the overall currency, market volumes and caps. <br/>
The coins are then displayed in a 4-column grid structure, each coin boxed with its logo, price, market cap and daily change.  <br/>
Selecting a specific coin would provide further details about the coin. (All pulled from coingecko) <br/>
There is a navbar and search bar functionality that allows the user to search for a specific coin. <br/>


### Weekly Sprint Checklist :
- [x] **Week 1** 
- >  ~~Website underwent initial development, App was created and pushed into the github.~~ <br/>
- >  ~~Backend implemented prior to front end to ensure working API's~~ <br/>
- >  ~~APIs were used from the sites - ""https://api.coingecko.com" and "https://coinranking1.p.rapidapi.com," calling the required information for display.   <br/>                  The values of the top 50 coins including market rate and comparison.~~ 
- >  ~~Backend calls were functioning perfectly and all required data was acquired.~~<br/>
- >  ~~Basic visual backbone of the website was created.~~ <br/>
             
- [x] **Week 2** 
 - > ~~Frontend focused sprints~~<br/>
 - > ~~Displayed called coins on a grid strutucre (4 column) convinient for user display.~~ <br/>
 - > ~~Incoperated box styling and initial useage of css framework (bootstrap ) still in the process~~<br/>
 - > ~~Digital pop up - displays coin information on selection~~<br/>
 - > ~~Navigation bar incoperated~~ <br/>

- [x] **Week 3** 
 - > ~~Implemented bootstrap completely, perfect grid structure implemented~~<br/>
 - > ~~Responsive screen design implemented.~~ <br/>
 - > ~~Search bar functionality fully implemented~~ <br/>
 - > ~~Crypto header apis improved and structured~~<br/>
 - > ~~Trialing crypto graph implementation~~<br/>

- [x] **Week 4** 
 - > ~~Responsive design adjustments, fully compatible with mobile devices~~<br/>
 - > ~~Improved and adjusted crypto API header with appropriate formatting~~ <br/>
 - > ~~Demo/trial crpyto graph API library~~ <br/>
 - > ~~Testing application and deploying via Heroku~~ <br/>



## Guide to project Source code 
https://github.com/MQCOMP3120/group-project-group-ae/tree/main/cryptoapp/src 
## Next Steps 
We had a lot higher hopes towards the functionalities of the application, however, due to time complications we were unable to achieve them. <br/>
We would like to implement a live graph feature for each coin (a feature we tried out during the sprints but couldn’t fully achieve) <br/>
An Auth feature that would allow users to log in and save selected coins, allowing the homepage to only display what they have selected. <br/>
A currency conversion feature that displays the market values in currencies other than USD<br/>
Below Consists of how the MVP was achieved with detailed sprints.


## Team Structure – 
Communication was done mainly via discord, which Included weekly group meetings and consistent message updates
The initial roles we came up with included - 
  Alex - Back-end Specialist. 
  Nehan - Main Front-end Specialist
  Dazhou - Assistant Front-end Specialist, Code dev
  Yetian - Test Specialist
  
However, as the sprints progress, we split other work accordingly as well. The backend was structured by a combined effort of the team, The Frontend being worked on strongly by Alex and Dazhou whilst the others supported as much as possible. Nehan kept track of the sprint documentation and handle the presentation management as well in a form of a backlog on GitHub.
