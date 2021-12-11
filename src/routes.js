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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Lottery from "views/examples/Lottery.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import TableTest from "views/examples/TableTest";
import WinnerList from "views/examples/WinnerList";
import WalletData from "views/examples/WalletData"
import AllTransactions from "views/examples/AllTransactions";
import AllNFTs from "views/examples/AllNFTs";

var routes = [
  {
    path: "/walletdata",
    name: "Wallet Data",
    icon: "ni ni-bullet-list-67",
    component: WalletData,
    layout: "/admin",
  },
  {
    path: "/addCSV",
    name: "Add",
    icon: "ni ni-folder-17",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/TableTest",
    name: "Wallets",
    icon: "ni ni-archive-2",
    component: TableTest,
    layout: "/admin",
  },
  {
    path: "/Lottery",
    name: "Lottery",
    icon: "ni ni-money-coins",
    component: Lottery,
    layout: "/admin",
  },
  {
    path: "/winnerList",
    name: "WinnerList",
    icon: "ni ni-money-coins",
    component: WinnerList,
    layout: "/admin",
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "ni ni-money-coins",
    component: AllTransactions,
    layout: "/admin",
  },
  {
    path: "/NFTs",
    name: "NFTs",
    icon: "ni ni-money-coins",
    component: AllNFTs,
    layout: "/admin",
  },
];
export default routes;
