const line = require("@line/bot-sdk");
require("dotenv").config();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);
exports.handler = async (event) => {
  const date = new Date();
  console.log(date);
  const week = date.getDay();

  console.log(week);

  let text;
  switch (week) {
    case 1:
    case 4:
      text = "明日は燃えるゴミ(家庭ゴミ)の日です!";
      break;
    case 2:
      text = "明日は缶・ビン・ペットボトルゴミの日です!";
      break;
    case 3:
      text = "明日はプラスチック容器包装ゴミの日です!";
      break;
    case 5:
      date.setDate(date.getDate() + 1);
      const tomorrowDate = date.getDate();
      console.log(tomorrowDate);
      if (1 <= tomorrowDate && tomorrowDate <= 7) {
        text = "明日は段ボールの回収日です!";
      }
  }

  const messages = [
    {
      type: "text",
      text: text,
    },
  ];

  console.log("test1");
  console.log(text);
  console.log("test2");
  if (text) {
    try {
      const res = await client.broadcast(messages);
      console.log("成功");
      console.log(res);
    } catch (error) {
      console.log(`エラー: ${error.statusMessage}`);
      console.log(error.originalError.response.data);
    }
  }
};
