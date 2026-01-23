const fs = require('fs');
const path = require('path');
const settings = require('./settingss');

// 🔧 CONFIGURATION INITIALIZATION
// ============================================
// Load environment variables from config.env if exists
if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// 📦 HELPER FUNCTION
// ============================================
// Convert string values to boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

// 🔑 API KEY MANAGEMENT
// ============================================
// Global API key configuration with fallback support
// Primary: settings.js → Secondary: process.env → Fallback: Default
global.btc = settings.btc || process.env.BTC_API_KEY || 'Apikey_Lu_Mas';
global.betabotz = settings.betabotz || process.env.BETABOTZ_API_KEY || 'Apikey_Lu_Mas';
global.geminiai = settings.geminiai || process.env.GEMINIAI_API_KEY || 'Apikey_Lu_Mas';
global.geminimaker = settings.geminimaker || process.env.GEMINIMAKER_API_KEY || 'Apikey_Lu_Mas';
global.lolkey = settings.lolkey || process.env.LOLHUMAN_API_KEY || 'Apikey_Lu_Mas';
global.fgsiapi = settings.fgsiapi || process.env.FGSI_API_KEY || 'Apikey_Lu_Mas';

// ⚠️ CRITICAL SECTION - DO NOT MODIFY
// ============================================
// API endpoint configuration
global.APIs = {
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = {
  'https://api.botcahx.eu.org': global.btc
}

// 🤖 BOT CONFIGURATION EXPORT
// ============================================
// Developer: ArslanMD Official
// Bot Name: Arslan-MD
// Repository: https://github.com/Arslan-MD/Arslan_MD
// Version: 5.0.0

module.exports = {
  // ========================
  // 🤖 BOT CORE SETTINGS
  // ========================
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkgyWHRLcHlJUC9jSzlhdS9HMXRpc29md1FONHl3OEkzTEdDdngybmRVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHdUdWZoN3dQc0h4aWZ4QWJrOUNVOThWV3dkZlZBUkxYUGgvUkw5MzVFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSE4zNGdhVTI2dk1jU0lydkY0U3pYUSsyTko2NTZVMzlhUWtvWExmYWt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cUYwQTV0Uk9jQThNTmhrOVVORXRUbHEwalFUemxjV1RrNVBPdVVHTGpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJN20rNjNVV0pmNndlWWV6VzJjYW5LazF1VUZtS2FrSE0xbTBwTnp4WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ6bEdQbnJWSmtPRnBDb1hOdkNxTzAxczdxN2JIUzBSQUtsaDRuOHpOekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dGUHNpK3I2alMwbXFWRVA0VFRYZnk0NDBCQ1QvNVZaTlFkT2xaZ2RFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm9GcmY4eDllY1h3M0JyeEZDZlI5SWttNVQrL2VzdHdmZUgzTlFaUEl4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVUWm1ITkFrMWRwMStwUlRlQzFIcXJ2MFRIV2ozSlFDMUpmQnh6UWNobWFlMC9LK3VaaXdQZFJueGJDTlhjSHZmSGhmYVZ3L3JBWjJranNiYnpmRUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJBRUpIT29IU0hiTUxVWnNCZHFpeGpiUkZNTVB1eGE3aG5rdUZoVFVEV09JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI5NDc0MDU3MjMxMTozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjI5OTQ5MjI4ODEwNTk6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTamlVZ1FnYnZPeXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhFSUp0M0t1OWpNNDQ5OFhxTnAzS29wVTRuMUY1ak5EbjV4SkxJeVNIVEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpzTVlxbVRLOXN0bkhobXdWcTg1dUp2ZmpjR0RqTjZhNG9GUDIvdlQrd1lGQVJ0VHlmT2ZUVVYzNnlnWTllTHAra25udFBvTXFORE1xM2o3QXEwc0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1b2VKTy9uejM0WUpwL3lxVHpOam1EYVA4aHd5RnN0VEZpS3dUdDFkVXJqcVhCaEtoK1QxcXhuT3g2MkFIWmwxOWZEaTVnWDZianNaZGplcmdWY1lBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwNTcyMzExOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1JDQ2JkeXJ2WXpPT1BmRjZqYWR5cUtWT0o5UmVZelE1K2NTU3lNa2gweSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY5MTg0NjU2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
  PREFIX: settings.PREFIX || process.env.PREFIX || ".",
  CHATBOT: settings.CHATBOT || process.env.CHATBOT || "off",
  BOT_NAME: settings.BOT_NAME || process.env.BOT_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  MODE: settings.MODE || process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/Arslan-MD/Arslan_MD",
  PAIRING_CODE: process.env.PAIRING_CODE || 'true',
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ========================
  // 👑 OWNER & DEVELOPER
  // ========================
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "923237045919",
  OWNER_NAME: settings.OWNER_NAME || process.env.OWNER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV_NAME: process.env.DEV_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  DEV: process.env.DEV || "923237045919",
  DEVELOPER_NUMBER: '923237045919@s.whatsapp.net',

  // ========================
  // 🔐 API KEY INTEGRATION
  // ========================
  BTC_API_KEY: global.btc,
  BETABOTZ_API_KEY: global.betabotz,
  GEMINIAI_API_KEY: global.geminiai,
  GEMINIMAKER_API_KEY: global.geminimaker,
  LOLHUMAN_API_KEY: global.lolkey,
  FGSI_API_KEY: global.fgsiapi,
  
  // ========================
  // 🎵 MEDIA & AUDIO
  // ========================
  MENU_AUDIO_URL: settings.MENU_AUDIO_URL || process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/xkvhbi.mp3',
  AUDIO_URL: settings.AUDIO_URL || process.env.AUDIO_URL || 'https://files.catbox.moe/j88eur.mp3',
  AUDIO_URL2: settings.AUDIO_URL2 || process.env.AUDIO_URL2 || 'https://files.catbox.moe/wlt7ge.mp3',

  // ========================
  // 📧 NEWSLETTER SETTINGS
  // ========================
  NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363348739987203@newsletter',
  N_NAME: process.env.N_NAME || "❀༒★[ᴀʀꜱʟᴀɴ-ᴍᴅ]★༒❀",

  // ========================
  // ⚡ AUTO-RESPONSE SYSTEM
  // ========================
  AUTO_REPLY: settings.AUTO_REPLY || process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: settings.AUTO_STATUS_REPLY || process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Just seen ur status 😆 🤖",
  READ_MESSAGE: settings.READ_MESSAGE || process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "📵 Calls are not allowed on this number unless you have permission. 🚫",
  ALIVE_IMG: settings.ALIVE_IMG || process.env.ALIVE_IMG || "https://files.catbox.moe/16i1l7.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴀʀꜱʟᴀɴ-ᴍᴅ✦ ғʀᴏᴍ ᴀʀꜱʟᴀɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ : github.com/Arslan-MD/Arslan_MD",

  // ========================
  // ✨ REACTION & STICKER
  // ========================
  AUTO_REACT: settings.AUTO_REACT || process.env.AUTO_REACT || "false",
  OWNER_REACT: settings.OWNER_REACT || process.env.OWNER_REACT || "false",
  CUSTOM_REACT: settings.CUSTOM_REACT || process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: settings.CUSTOM_REACT_EMOJIS || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴀʀꜱʟᴀɴ-ᴍᴅ",
  AUTO_STICKER: settings.AUTO_STICKER || process.env.AUTO_STICKER || "false",

  // ========================
  // 🎭 MEDIA AUTOMATION
  // ========================
  AUTO_RECORDING: settings.AUTO_RECORDING || process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: settings.AUTO_TYPING || process.env.AUTO_TYPING || "false",
  MENTION_REPLY: settings.MENTION_REPLY || process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: settings.MENU_IMAGE_URL || process.env.MENU_IMAGE_URL || "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🛡️ SECURITY & PROTECTION
  // ========================
  ANTI_DELETE: settings.ANTI_DELETE || process.env.ANTI_DELETE || "true",
  ANTI_CALL: settings.ANTI_CALL || process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: settings.ANTI_BAD_WORD || process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: settings.ANTI_LINK || process.env.ANTI_LINK || "true",
  ANTI_SPAM: settings.ANTI_SPAM || process.env.ANTI_SPAM || "true",
  ANTI_VV: settings.ANTI_VV || process.env.ANTI_VV || "true",
  DELETE_LINKS: settings.DELETE_LINKS || process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: settings.ANTI_BOT || process.env.ANTI_BOT || "true",
  PM_BLOCKER: settings.PM_BLOCKER || process.env.PM_BLOCKER || "true",

  // ========================
  // 💫 BOT BEHAVIOR & APPEARANCE
  // ========================
  DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀꜱʟᴀɴ-ᴍᴅ",
  PUBLIC_MODE: settings.PUBLIC_MODE || process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: settings.ALWAYS_ONLINE || process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: settings.AUTO_STATUS_REACT || process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_SEEN: settings.AUTO_STATUS_SEEN || process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: settings.AUTO_BIO || process.env.AUTO_BIO || "false",
  WELCOME: settings.WELCOME || process.env.WELCOME || "false",
  GOODBYE: settings.GOODBYE || process.env.GOODBYE || "false",
  ADMIN_ACTION: settings.ADMIN_ACTION || process.env.ADMIN_ACTION || "false",
  version: process.env.version || "2.0.1",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Asia/Karachi",

  // ========================
  // 📊 LOGGING & DEBUGGING
  // ========================
  LOGGING_ENABLED: process.env.LOGGING_ENABLED || "false",

  // ========================
  // ⏳ SYSTEM VARIABLES
  // ========================
  wait: "Please wait...",
  BOTCAHX_API_KEY: global.btc,

  // ========================
  // 🖼️ THUMBNAIL & ASSETS
  // ========================
  thumbnailutama: "https://files.catbox.moe/16i1l7.jpg",

  // ========================
  // 🔗 SOCIAL LINKS
  // ========================
  instagramowner: "https://instagram.com/arslanmdofficial",
  
  // ========================
  // 📸 MENU CATEGORY IMAGES
  // ========================
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg",
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/16i1l7.jpg"
  }
};
