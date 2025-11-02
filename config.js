const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,252685625385";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,252685625385";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "252685625385,252685625385";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_58_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjL3lqTm5mOXd5V05yZFp4WDVyVlJBWXhLZGZoL0EyY3Nid2pqZ3c2SWFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY4NTYyNTM4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUMxN0I1RUUwMzJENjZCQTY3QTQxRkI1NzAxRjBDRTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzYyMTA2Mjk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjg1NjI1Mzg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQ0E4QUE4QTNBNjlGMTA4OTQ1MjRGMkRBMTQwMUM5MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NjIxMDYyOTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ2hIbHBPa2pUdS1KVmpkTExPT0g3UVwiLFxuICBcInBob25lSWRcIjogXCI5NWRmODgzMS1jY2NkLTRmNmUtYmUxNi1jYTVmN2JlZTRlZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAyNDYsXG4gICAgICAxMDksXG4gICAgICAyNTQsXG4gICAgICAzMSxcbiAgICAgIDIyMyxcbiAgICAgIDEyNyxcbiAgICAgIDExOSxcbiAgICAgIDk2LFxuICAgICAgMjM3LFxuICAgICAgMTU1LFxuICAgICAgMTUsXG4gICAgICAxMzUsXG4gICAgICAyMTgsXG4gICAgICAxMjQsXG4gICAgICAyMDMsXG4gICAgICAxODgsXG4gICAgICA2NyxcbiAgICAgIDE5NSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICA1OSxcbiAgICAgIDE4NixcbiAgICAgIDE0MCxcbiAgICAgIDMxLFxuICAgICAgMjM0LFxuICAgICAgMjE2LFxuICAgICAgMTY4LFxuICAgICAgMTksXG4gICAgICAyOSxcbiAgICAgIDIzMCxcbiAgICAgIDkxLFxuICAgICAgMTU5LFxuICAgICAgMjUsXG4gICAgICAxOTMsXG4gICAgICA0NyxcbiAgICAgIDEzLFxuICAgICAgODIsXG4gICAgICAyNTAsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdXBxdlVDRUs2M25zZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlSLzVwY1FXcVFuZkJreFVoYTFFWlVuYm9odDEvZWI2Tnp1SDFjNFEvUTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU05sNCtuRC80U3lSbC82dVlCMG9FZkJXRE5uUjI2d1FIRG5USGdRWHg2b0RRVzFEU3dBcUswQ3BsTEQyZ2sxeXozZGJtMUJJcUMxc244R0IwVmdPQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZDIwMW1RYWVxUk96dmZRMlpQOU5lQUZaOGJ3bGhhdUQzaU5Md0xoYk1IRVAwUHYvZU56b2ZRTTRsYmc0Vkd0TmZIUzR4TXd0UFNYeU9KdVA1b2trQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODU2MjUzODU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzUxODM5NzI5Nzg4NTI6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLijaPijaPig53wn42/4pyY4pyYwrnijaPig53hl7BPzaHNnOGVvOGXqUHNoc2c4ZGOP2zZrc2cXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODU2MjUzODU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc2MjEwNjI5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlFL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUVfXy5qc29uIjogIntcImtleURhdGFcIjpcIkNKNVd6NEVFa3NVZGR3SkV3aHJUb0EzblEvNmZEYkYrTDhnNWRmYnV0OTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzgyOTMxMTc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NjIxMDYyOTMzNDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MOHAZZ",
  ownername:process.env.OWNER_NAME|| "MOHAZZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",





