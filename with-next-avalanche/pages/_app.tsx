import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  RainbowKitProvider,
  Chain,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, chain } from "wagmi";
import { providers } from "ethers";

const infuraId = process.env.INFURA_ID;

const provider = () =>
  new providers.StaticJsonRpcProvider(
    "https://avax-mainnet.gateway.pokt.network/v1/lb/62572ff1981a020039576a94",
    chain.avalanche.id
  );

const chains: Chain[] = [{ ...chain.avalanche, name: "Avalanche Mainnet" }];

const wallets = getDefaultWallets({
  chains,
  infuraId,
  appName: "My RainbowKit App",
  jsonRpcUrl: ({ chainId }) =>
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0],
});

const connectors = connectorsForWallets(wallets);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitProvider chains={chains}>
      <WagmiProvider autoConnect connectors={connectors} provider={provider}>
        <Component {...pageProps} />
      </WagmiProvider>
    </RainbowKitProvider>
  );
}

export default MyApp;
