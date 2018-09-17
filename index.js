var ws = require("websockets");
var wsServer = ws.createServer();

wsServer.on("connect", () => {
	console.log('Connected to websockets!');
});

wsServer.listen(8612);
