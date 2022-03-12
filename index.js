#!/usr/bin/node
const express = require("express");
const app = express();
//const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile("./about.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(data);
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile("./contact-me.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(data);
    });
});

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

/*
VERSION BEFORE USING EXPRESS

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
        case "/style.css":
            fs.readFile("./style.css", "utf-8", (err, data) => {
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader("content-type", "text/css");
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
*/