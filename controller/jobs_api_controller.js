const http = require("https");
const id ='b6212235'
const key ='c92c425722177749b142d38034c628d8'
const jobs='what=Nodejs&what_and=React'

const options = `https://api.adzuna.com/v1/api/jobs/in/search/5?app_id=${id}&app_key=${key}&${jobs}`

module.exports.jobsApi =function(req,res){
    let data ={}
    const reqq = http.request(options, function (ress) {
         chunks = [];    
        ress.on("data", function (chunk) {
            chunks.push(chunk);
        });    
        ress.on("end", function () {
            const body = Buffer.concat(chunks);
            data =body.toString()
            data = JSON.parse(data)    
            console.log(data)  
            return res.render('jobsapi',{
                title:'jobs',
                body:data.results
            }) 
        });
    }); 
    reqq.end();
    
    
}

