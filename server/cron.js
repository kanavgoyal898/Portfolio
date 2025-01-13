import cron from "cron";
import https from "https";

import dotenv from "dotenv";
dotenv.config();

const backendUrl = process.env.API_URL;
const job = new cron.CronJob("*/10 * * * *", function () {
  console.log("Restarting server...");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted successfully.");
      } else {
        console.error(
          `Failed to restart server. Status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (error) => {
      console.error("Error restarting server:", error);
    });
});

export default job;
