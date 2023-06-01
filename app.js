const Koa = require('koa');
const app = new Koa();
const schedule = require("node-schedule");
const request = require("./tools/request");
const sendMail = require("./tools/mail");

const core = async () => {
  const url = 'https://xiaoshuo.wtzw.com/api/v1/sign-in/sign-in-banner?sign=33655f28ef18012076d91811923449d6';
  const options = {
    headers: {
      reg: "3062555618",
      sign: "b7fd7613907fc6eb575b2117b30a71fd",
      Authorization: "eyJhbGciOiJSUzI1NiIsImNyaXQiOlsiaXNzIiwianRpIiwiaWF0IiwiZXhwIl0sImtpZCI6IjE1MzEyMDM3NjkiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2ODY5MzM3NjksImlhdCI6MTY4NTYzNzc2OSwiaXNzIjoiIiwianRpIjoiNTUzYzViYjQyMDE0ZWM2M2FhMDI2ODcyOGEwMjZmZTUiLCJ1c2VyIjp7InVpZCI6MTQxMTQwNTUyLCJuaWNrbmFtZSI6IuiJvuWwlOaziuasoSIsImltZWkiOiIiLCJ1dWlkIjoiIiwiZGV2aWNlSWQiOiIiLCJyZWdUaW1lIjoxNjE3MTAyMzIxLCJ2aXBFeHBpcmVBdCI6MCwic21faWQiOiIyMDIxMDMzMDE5MDUwNmFlNmUxYjUwZmY1MGNkNGRmOGNhMzQzMzY2YmJmNTg5MDE4Y2YyNmEyMGFlNjBhMSIsIm51dCI6MTYxNzEwMjMyMSwiaWZ1IjowLCJpc19yYmYiOjAsImFjdF9pZCI6MCwiYmluZF9hdCI6MCwidGlkIjoiRDJ5cGtxV2I1eG9wNEV2ekc0VGg0Rk1uY09HbUNqNVVEcE5xTFdRU0dsOGpzWDNiIiwidF9tb2RlIjoyfX0.l59j_Rd9LqFIqdys-gowc2hXiHYtsSu3I53u642DX1qBr3gn_N-tO3TwahhLcz0cJUzDfLHm8KG3UCLnS6s49g9scG5pRbcPuYnl6MDhLbjsyqIsYNpS4Wcs2psan9xYnH2EcdIujEmzDEeUtndAf4CwqnplIgBCDf-xb_QyT_k",
      "qm-params": "cLGepCNemqJ7tq2-HTZ5gh4rNh4eNeOlAIFwN3rENT05taGUuq2-HTZ5FM4YN-GIge0QFM4lgaMMNhoItfHnNTfQFToyF-4eghOrge2IH5w5mqkz43HWH5HjHzGL4qY-HTZ5FCswByf5taGMOSReuyR-tq2-HTZ5kIGw3UkChfYU3EGWkM17u2RQN-YsNzNTk2GruRk03yNDFE1YACpHNMUTOS1oqIR2H5w5BqJ-pqw5A5G1fyxDBzfng5wnH5w5mqU2m3HWH-NyAhpaFegntfNyNT9QNIfnFLUagh4UtfHnk-Gyge0EAIgYFLHjHSNM4Ck14UJe4lJLp3HWHT97AhFUH5w5uln5tq2Qpq-5A5GIkT-lF-geg3UIkT4wthFUgfgQFT0lN3UagfpakTgnNeKeAfg5taG-pCp14lfQmqF5A5GaB-koklG8f-kSkMuEuMn4qf1FgMxlu2sFqRRWREOekE2_F-NoF-UvNyoxg0x1g-kWchpiflQ7OUwD4eGt4UHMBR4L3o2DRlfYpy21kEkUu-QZcCx-heoE8hM5taGMOSReuyR-tq2-pz05A5HnNTgrFT-Uk5Uyk-4ethFlA0FQAIKMN5UIAhflghRaNeFUkIO5taGeBERL4lRUmqF5A5HTNh4Ege4nNI4QAfgrA3MMk-RotfGyAh4QNe2IgTuygMFUNI9lH5w5OE2etCp2O5HWHT0ltTF7g3GJ",
      "application-id": "com.yueyou.cyreader",
    }
  }
  /** 签到 */
  const res = await request(url, options);
  console.log(res);
  /** 通知 */
  sendMail(`用户【艾尔迫次】已自动签到!`);
}

app.listen(8000, () => {
  console.log("[8000]服务器启动成功!");
  schedule.scheduleJob('06 06 00 * * *', () => {
    core();
  })
})

