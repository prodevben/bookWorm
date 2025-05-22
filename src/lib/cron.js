import cron from "cron"
import https from "https"

const job = new cron.CronJob("*/14 * * * *",function () {
    https
        .get(process.env.API_URL, (res) => {
            if(res.statusCode === 200) console.log("GET request sent successfully");
            else console.log("GET request failed", res.statusCode);
        })
        .on("error", (e) => console.log("Error while sending request",e));
})

export default job

// CRON JOB EXPLANATION
// Cron Jobs are scheduled tasks that run periodically at fixed intervals
//we want to send 1 GET request for every 14 mins

//How to define a "Schedule"?
//You define a schedule using cron expression ,  which consists of five fields representing

//!Minute , hour, day of month, month, day of week

