const line = require("@line/bot-sdk");
require("dotenv").config();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);

const main = async () => {
  const week = new Date().getDay();

  console.log(week);

  let text;
  switch (week) {
    case 1:
      text = "明日は燃えるゴミの日です!";
      break;
    case 2:
      text = "明日はペットボトル、缶、びんの日です!";
      break;
    case 3:
      text = "明日は資源ごみの日です!";
      break;
  }

  const messages = [
    {
      type: "text",
      text: text,
    },
  ];

  if (text) {
    try {
      const res = await client.broadcast(messages);
      console.log(res);
    } catch (error) {
      console.log(`エラー: ${error.statusMessage}`);
      console.log(error.originalError.response.data);
    }
  }
};

main();
