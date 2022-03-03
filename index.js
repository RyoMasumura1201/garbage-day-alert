const line = require("@line/bot-sdk");
require("dotenv").config();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new line.Client(config);

const main = async () => {
  const messages = [
    {
      type: "text",
      text: "いっせい送信です！",
    },
  ];

  try {
    const res = await client.broadcast(messages);
    console.log(res);
  } catch (error) {
    console.log(`エラー: ${error.statusMessage}`);
    console.log(error.originalError.response.data);
  }
};

main();
