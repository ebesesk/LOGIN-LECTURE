"use strict";

const fs = require("fs");
const appRoot = require("app-root-path")

const accessLogStream = fs.createWriteStream(
    `${appRoot}/logs/access_morgan.log`,
    {flags: "a"}
);

module.exports = accessLogStream;