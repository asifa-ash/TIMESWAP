import { RadixContext } from "./context";

export const RadixProvider = (input) => (
  <RadixContext.Provider value={input.value}>
    {input.children}
  </RadixContext.Provider>
);
