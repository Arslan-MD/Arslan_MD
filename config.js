const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBESlljckdUd2haUnRsTU1mYUVVN0ltZEtqU3QzNmYxMVFocmM2c0dIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1ZXR3U0Y3MwOEMyazBCT01lSHNRSEoxeGJteEY3Wml5NWxWOTNyTk5WYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRHBmUmlpbEVjQjZPbXRwVVNUbWFlMWFDWUlBMmwrL2o3TUUyaWYvMDBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMlVKY0NvMXRmRy9heWVNYmFtSlhYLzFFOXBNMk5DMS8wSWllVVlvQ1VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDa0l6MXdzTU5YMmYzU1N5LzkyamhaR2JhN3A2N2xyajg4dWwyYTIrbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5xRUN1anBwRFUwQmJBb1c3eXY0UkJIUk5vSU5wL1FHcDViQnpUaDY1eUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE52Wkhnd1RnNFMwbVZVM3pKT1pDTG85MHVnZ3pJN3ppaCt6VmxrdnpXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmkwa01rMktlcGlsV0VsNWJnT1pSeWd0UlBlNnhkaWhWMmprRm9tVkNoOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpQlJ2eENMWnRzd042NW8vRmxGcWtWUnZFSzFvbzRtcnRqZVFlZVp0OUVkQ3JEZVJHb3pOdlkwMVo0RDV5R3JXUWRQNlFHOTYrL0djOUY3NlpTbWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5Ijoidk50SkV4Z3J5bFQyQzRpZUtYS2w4aHdTYmFjMjZZOCtnN2t2dUFPN2xPOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNzM2NjA0NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDk4Mzc5MzRFOTZCMEEwN0ZGM0EyQzFDNUYyQTcyNjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDk4MTU0OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDczNjYwNDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUzOTgyNDk4QTBEOURDNTQ2Q0Q2NDhDNkI0MTYwNTM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ5ODE1NTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxCRDRaNFlGIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6MzdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6MzdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMjVxZjBFRUtiSjY4UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0YXhlN0RFdDNrQzJBV1UwcVpNeTZuNFFiSFhTUGZFZjlqREdQdzFsQ2hzPSIsImFjY291bnRTaWduYXR1cmUiOiJQMGxTZ3pVSDJGbnpxN3djSkV1eWpJbTNnOGZxb2tOY1ZRUGZScHBrZnpzVGFoVDBhMkFDTXdIb2s5Q3B1UTFlUGhocXE1VGV0TG1DU0VpTXlQV01Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVUV6Si8yQWxlK2sxWmFWdVc5Zi96OGFUZmpJMHNtWWlCZmpQWDhkR1Y2QTBoZk42MnRNNnVIS0xKNTMrUUJkL202RHg2cG92UXVqd2VjUENsQTA3aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUdzWHV3eExkNUF0Z0ZsTkttVE11cCtFR3gxMGozeEgvWXd4ajhOWlFvYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0OTgxNTQ1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ksci8e.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923073660479",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 SpIdiEe*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://https://files.catbox.moe/ksci8e.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923073660479",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
