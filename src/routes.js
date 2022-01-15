/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Lottery from "views/examples/Lottery.js";
import WinnerList from "views/examples/WinnerList";
import WalletData from "views/examples/WalletData"
import AllTransactions from "views/examples/AllTransactions";
import AllNFTs from "views/examples/AllNFTs";
import Scrapper from "views/examples/Scrapper";
import SpecialWallets from "views/examples/SpecialWallets"
import AllBalances from "views/examples/AllBalances";
import Charts from "views/examples/Charts";
import NFTCo from "views/examples/NFTCo";
import TransactionTracker from "views/examples/TransactionTracker"
import TokenCo from "views/examples/TokenCo"


var routes = [{
        path: "/walletdata",
        name: "Wallet Data",
        // icon: "ni ni-bullet-list-67",
        component: WalletData,
        layout: "/admin",
    },
    {
        path: "/specialWallets",
        name: "Special Wallets",
        // icon: "ni ni-bullet-list-67",
        component: SpecialWallets,
        layout: "/admin",
    },
    {
        path: "/TransactionTracker",
        name: "Wallet Tracker",
        // icon: "ni ni-bullet-list-67",
        component: TransactionTracker,
        layout: "/admin",
    },
    {
        path: "/transactions",
        name: "Transactions",
        // icon: "ni ni-money-coins",
        component: AllTransactions,
        layout: "/admin",
    },
    {
        path: "/NFTs",
        name: "NFTs",
        // icon: "ni ni-money-coins",
        component: AllNFTs,
        layout: "/admin",
    },
    {
        path: "/NFTcompany",
        name: "NFTcompany",
        // icon: "ni ni-bullet-list-67",
        component: NFTCo,
        layout: "/admin",
    },
    {
        path: "/balances",
        name: "Balances",
        // icon: "ni ni-money-coins",
        component: AllBalances,
        layout: "/admin",
    },
    {
        path: "/tokencompany",
        name: "Token company",
        // icon: "ni ni-money-coins",
        component: TokenCo,
        layout: "/admin",
    },
    {
        path: "/Scrapper",
        name: "Scrapper",
        // icon: "ni ni-money-coins",
        component: Scrapper,
        layout: "/admin",
    },
    
    {
        path: "/charts",
        name: "Charts",
        // icon: "ni ni-bullet-list-67",
        component: Charts,
        layout: "/admin",
    },
    {
        path: "/Lottery",
        name: "Lottery",
        // icon: "ni ni-money-coins",
        component: Lottery,
        layout: "/admin",
    },
    {
        path: "/winnerList",
        name: "WinnerList",
        // icon: "ni ni-money-coins",
        component: WinnerList,
        layout: "/admin",
    },
    
    
];
export default routes;