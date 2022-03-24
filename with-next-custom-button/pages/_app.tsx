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

const provider = ({ chainId }: { chainId?: number }) =>
  new providers.InfuraProvider(chainId, infuraId);

const chains: Chain[] = [
  { ...chain.mainnet, name: "Ethereum" },
  { ...chain.polygonMainnet, name: "Polygon" },
  { ...chain.optimism, name: "Optimism" },
  { ...chain.arbitrumOne, name: "Arbitrum" },
];

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
      <WagmiProvider
        autoConnect
        // @ts-expect-error
        connectors={connectors}
        provider={provider}
      >
        <Component {...pageProps} />
      </WagmiProvider>
    </RainbowKitProvider>
  );
}

export default MyApp;
