import React from "react";
import "./index.css";
import "pn-design-assets/pn-assets/styles/pn-styles.scss";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";

import { PnIcon } from "@postnord/web-components/components/pn-icon";
import { PnButton } from "@postnord/web-components/components/pn-button";
import { PnToast } from "@postnord/web-components/components/pn-toast";
import { PnInput } from "@postnord/web-components/components/pn-input";
import { PnHeader } from "@postnord/web-components/components/pn-header";
import { PnIllustration } from "@postnord/web-components/components/pn-illustration";
import { PnRadioTile } from "@postnord/web-components/components/pn-radio-tile";
import { PnTable } from "@postnord/web-components/components/pn-table";
import { PnRadioButton } from "@postnord/web-components/components/pn-radio-button";
import { PnTooltip } from "@postnord/web-components/components/pn-tooltip";

customElements.define("pn-icon", PnIcon);
customElements.define("pn-button", PnButton);
customElements.define("pn-toast", PnToast);
customElements.define("pn-input", PnInput);
customElements.define("pn-header", PnHeader);
customElements.define("pn-illustration", PnIllustration);
customElements.define("pn-radio-tile", PnRadioTile);
customElements.define("pn-table", PnTable);
customElements.define("pn-radio-button", PnRadioButton);
customElements.define("pn-tooltip", PnTooltip);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 5,
    },
  },
});

const oidcConfig = {
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: import.meta.env.VITE_AUTH_AUTHORITY_URL,
  client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
  post_logout_redirect_uri: import.meta.env.VITE_AUTH_LOGOUT_REDIRECT_URI,
  loadUserInfo: true,
  response_type: "code",
  scope: "openid offline_access",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
