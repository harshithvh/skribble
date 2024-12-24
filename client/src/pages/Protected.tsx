import SessionCard from "../components/SessionCard";
import NavBar from "../components/NavBar";
const Protected = () => {
	return (
		<>
			<NavBar />
			<div
				className="d-flex justify-content-between align-items-center"
				style={{ height: "90vh", backgroundColor: "" }}>
					<div
					id="logo"
					style={{
						backgroundImage: `url(/image.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						width: "50%",
						height: "100%",
						position: "relative",
					}}>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							backgroundImage:
								"linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
						}}></div>
				</div>
				<div>
					<SessionCard func="Join" />
					<SessionCard func="Create" />
				</div>
				<div
					id="logo"
					style={{
						backgroundImage: `url(/image.png)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						width: "50%",
						height: "100%",
						position: "relative",
					}}>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							backgroundImage:
								"linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
						}}></div>
				</div>
			</div>
		</>
	);
};

export default Protected;
