import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
        }) =>
          !account ? (
            <button onClick={openConnectModal} type="button">
              Connect Wallet
            </button>
          ) : (
            <div style={{ display: "flex", gap: 12 }}>
              {chain && (
                <button
                  onClick={openChainModal}
                  style={{ alignItems: "center", display: "flex" }}
                  type="button"
                >
                  {chain.iconUrl && (
                    <img
                      alt={chain.name ?? "Chain icon"}
                      src={chain.iconUrl}
                      style={{ height: 12, marginRight: 4, width: 12 }}
                    />
                  )}
                  {chain.name ?? chain.id}
                </button>
              )}
              <button onClick={openAccountModal} type="button">
                {account.displayName}
                {account.balanceFormatted
                  ? ` (${account.balanceFormatted})`
                  : ""}
              </button>
            </div>
          )
        }
      </ConnectButton.Custom>
    </div>
  );
};

export default Home;
