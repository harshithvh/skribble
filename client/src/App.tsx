import Protected from "./pages/Protected";
import Public from "./pages/Public";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import { userContext } from "./contexts/userContext.ts";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const {isAuthenticated,user} = useAuth0();
	return (
		<>
			<userContext.Provider value={user}>
				<Routes>
					<Route
						path="/"
						element={
							isAuthenticated ? (
									<Protected/>
							) : (
									<Public />
							)
						}
					/>
					<Route
						path="/board/:id"
						element={<Board />}
					/>
				</Routes>
			</userContext.Provider>
		</>
	);
}

export default App;
