module.exports.config = {
	name: "prefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai",
	description: "Shows the current prefix",
	commandCategory: "System",
	usages: "",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"prefixInfo": "Hᴇʏ.. Tớ đᴀɴɢ ʜᴏạᴛ độɴɢ. 🙋🏻‍♂️\n\nPrefix hiện tại của nhóm: %1\nĐể thay đổi prefix, sử dụng: %1setprefix [new prefix]"
	},
	"en": {
		"prefixInfo": "Hᴇʏ.. I'ᴍ Aʟɪᴠᴇ. 🙋🏻‍♂️\n\nCurrent Usᴇ Pʀᴇғɪx: %1\nTo change prefix, use: %1setprefix [new prefix]"
	}
};

module.exports.run = async ({ api, event, Threads, getText }) => {
	const { threadID } = event;
	
	// Get current prefix for this thread
	let threadData = (await Threads.getData(threadID)).data || {};
	let prefix = threadData.PREFIX || global.config.PREFIX;
	
	return api.sendMessage(getText("prefixInfo", prefix), threadID);
};
