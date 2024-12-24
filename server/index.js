import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
		credentials: true
	},
    maxHttpBufferSize: 1e8
});

io.on("connection", (socket) => {
	var id = "";
	console.log("User Connected ", socket.id);
	socket.on("join", (data) => {
		console.log("Joining ", data.user, " to ",data.id);
		socket.join(data.id);
		id = data.id;
		socket.to(data.id).emit("loadLines", data);
	});
	socket.on("drawing", (data) => {
		socket.to(data[0].id).emit("drawings", data);
	});
	socket.on("message",(data)=>{
		socket.to(data.id).emit("messageRecieve", data);
	})
});


app.get("/ping", (req, res) => {
    res.send("pongo");
});

server.listen(3000, () => {
	console.log("Server listening on ", 3000);
});
