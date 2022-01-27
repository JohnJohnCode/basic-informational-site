#!/usr/bin/node
const http = require("http");
const fs = require("fs");
const url = require("url");

const port = process.env.PORT || 8080;
const indexURL = new URL("http://localhost:3000/");
const aboutURL = new URL("/about.html", "http://localhost:3000/");

const httpServer = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            fs.readFile("./index.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader("content-type", "text/html");
                res.end(data);
            });
            break;
        case "/about":
            fs.readFile("./about.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader("content-type", "text/html");
                res.end(data);
            });
            break;
        case "/contact-me":
            fs.readFile("./contact-me.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader("content-type", "text/html");
                res.end(data);
            });
            break;
        default:
            fs.readFile("./404.html", "utf-8", (err, data) => {
                if (err) throw err;
                res.statusCode = 404;
                res.setHeader("content-type", "text/html");
                res.end(data);
            });
            break;
    }
});

httpServer.listen(port, () => {
    console.log(`Server running at port ${port}`);
});