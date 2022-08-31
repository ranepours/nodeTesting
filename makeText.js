/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

//generate text from markov machine
const generateText = (text) => {
    let machina = new markov.MarkovMachine(text);
    console.log(machina.makeText());
}

//read file and generate text
const makeText = (path) => {
    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.log(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } generateText(data);
    })
}

//read url and make text
async function makeTextURL(url){
    let res;
    try{
        res = await axios.get(url);
    } catch(err){
        console.log(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
    } makeText(res.data);
}

//interpret command line and go from there
let [method,path] = process.argv.slice(2);
if(method === "file"){
    makeText(path);
} else if (method === "url"){
    makeTextURL(path);
} else {
    console.log(`METHOD UNKNOWN: ${method}`);
    process.exit(1);
}