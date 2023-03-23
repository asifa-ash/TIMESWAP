import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RadixProvider } from "./store/provider";
import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RadixProvider
      value={RadixDappToolkit(
        {
          dAppDefinitionAddress:
            "account_tdx_b_1pq58a8d9wa84gf54aws9fqs8axyeexd9mmy7g2jqmgrsxevw9r",
          dAppName: "TIMESWAP",
        },
        (requestData) => {
          requestData({
            accounts: { quantifier: "atLeast", quantity: 1 },
          }).map(({ data: { accounts } }) => {
            // set your application state
            console.log(accounts);
          });
        },
        {
          networkId: 34,
          onDisconnect: () => {
            // clear your application state
          },
          onInit: ({ accounts }) => {
            // set your initial application state
            
            console.log(accounts,"--------");
          },
        }
      )}
    >
      <App />
    </RadixProvider>
  </React.StrictMode>
);
