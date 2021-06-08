//©2021 - BestMat - BestDodger - Bestproduct - All rights reserved
const execSync = require('child_process').execSync;
const fs = require("fs");
console.log("Welcome to BestProduct!")
module.exports.startDevServer = function(type, func){
    if(type == "desktop"){
        const cmd = "npm start";
        const options = {
            encoding: 'utf8'
        };
        console.log(execSync(cmd, options));
    }
    (func)()
}
