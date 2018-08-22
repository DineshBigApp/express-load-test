var request = require('request');
var moment = require('moment');
module.exports = {

    checkUrl: (req,res)=> {
        let data = req.body;
        let timeDetails = {};
        let timeForEachResponse = [];
        var options = {
			method: data.method,
            url: data.url,
            headers: {
                'content-type': 'application/json'     
            },
			json: data.request
        };
        let startTime = moment(new Date()).format("mm:ss:SSS");
        timeDetails.startTime = startTime;
        var count = data.count;
        for(let i=0; i<=count; i++){
            request(options, function (error, response, body) {
                if (error)
                    console.log(error);
                else{
                    let responseTime = moment(new Date()).format("mm:ss:SSS");
                    timeForEachResponse.push({count:i,responseTime:responseTime});                  
                    if(i==count){
                        let endTime = moment(new Date()).format("mm:ss:SSS");
                        timeDetails.endTime = endTime;
                        timeDetails.timeForEachResponse = timeForEachResponse;
                        res.status(200).json(timeDetails);
                    }
                    console.log(JSON.stringify(body));
                }
            });
            
        } 
        
       
    }
}