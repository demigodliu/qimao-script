const Koa = require('koa');
const app = new Koa();
const schedule = require("node-schedule");
const request = require("./tools/request");
const sendMail = require("./tools/mail");

const core = async () => {
  const url = 'https://xiaoshuo.wtzw.com/api/v1/sign-in/sign-in-banner?sign=33655f28ef18012076d91811923449d6';
  const options = {
    headers: {
      Accept: "*/*",
      "App-Version": "7200020",
      "Application-Id": "com.yueyou.cyreader",
      Authorization: "eyJhbGciOiJSUzI1NiIsImNyaXQiOlsiaXNzIiwianRpIiwiaWF0IiwiZXhwIl0sImtpZCI6IjE1MzEyMDM3NjkiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2ODI2MTE3NjYsImlhdCI6MTY4MTMxNTc2NiwiaXNzIjoiIiwianRpIjoiOThlYWEwZTg5NmY2ODdmMThlNTJiZTU2NGRhMTA1ZWYiLCJ1c2VyIjp7InVpZCI6MTQxMTQwNTUyLCJuaWNrbmFtZSI6IuiJvuWwlOaziuasoSIsImltZWkiOiIiLCJ1dWlkIjoiIiwiZGV2aWNlSWQiOiIiLCJyZWdUaW1lIjoxNjE3MTAyMzIxLCJ2aXBFeHBpcmVBdCI6MCwic21faWQiOiIyMDIxMDMzMDE5MDUwNmFlNmUxYjUwZmY1MGNkNGRmOGNhMzQzMzY2YmJmNTg5MDE4Y2YyNmEyMGFlNjBhMSIsIm51dCI6MTYxNzEwMjMyMSwiaWZ1IjowLCJpc19yYmYiOjAsImFjdF9pZCI6MCwiYmluZF9hdCI6MCwidGlkIjoiRDJ5cGtxV2I1eG9wNEV2ekc0VGg0Rk1uY09HbUNqNVVEcE5xTFdRU0dsOGpzWDNiIiwidF9tb2RlIjoyfX0.eT9GISxamJTfoDmbs0pL7YC5EYOHkUAR8VswWMcnOaot0DxCr7RbQy5CyQ331R24zM4iB8PgQMHRXt5TZoPEIhtLeo4mKjQYQjWUlXSG97GeP_yKVZDpVPBKmA-h-1FnPOLTx8zq4iC0ir2v4Z90U2tzecW2a8wIdNIujo_iHr8",
      Channel: "qi-appstore_wm",
      "Is-White": "0",
      "Net-Env": "1",
      Platform: "ios",
      "Qm-Params": "cLG1pypxHTZ5H5w5uln5tq2Qpq-5A5GIkT-lF-geg3UIkT4wthFUgfgQFT0lN3UagfpakTgnNeKeAfg5taG5Ozo7paHWH-owOyn2H5w5OlJUOzN2uq2-HTZ5HeflNeglghFlth2IAI-QN0pok3UakT-lthOYFeHEkTN0NhFwN5HjHz2Qpq-5A5GIkT-lF-geg3UIkT4wthFUgfgQFT0lN3UagfpakTgnNeKeAfg5taGMOSReuyR-tq2-HTZ5kIGw3UkChfYU3EGWkM17u2RQN-YsNzNTk2GruRk03yNDFE1YACpHNMUTOS1oqIR2H5w5OEkxuy2TCENTBEG2HTZ5garYNIf5taGUuq2-HTZ5FM4YN-GIge0QFM4lgaMMNhoItfHnNTfQFToyF-4eghOrge2IH5w5pyRlmqN2tq2-HTZ5F-ZLRfglgeNt3fo4uyGCRhkiilU-gyQMkokvhzJUmfuamhRiCaJgNyoZgfFY3oGE4Mx3mqUg3zRf4UNqgexImqUSgRxjRyn3OzU0uSGRgl1wFUpgAhxIueMJH5w5BqJ-pqw5A5G1fyxDBzfng5wnH5w5OE2etCp2O5HWHT0ltTF7g3HjHSkLuCNMpqFQmqkz43HWHT0lgexaAhRytfpykTgQNI4rkaMrAIFltfgYNh4nNfHENIR0NLGJ",
      Reg: "3062555618",
      Sign: "718c95928c2c1e8500e17695c78b0896"
    }
  }
  /** 签到 */
  await request(url, options);
  /** 通知 */
  sendMail(`用户【艾尔迫次】已自动签到!`);
}

app.listen(8000, () => {
  console.log("[8000]服务器启动成功!");
  schedule.scheduleJob('06 06 00 * * *', () => {
    core();
  })
})
