const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Y5NHhtdTBDd1ZFSUZJNDJJRDM0OS92OUYyd093NUNYK1NVc0hvY2tsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtuQXNtTzRoVWh5aWgrMDY2VU91TGYrMnplbkF6L1dhYlBoYTllSURCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTGtEcHBGMCtHTS9aMUhBeDd5MkZEZWFWU2VTOTNUVk9iU3hQKzFJbFVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJka0NFTWQxZGIzNlo5Q2pMcnYzVmNqdEhONU1rM3BzTGZnQU4xYmVzUmdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHUWNWK1BOamczSEdZajF6V0p6Ti9EN0djMStFYUMvS1hsQmFqWmdOSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKdTV6dEJYc3ZBczgyNE1hRU5KNmdDNi8xRFFZUlM5aWl1eWs1dERZV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0YxUHA3cnZkU2xDd0RzOEpHYzdYYlROb3hyWHJEQlpjUmp1ZHJNaGpWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibG1rZU16TjVmeGVvVXhuM09MY3ZFV1lLZk1KOFVDNXNjcDE2a1JER2JuWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRaa3Z2S1Jyekd5ajc3bWNhenJjTnZYakZiOFZjeHZLb2JValdMVTREWGY5RDhpODBMbVY4YzBZQ1BjRzd1eGlQcnY1MnFvc2lkK3VLSmVMcG5NVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJ1dTRxbnptWjJuL2pvWmFCTUU3N29DanR4cFBYOTdxck5UMnc0QzkrYk5RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI4ODAzMTU0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MDNEQTI1MTZDMTRGQ0RGOTVFRjM3OEU5MkMzQUI2NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NzQ1MjM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyODgwMzE1NDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTc3MDM1REVDMThBQTIyNkNCQUUzQjkxOEMxMjNFMUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Nzc0NTIzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjg4MDMxNTQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMwOEMxQkE5RTNCQ0U1QkM5REY0MTE3Q0VEQTg2NkRGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3NDUyNDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRNV1hTOVNZIiwibWUiOnsiaWQiOiI5MjMyODgwMzE1NDg6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwODU2MDMzMTU4MzcwNjoyQGxpZCIsIm5hbWUiOiIq5bC65Y2C776M5Y2p44SW5Y2C44SSIOS5meS5h+S4guWNhOWNguWHoCoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svUnNNZ0JFTStnbE1ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZiRWxCbkFXaFlHaGVSNTBkbEJJNlZ3aERQWHNjcGdRKys2Wmo3Y3hpa1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZVUGFkWmlZTHFlWUhzTzYzUS96S3NTY2dkeUVnM1h4bkVCNDBjOE5DeThKZktnTUxyeVRhZFQ3ZzkzbEwycmRZTEdzYTBmcFlxcjRtY1VhK0hxK0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuL29DZ0xkY3BEcWEzdVcrbTFWOC9hd1JHTEl3eTNWNmZraVE3elA1dTJNNWNTMytvN2xxUEM3REM3M2dCVDE4VnF0bTFaOVM0L09tYitUUW95cllCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4ODAzMTU0ODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZXeEpRWndGb1dCb1hrZWRIWlFTT2xjSVF6MTdIS1lFUHZ1bVkrM01ZcEUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Nzc0NTIzNSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJZ0wifQ==",
//
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
