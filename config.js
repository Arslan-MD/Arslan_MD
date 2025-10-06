const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VDQVJGOG1UR3JENXdmWDU5Q05DdExha1NodTFTekhJekZXbVg1dzEwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01NSUhBakVVc3QrTy9WV1c4QUF1UTZPWFRuSTMrK2ZHQWdnTHBRa1dVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS3d0ZkFSb2h5WEg1Z3hXNy9lZURYem82c3l5c1dBWURseWxPK21VREd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSVlYKzJaaDJ2d2pjR3lHb3Fvc2JVNFhnS04zNDNpSTU5d0xmeXFqandJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGMEY2RUl0dlBvZzRYQXNjR2pYMS9Nak5IZEtYRHNPUlFRaEo3VG11M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh3Qng1RWJ1eStnbGVnM29QVXVSRzFkL0NNTzFqYXpEc2svekhnaFk5WFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhHaTl1WnRXNElvcTYrUEhPUHF4V25oQW1zMk9XNUwwZnhMY25pT2hIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWS93RVM3UzcxTVdqbE53QTgzcVZERDhPU2N1ZTl3YWE5Y2J0Q2U3eGZIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMrRjZMVlIzbW9JTG9IRWJ5endkUTI5cklEN1pVWWg0VVdBeHRuU1I5THNaa1FwTnIzOW05Nlk2K3BwL09Ka3plTXpyeGFBOUJaV1BkWERlQVNCYUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJad21qQ3NWOFRXUWJkWE1DVm1XQzdETG8xSmwxM0tZWVhic3hRaTZEeE9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc4NDIxODA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MkNEMUU2REZEOThENDUyNzA3QUFGQUFDRDk3RTdGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjI5NDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc4NDIxODA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MERGOTJGN0MxMkNFQTA3OTlBOTA0QTU2OEJERDA1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjI5NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzc4NDIxODA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RkVBN0I2MDJCOThCRjU1QkUzQzA1MDc4QjJCRjhBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3MjI5NDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRaUVcyMVNTIiwibWUiOnsiaWQiOiI5Mzc3ODQyMTgwNDoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDcnlzdGFsIFNlcmVuYSIsImxpZCI6IjIwNzYxMDczMzE3MDgxNzoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTYnk0RUNFTGI3ak1jR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVMd3lZekdFb2d6UVNUV0RaS3VONWd5UGZnWHdUekR2NUJpdndQK0tsaEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFEZ3I3U0t4ckk1eHRIbVNVRklmOG50MDNyOTBRTzNQOWhWa3hyVzVlNVhVQ01majlkTG11dUd0amVoaSs2NHJ0T1JOMDhYK1VRcmpOTngvMzViV0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmb3E0WElQYitUZmRqYWFXeFV6VjJVMU4xa1RZcmtTK3ZEdkVwMC9tcG13KytVNnlJLyt4SlhpRE9sMWNwQkQ4a2JrLzVPbFNXSm0xbmlHV1NQQjBDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkzNzc4NDIxODA0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVTOE1tTXhoS0lNMEVrMWcyU3JqZVlNajM0RjhFOHc3K1FZcjhEL2lwWVIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTcyMjkzOCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLTDcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
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
AUTO_REACT: process.env.AUTO_REACT || "true",
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
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
