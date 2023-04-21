/** @format */

// /** @format */

// /** @format */

// import { useState, useEffect } from "react";
// import cryptoAPI from "./services/cryptoAPI";

// const Homepage = () => {
//   const [cryptoHeader, setCryptoHeader] = useState({});

//   useEffect(() => {
//     cryptoAPI
//       .getMarketData()
//       .then((response) => {
//         setCryptoHeader(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   useEffect(() => {
//     console.log(cryptoHeader);
//   }, [cryptoHeader]);

//     if (cryptoHeader) {
//       return (
//         <div className="headerContainer">
//           <h1>Global Crypto Stats</h1>
//           <div className="globalStats">
//             <div>
//               <h4>Total Market Cap:</h4>
//               <p>{cryptoHeader.data.totalMarketCap}</p>
//             </div>
//             <div>
//               <h4>Total Markets:</h4>
//               <p>{cryptoHeader.data.totalMarkets}</p>
//             </div>
//             <div>
//               <h4>Total Exchanges:</h4>
//               <p>{cryptoHeader.data.totalExchanges}</p>
//             </div>
//             <div>
//               <h4>Total 24h Volume:</h4>
//               <p>{cryptoHeader.data.total24hVolume}</p>
//             </div>
//             <div>
//               <h4>Total Market Cap:</h4>
//               <p>{cryptoHeader.data.totalCoins}</p>
//             </div>
//           </div>
//         </div>
//       );
//     }
// };

// export default Homepage;
