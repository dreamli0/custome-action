const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    console.log(__dirname);
    
    const nameToGreet = core.getInput('hi-there');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("value", "normal value");


} catch (error) {
    core.setFailed(error.message);
}
