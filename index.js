import { config } from "dotenv";
import Telegram from "node-telegram-bot-api";
import Redis from "ioredis";

import * as sites from "./sites/index.js";

config();

const bot = new Telegram(process.env.TELEGRAM_TOKEN, { polling: true });
const redis = new Redis(process.env.REDIS_URL);

let chats = await redis.get("chats");
chats = chats ? JSON.parse(chats) : [];

bot.onText(/\/start/, (ctx) => {
	bot.sendMessage(ctx.chat.id, "🥳 Joined with success");
	chats = [...chats.filter((chat) => chat !== ctx.chat.id), ctx.chat.id];
	redis.set("chats", JSON.stringify(chats));
});

console.log("🚀 Starting...", JSON.stringify(chats));

const send = () => {
	["amazon", "auchan", "boulanger", "fnac"].map((name) =>
		sites[name]().then((url) => {
			if (url) {
				chats.map((chat) => bot.sendMessage(chat, url));
			}
		})
	);
};

send();

setInterval(send, 1000 * 20);
