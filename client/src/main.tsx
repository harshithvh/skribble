import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-zum6d8ipqsnle77i.us.auth0.com"
			clientId="iXz3Y6OgMPtkvOrbexX0YZrQ4MVttWGk"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>
);
