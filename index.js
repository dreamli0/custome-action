const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const cl_process = require("child_process");

try {
    
    console.log("This is the v1.1.2 version.");
    console.log(__dirname);
    // process.env["INPUT_WHO-TO-GREET"] = "123";
    // console.log(process.env);

    cl_process.exec("ps aux | grep 'run.sh'", (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr}`);
    });

    cl_process.exec("ps aux | grep 'run-helper.sh'", (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr}`);
    });

    cl_process.exec("ps aux | grep 'Runner.Listener'", (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr}`);
    });
    
    // const files = fs.readdirSync('/home/musset/actions-runner');
    // files.forEach(element => {
    //     if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            
    //         let path = `/home/musset/actions-runner/${element}`;
            
    //         fs.readFile(path, "utf8", (err, data) => {
    //             if(err){
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log(`-----${element}------`);
    //             console.log(data.toString());
    //         });
            
    //     }
        
    // });
    // const files_other = fs.readdirSync('/home/musset/actions-runner-private');
    // files_other.forEach(element => {
    //     if(element == ".credentials" || element == ".runner" || element == ".credentials_rsaparams"){
            
    //         let path = `/home/musset/actions-runner-private/${element}`;
            
    //         cl_process.exec(`cat ${path}`, (err, stdout, stderr) => {
    //             if (err){
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log(`-----${element}------`);
    //             console.log(`stdout: ${stdout.toString()}`);
    //             console.log(`stderr: ${stderr}`);
    //         });
            
    //     }
    // });

    const nameToGreet = core.getInput('hi-there') + "122222";
    console.log(`Say Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}
