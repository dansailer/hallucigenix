const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/telemetry") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        console.log(
          "Received telemetry data:",
          JSON.stringify(parsedBody, null, 2)
        );
      } catch (error) {
        console.error("Failed to parse JSON:", error);
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Telemetry data received");
    });
  }
});
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
