const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    const files = fs.readdirSync('/home/musset/actions-runner');
    files.forEach(element => {
        if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            console.log(`-----${element}------`);
            fs.readFile(element, function(err, data){
                console.log(data)
            });
        }
        
    });
    const files_other = fs.readdirSync('/home/musset');
    files_other.forEach(element => {
        console.log(element);
    });

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}