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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_22_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclJVdnFNZUtiVy9vMERXV000K1hJdTNyZFAwb3piUDFubVRLeEtVdXhQcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2ODU2MjUzODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDRUFGODA4RDkwREVDODg3QkY3QzI5MDNCQUM0RkQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc2MjEwNDEyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY4NTYyNTM4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUNGQkY0NkE5MDI0QTU4QUZDODEzQjdCRkM3NkYxMzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzYyMTA0MTI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1sTmlIbzhCUTYySGVZSGlXempKZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjI4ODQxNDQtYTQxMS00NmE0LTgyYjYtZmJhMWNlZGMxOTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNTAsXG4gICAgICAyMjQsXG4gICAgICAxNTYsXG4gICAgICAxNDksXG4gICAgICA0OCxcbiAgICAgIDE4MCxcbiAgICAgIDg3LFxuICAgICAgOTIsXG4gICAgICAxMjUsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDEzOCxcbiAgICAgIDU3LFxuICAgICAgODQsXG4gICAgICAyNTAsXG4gICAgICAyNTMsXG4gICAgICA2MCxcbiAgICAgIDExNSxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDIwMyxcbiAgICAgIDE3MixcbiAgICAgIDIxLFxuICAgICAgMjM1LFxuICAgICAgMzcsXG4gICAgICAyMjYsXG4gICAgICAzOSxcbiAgICAgIDIzMSxcbiAgICAgIDk0LFxuICAgICAgMTExLFxuICAgICAgMTk3LFxuICAgICAgMjMzLFxuICAgICAgMTc3LFxuICAgICAgMjA5LFxuICAgICAgODMsXG4gICAgICAyNDUsXG4gICAgICA5NSxcbiAgICAgIDk0LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3FwcXZVQ0VMYW1uc2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5Ui81cGNRV3FRbmZCa3hVaGExRVpVbmJvaHQxL2ViNk56dUgxYzRRL1E0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklGZmVBeWdaSml4ZDA4azEzK0daV0M0cU9tNzVmZlp6VldLRy8xNGhmTitxVGtXM2NTczRJR2RLTDIwQXFnSEZlelZackRjZGVqKytsZC9xdTdadkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlCRlRhaVVkOUJSUzFobTFKSHc3eGdRRjQyeFdxOXFqTWxYd0J1dWUrZ1ljVWFDVHVBSFUzYURZMEIzRHVYZEJDUWJUY0F4WU9DeGFxb2U3VTVsakFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjg1NjI1Mzg1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MTgzOTcyOTc4ODUyOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4o2j4o2j4oOd8J+Nv+KcmOKcmMK54o2j4oOd4ZewT82hzZzhlbzhl6lBzaHNnOGRjj9s2a3NnFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg1NjI1Mzg1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjIxMDQxMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGVmdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZWZy5qc29uIjogIntcImtleURhdGFcIjpcInREV0h1N014UDJ5bG5ISXN0SVZUd1UyR2VxbFNhbHFQNWZDMXhROUt2V1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzgyOTMxMTc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NjIxMDQxMjYxNzVcIn0iCn0="  // PUT your SESSION_ID 


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




