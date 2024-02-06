/**
   * Create By Raiden.
   * Contact Me on wa.me/62859180658541
   * Follow https://github.com/Raiden
*/

/**
	* Recode by jas kiding
	* Contact Me on wa.me/6282139672290
	* Edit premium di command 'addprem' & 'delprem'
**/
require('./config')
require('./setting.js') 
require('./lib/stickmenu.js') 
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, makeInMemoryStore } = require('@whiskeysockets/baileys')
const pino = require('pino') 
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const jsobfus = require('javascript-obfuscator')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const cheerio = require('cheerio') 
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const acorn = require('acorn');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { remini } = require('./lib/remini')
const packageData = require('./package.json');
const { wikimedia, quotesAnime, styletext, ringtone, pinterest, wallpaper } = require('./lib/scraper')
const scp1 = require('./lib/scraper1') 
const scp2 = require('./lib/scraper2')
const scp3 = require('./lib/scraper3') 
const photooxy = require('./lib/photooxy')
const textpro = require('./lib/textpro')
const ffstalk = require('./lib/ffstalk')
const githubstalk = require('./lib/githubstalk')
const { jadibot, conns } = require('./lib/jadibot')
const { obfus } = require('./lib/obfus')
const { hit } = require('./lib/hit') 
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/youtube') 

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
	const { indonesia, english } = require(`./language`)
        let lang = global.db.data.user[m.sender]?.lang
        if (lang === "id") {
            lang = indonesia
        } else if (lang === "en") {
            lang = english
        } else {
            lang = indonesia
        }
            /**if(!global.public && !isCreator) {
        	command += "wa.me/6282139672290"
        }
        if(global.dont_disturb) {
        	for(let i = 0; i < m.mentionedJid.length; i++) {
        	if(m.mentionedJid == global.owner) {
        	await hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
            await hisoka.sendMessage(m.chat, { text: `Jangan tag owner ya kak @${m.sender.split("@")[0]}`, mentions: [m.sender]}) 
            }
            }
      }**/
   function checkSyntax(code) {
  try {
    acorn.parse(code, { ecmaVersion: 'latest' });
    return true;
  } catch (error) {
    return error
  }
}


    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime) 
        
        const uptime = await runtime(process.uptime())
         const isBanned = global.db.data.user[m.sender]?.banned ?? false
         const isJadibot = global.db.data.user[m.sender]?.jadibot ?? false
         const bahasa = global.db.data.user[m.sender]?.lang ?? global.language

	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isPremium = isCreator || (global.db.data.user[m.sender]?.premium ?? false) 
    const userLimit = global.db.data.user[m.sender]?.limit ?? (isPremium ? global.limitawal.premium : global.limitawal.free);
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.user[m.sender] = {};
            
if (typeof global.db.data.user[m.sender] === 'undefined') {
	global.db.data.user[m.sender] = {};
	} 


            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = true
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

	
	// reset limit every 12 hours
       let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.user)
            for (let jid of user) 
global.db.data.user[jid].limit = ((global.db.data.user[jid]?.premium ?? false) ? global.limitawal.premium : global.limitawal.free)
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        //let cron = require('node-cron')
        
        
        try {
                    ppuser = await hisoka.profilePictureUrl(m.sender, 'image')
                } catch (err) {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }
        
	// auto set bio
	if (global.autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.updateProfileStatus(`Hi 😁👋, im ${global.botname} |🏃Runtime : ${uptime}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lagu`)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak gambar`)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? kirim ${prefix}tebak lontong`)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        async function loading () {
/**let anu = lang.loading() 
let { key } = await hisoka.sendMessage(m.chat, {text: lang.wait()})
await sleep(Math.floor(Math.random() * 501) + 500) 
await hisoka.sendMessage(m.chat, {text: anu[0], edit: key });
for (let jaskiding = 0; jaskiding < 100; jaskiding += Math.floor(Math.random() * 70)) {
await hisoka.sendMessage(m.chat, {text: lang.loading(jaskiding)[1], edit: key });
}
await hisoka.sendMessage(m.chat, {text: anu[2], edit: key });**/
}

const downloadImage = async (url, fileName) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(fileName, response.data);
  } catch (error) {
    console.error('Gagal mengunduh gambar:', error);
  }
};
        
        
const botVersion = packageData.version;
/**let anuAnime = await quotesAnime()
                let randomAnu = anuAnime[Math.floor(Math.random() * anuAnime.length)]
                const randomQuotes = `"${randomAnu.quotes}"\n\n-${randomAnu.karakter}`**/
let randomAnu = await fetchJson('https://raw.githubusercontent.com/AnandaGTPS/database/main/text/katailham.json') 
const randomQuotes = `"${randomAnu[Math.floor(Math.random() * randomAnu.length)]}"`
        const limited = (userLimit == 0) ? true:false
        const xlsx = fs.readFileSync(global.xlsx) 
        const tanggal = moment().tz('Asia/Jakarta').format('YYYY-MM-DD');
		const WIB = moment().tz('Asia/Jakarta').format('HH:mm');
		const WIT = moment().tz('Asia/Makassar').format('HH:mm');
		const WITA = moment().tz('Asia/Jayapura').format('HH:mm');
		const isNsfw = false //db.data.chats[m.chat].nsfw && m.isGroup
		
        const cmdGrup = ["linkgroup","ephemeral","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","mute","promote","demote","antitoxic"]
        const cmdDown = ["tiktoknowm","tiktokmp3","twitter","twittermp3","facebook","ytmp3","ytmp4","getmusic","getvideo","soundcloud","mediafire","gitclone"]
        const cmdSearch = ["play","yts","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","playstore","drakor","iqra","hadist","alquran","tafsirsurah","pixiv","ssweb","servermc","recipe","readrecipe","happymod"]
        const cmdStalk =["ghstalk","igstalk"]
        const cmdNews = ["infocnn","infogempa","infotsunami","infoantara","infocnb","kompasnews"]
        const cmdAnime = ["waifu","cry","kill","hug","pat","lick","kiss","bite","yeet","neko","bully","bonk","wink","poke","nom","slap","smile","wave","awoo","blush","smug","glomp","happy","dance","cringe","highfive","shinobu","megumin","handhold","loli","husbu","shota","akira","akiyama","ana","asuna","ayuzawa","boruto","chitoge","deidara","doraemon","elaina","emilia","erza","gremory","hestia","hinata","inori","isuzu","itachi","itori","kaga","kagura","kakashi","kaori","keneki","kotori","kurumi","madara","mikasa","miku","minato","naruto","nezuko","onepiece","pokemon","rize","sagiri","sakura","sasuke","shina","shinka","shizuka","toukachan","tsunade","yuki","cosplay","randomanime"]
        const cmdNsfw = ["waifus","blowjob","neko","trap","milf","ahegao","ass","bdsm","cuckold","cum","eba","ero","foot","fendom","gifs","glasses","hentai","jahy","nsfwmanga","mastubation","neko2","nsfwloli","orgy","panties","pussy","tentacles","thighs","yuri","zettai"]
        const cmdNabi = ["adam","ayyub","daud","dzulkifli","harun","hud","ibrahim","idris","ilyas","ilyasa","isa","ishaq","ismail","luth","muhammad","musa","nuh","sholeh","sulaiman","syuaib","yahya","yaqub","yunus","yusuf","zakariya "]
        const cmdAsupan = ["cogan","asupan","indonesia","malaysia","china","korea","jepang","vietnam","thailand","bocil","gheayubi","hijab","kayes","notnot","panrika","randomcecan","randomcecan2"," santuy","tiktokgirl","ukhty"]
        const cmdRanText = ["quotesanime","katabijak","couple","wangy","asmaulhusna","katailham","faktaunik","dare","truth"]
        const cmdRanImg = ["coffe","couple","meme","darkjokes","aesthetic","antiwork","bike","blackpinks","boneka","car","cat","doggo","justina","kpop","pubg","rose","ryujin","ulzzanggirl","ulzzangboy","wallhp","wallml","cyberspace","gamewallp","islamic","mountains","progamming","technology"]
        const cmdAi = ["simsimi","chatgpt","chatgb","perbaiki","gambar","makima","zeta","frieren","kobo","gura","moona"]
        const cmdOxy = ["shadow","cup","romantic","smoke","naruto","tiktok","butterfly","metalic","kayu","horror","permen","silk","batik","nature3d","summer3d","fall","neonlights","lovemessage","glowingneon","woddenboard","burnpaper","flowerheart","write","narutobanner","underglass","doublelove","coffecup"," underwaterocean","smokyneon","starstext","rainboweffect","balloontext","metalliceffect","embroiderytext","flamingtext","stonetext","writeart","summertext","wolfmetaltext","rosestext","naturetypography","quotesender","shinetext"]
        const cmdTextPro = ["led","christmas","magma","space","transformer","thunder","cinematichorror","summer","summer2","bussines","lightglow","batman","sketch","3drainbow","halloweenskeleton"]
        const cmdEphoto = ["blackpink","bear","avengers","angel","graffiti","pornhub","mountain","purple"]
        const cmdGabut = ["checkme","cekganteng", "cekgay", "cekjomok", "cekhitam", "cektolol", "cekbego", "cekpintar", "cekbodoh", "cekmales", "cektakut", "cekberani", "cekbaik", "cekjahat", "cekasik", "cekngeselin", "cekgila", "cekhoki", "ceklesbi", "cekkuat", "ceksetia", "cekalay", "cekwaras", "cekiri", "cekgoblok", "cekbabi", "cekjelek", "cekbeban", "cekanjing", "ceknolep", "cekharam", "cekfakboy", "cekfakgirl", "ceksange", "cekalim", "cekkeren", "cekwibu", "cekkul", "cekcool", "cekbaper","apakah"]
        const cmdFun = ["halah","hilih","huluh","heleh","holoh","jadian","jodohku","delttt","tictactoe","family100","tebak","math","suitpvp"]
        const cmdPrimbon = ["nomorhoki","artimimpi","artinama","ramaljodoh","ramaljodohbali","suamiistri","ramalcinta","cocoknama","pasangan","jadiannikah","sifatusaha","rezeki","pekerjaan","nasib","penyakit","tarot","fengshui","haribaik","harisangar","harisial","nagahari","arahrezeki","peruntungan","weton","karakter","keberuntungan","memancing","masasubur","zodiak","shio"]
        const cmdConv = ["attp","ttp","toimage","removebg","sticker","stickerwm","emojimix","emojimix2","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","smeme","bass","blown","deep","earrape","fast","fat","nightcore","reverse","robot","slow","tupai","toanime","enc"]
        const cmdMain = ["ping","owner","menu","delete","infochat","quoted","listpc","listgc","listonline","speedtest","setcmd","listcmd","delcmd","lockcmd","addmsg","listmsg","getmsg","delmsg","anonymous","start","next","keluar","reportbug","join","jadibot","stopjadibot"]
        const cmdOwner = ["react","chat","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot","spam","autorespon","welcome","goodbye","promote","addprem","delprem","banuser","unbanuser","listuser","autoreadsw","resetlimit"]
        const cmdDev = ["getcase","listcase", "addcase","delcase","setcase","eval","exec"]
        const cmdWar = ["warcall","clearwarcall","bugtroli","brutalwarcall","clearbrutalwarcall"]
        const cmdSound = ["sound1","sound2","sound3","sound4","sound5","sound6","sound7","sound8","sound9","sound10","sound11","sound12","sound13","sound14","sound15","sound16","sound17","sound18","sound19","sound20","sound21","sound22","sound23","sound24","sound25","sound26","sound27","sound28","sound29","sound30","sound31","sound32","sound33","sound34","sound35","sound36","sound37","sound38","sound39","sound40","sound41","sound42","sound43","sound44","sound45","sound46","sound47","sound48","sound49","sound50","sound51","sound52","sound53","sound54","sound55","sound56","sound57","sound58","sound59","sound60","sound61","sound62","sound63","sound64","sound65","sound66","sound67","sound68","sound69","sound70","sound71","sound72","sound73","sound74","sound75","sound76","sound77","sound78","sound79","sound80","sound81","sound82","sound83","sound84","sound85","sound86","sound87","sound88","sound89","sound90","sound91","sound92","sound93","sound94","sound95","sound96","sound97","sound98","sound99","sound100","sound101","sound102","sound103","sound104","sound105","sound106","sound107","sound108","sound109","sound110","sound111","sound112","sound113","sound114","sound115","sound116","sound117","sound118","sound119","sound120","sound121","sound122","sound123","sound124","sound125","sound126","sound127","sound128","sound129","sound130","sound131","sound132","sound133","sound134","sound135","sound136","sound137","sound138","sound139","sound140","sound141","sound142","sound143","sound144","sound145","sound146","sound147","sound148","sound149","sound150","sound151","sound152","sound153","sound154","sound155","sound156","sound157","sound158","sound159","sound160","sound161"]
        
        const menuMain = `╭─────✧ *Main Menu*
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
const menuDev = `╭─────✧ *Advanced Developer Tools*
│
${cmdDev.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuOwner = `╭─────✧ *Owner Menu*
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuWar = `╭─────✧ *War Menu*
│
${cmdWar.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuGrup = `╭─────✧ *Group Menu*
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuDown = `╭─────✧ *Downloader Menu*
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuSearch = `╭─────✧ *Search Menu*
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuStalk = `╭─────✧ *Stalker Menu*
│
${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuNews = `╭─────✧ *News Menu*
│
${cmdNews.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuAnime = `╭─────✧ *Anime Menu*
│
${cmdAnime.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuNsfw = `╭─────✧ *Nsfw Menu*
│
${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuNabi = `╭─────✧ *Kisah Nabi Menu*
│
${cmdNabi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuAsupan = `╭─────✧ *Asupan Menu*
│
${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuRanText = `╭─────✧ *Random Text Menu*
│
${cmdRanText.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuRanImg = `╭─────✧ *Random Image Menu*
│
${cmdRanImg.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuAi = `╭─────✧ *AI Menu*
│
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuOxy = `╭─────✧ *Photo Oxy Menu*
│
${cmdOxy.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuTextPro = `╭─────✧ *Text Pro Menu*
│
${cmdTextPro.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuEphoto = `╭─────✧ *Ephoto360 Menu*
│
${cmdEphoto.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
const menuGabut = `╭─────✧ *Gabut Menu*
│
${cmdGabut.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuFun = `╭─────✧ *Fun Menu*
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuPrimbon = `╭─────✧ *Primbon Menu*
│
${cmdPrimbon.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
        const menuConv = `╭─────✧ *Converter Menu*
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
╰───────✧`
const menuSound = `╭─────✧ *Sound Menu*
│
${cmdSound.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}sound${i + 1}`).join('\n')}
│
╰───────✧`
const menu = `╭─────►「  *Menu* 」
│
│❑ ${prefix}allmenu
│❑ ${prefix}menumain
│❑ ${prefix}menudev
│❑ ${prefix}menuowner
│❑ ${prefix}menuwar
│❑ ${prefix}menugroup
│❑ ${prefix}menuanime
│❑ ${prefix}menunsfw
│❑ ${prefix}menukisahnabi
│❑ ${prefix}menuasupan
│❑ ${prefix}menuphotooxy
│❑ ${prefix}menutextpro
│❑ ${prefix}menuephoto
│❑ ${prefix}menuconverter
│❑ ${prefix}menufun
│❑ ${prefix}menugabut
│❑ ${prefix}menuprimbon
│❑ ${prefix}menurandomtext
│❑ ${prefix}menurandomimage
│❑ ${prefix}menuai
│❑ ${prefix}menusearch
│❑ ${prefix}menudownload
│❑ ${prefix}menusound
│
╰───────►`
        const allCmd = `${menuMain}\n\n${menuDev}\n\n${menuOwner}\n\n${menuWar}\n\n${menuGrup}\n\n${menuAnime}\n\n${menuNsfw}\n\n${menuNabi}\n\n${menuAsupan}\n\n${menuOxy}\n\n${menuTextPro}\n\n${menuEphoto}\n\n${menuConv}\n\n${menuGabut}\n\n${menuFun}\n\n${menuPrimbon}\n\n${menuRanText}\n\n${menuRanImg}\n\n${menuAi}\n\n${menuSearch}\n\n${menuDown}\n\n${menuSound}`

const total_fitur = cmdMain.length + cmdGrup.length + cmdDown.length + cmdSearch.length + cmdAnime.length + cmdNsfw.length + cmdRanText.length + cmdRanImg.length + cmdAi.length + cmdOxy.length + cmdFun.length + cmdPrimbon.length + cmdConv.length + cmdOwner.length + cmdAsupan.length + cmdNews.length + cmdEphoto.length + cmdTextPro.length + cmdNabi.length + cmdStalk.length + cmdWar.length + cmdSound.length + cmdDev.length

        /**const info = `Halo, ${m.pushName} 🤫
Salam kenal dari saya, ${botname}. Saya adalah asisten WhatsApp yang akan selalu siap membantu Anda dengan berbagai keperluan Anda. 😊
Jika ada sesuatu yang perlu Anda tanyakan atau bantuannya, jangan ragu untuk berbicara dengan saya. Ayo, kita mulai! 💬🚀

【 *YOUR INFO* 】
❑ *Nomor* : ${m.sender.split('@')[0]}
❑ *Status* : ${isPremium ? "Premium":"Free"} user
❑ *Limit* : ${userLimit}

【 *BOT INFO* 】
❑ *Bot name* : ${global.botname}
❑ *Bot version* : ${botVersion}
❑ *Bot owner* : ${global.owner[0]}
❑ *Total fitur* : ${total_fitur}
❑ *Prefix use* : ${prefix}
❑ *Runtime* : ${uptime}

【 *TIME* 】
❑ *Tanggal* : ${tanggal}
❑ *WIB* : ${WIB}
❑ *WIT* : ${WIT}
❑ *WITA* : ${WITA}\n\n`**/
const info = lang.info(m, botname, botVersion, isPremium, userLimit, owner, total_fitur, prefix, uptime, tanggal, WIB, WIT, WITA)
            function userDataWrite() {
    global.db.data.user[m.sender] = {
      name: m.pushName,
      number: m.sender.split("@")[0],
      premium: isPremium,
      banned: isBanned,
      jadibot: isJadibot, 
      reg: true,
      limit: userLimit,
      last_place: m.chat,
      last_cmd: command,
      last_time: `${tanggal} ${WIB} WIB`, 
      lang: bahasa
   }
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

            function userData() {
                hisoka.sendPresenceUpdate("composing", m.chat)
if(!global.db.data.user[m.sender].reg) { 
	if(global.log) {
hisoka.sendMessage(`${global.owner[0]}@s.whatsapp.net`, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: `「New User」\n❑ Name: ${m.pushName}\n❑ Nomor: ${m.sender.split("@")[0]}\n❑ Tanggal : ${tanggal}\n❑ Jam: ${WIB} WIB\n❑ Last Command : ${command}`, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
};
            userDataWrite() 
            }
            }
            if(global.db.data.user[m.sender].reg) {
            	userDataWrite() 
            }
            function revLimit() {
            	if(global.revlimit) {
            	global.db.data.user[m.sender].limit -= 1
            }
            }
            
            process.on('stopWhatsAppBot', () => {
  console.log('Stopping the WhatsApp bot...');
  process.exit(0);
});
function stopWhatsAppBot() {
  console.log('Stopping WhatsApp bot requested.');
  process.emit('stopWhatsAppBot');
  }
/**if ((m.chat !== '120363186659496161@g.us') || (m.chat !== '120363221617903059@g.us')) {

  return;

}**/
  if (m.chat == '120363186659496161@g.us' && m.mtype == 'conversation') {
  let encodedCommand = encodeURIComponent(command);
  let encodedText = encodeURIComponent(text);
  let anu = await fetchJson(`https://aemt.me/openai?text=${encodedCommand}+${encodedText}`);
  await m.reply(util.format(anu.result))
      return
} 
   /** if(m.chat == '120363187740403528@g.us' && m.mtype == 'conversation') {
    let encCmd = await encodeURIComponent(command)
    let encText = await encodeURIComponent(text)
    let anu = await fetchJson(`https://aemt.me/bard?text=${encCmd}+${encText}`) 
    m.reply(util.format(anu.result)) 
    return
  } **/

  
/**if(!m.isGroup) {
	let { key } = await hisoka.sendMessage(m.chat, { text: lang.wait()}, { quoted: m }) 
	let anu = await fetchJson(`https://aemt.me/openai?text=${text}`) 
	await hisoka.sendMessage(m.chat, { text: anu.result, edit: key }) 
	return
	}**/
    /**if(isCreator) {
        m.reply(jsonformat(qmsg))
        m.reply(jsonformat(global.stickmenu)) 
        return
        }**/
    //if(isCreator) return m.reply(jsonformat(m)) 
  if(m.mtype === 'stickerMessage') {
  let anu = jsonformat(m.msg) 
  let regex = /"mediaKey": "(.*?)"/;
  let match = anu.match(regex);
  	if(match[1] === global.stickmenu.message.stickerMessage.mediaKey) {
command = 'menu'
}
  }
  if((command+args[0]) == 'araara' || command == 'araara' || command == 'ara-ara') {
      let anu = await getBuffer(`https://github.com/AnandaGTPS/database/raw/main/sound/araara/${Math.floor((Math.random() * 6) + 1)}.mp3`) 

await hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
      return
      }
    /**let cooldown = {}
        if(!cooldown[m.sender] || ((cooldown[m.sender] - Date.now()) < 3000)) {
            cooldown[m.sender] = Date.now() 
            m.reply('ok') 
            } **/
    
        switch(command) {
        	case 'unlitroli': case 'bugtroli': {
  if(isBanned) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        if(!text) return m.reply(`Masukan jumlah! \n\ncontoh: ${prefix+command} 12`)
  await sleep(2000)
  let virgam = fs.readFileSync(`./media/nanzz.jpeg`)
if(isNaN(text)) return m.reply(`Error: jumlah harus bersifat angka, bukan "${text}"`) 
for (let i = 0; i < text; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Â© ${botname}`,jpegThumbnail: virgam}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1240,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6282139672290@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted : m})
hisoka.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
                case 'resetlimit': {
        	if(isBanned && !isCreator) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        let user = Object.keys(global.db.data.user)
            for (let jid of user) 
global.db.data.user[jid].limit = ((global.db.data.user[jid]?.premium ?? false) ? global.limitawal.premium : global.limitawal.free)
            hisoka.sendText(m.chat, "Reseted Limit", m) 
            }
            break 
                case 'colong': {
                    if(!isCreator) return
                    if(!text) return m.reply(lang.link()[1]) 
                    let teks = '[\n'
                    
                    let { key } = await hisoka.sendMessage(m.chat, { text: lang.wait() }) 
                    for(let i = 0; i < text.split("|")[1]; i++) {
                    let anu = await fetchJson(text.split("|")[0]) 
                    //teks += `"${anu.hasil}",\n`
                    
                    //teks += `{\n"index": ${i}, \n"author": "${anu.hasil.author}", \n"quotes": "${anu.hasil.quotes}"\n},\n`
                    teks += `${jsonformat(anu)},\n`
                    
                    await hisoka.sendMessage(m.chat, { text: i + "/" + text.split("|")[1], edit: key })
                        }
                   hisoka.sendText(m.chat, teks + "]", m) 
                    }
                break
                    
        	/*case 'bfgacha': {
  if (isBanned) return m.reply(lang.banned());
  userData();
  if (limited) return m.reply(lang.endLimit());
  revLimit();
  let anu = await fetchJson(`https://raw.githubusercontent.com/nperma/api-bloxfruit/main/scripts/bf-fruit/api.json`);
  let res = '';
  if (!text) {
    res = anu[Math.floor(Math.random() * anu.length)];
  }
  if (!isNaN(text)) {
    let fruitIndex = parseInt(text);
    if (fruitIndex >= 1 && fruitIndex <= anu.length) {
      res = anu[fruitIndex - 1];
    } else {
      return m.reply(`Error: buah dengan nomor "${text}" tidak di temukan, nomor yang tersedia adalah 1-${anu.length}`);
    }
  }
  let teks = `❑ Buah: ${res.buah}\n❑ Harga: ${res.harga}\n❑ Number: ${res.number}`;
  hisoka.sendImage(m.chat, res.img, teks, m);
}
break**/
        	case 'warcall': {
        		if(isBanned) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        if (!text || ((text.split("|")[1]) == undefined)) return m.reply(lang.warcall(prefix,command)) 
m.reply(lang.wait()) 
var call = { 
scheduledCallCreationMessage: {
callType: 2,scheduledTimestampMs:  Date.now() - 60000,title: ((text.split("|")[1]) + "\n").repeat(100) 
}}
hisoka.relayMessage(text.split("|")[0],call,{})
m.reply(lang.succes()) 
}
break
case 'clearwarcall': {
	if(isBanned) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        if (!text) return m.reply(lang.clearwarcall(prefix,command) )
	await hisoka.relayMessage(text,{
        scheduledCallCreationMessage: {
            callType: 'AUDIO',scheduledTimestampMs: Date.now() - 60000,title: 'Clear War call✅'
        }
    },{});
 m.reply('Sukses clear War call ke grup tujuan✅') 
}
break
case 'brutalwarcall': {
        		if(isBanned) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        if (!text || ((text.split("|")[1]) == undefined)) return m.reply(lang.warcall(prefix, command)) 
m.reply(lang.wait()) 
let teks = ''
for(i = 0; i < 500; i++) {
	teks += `${text.split("|")[1]}\n`
	}
var call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${teks}`
}}
let virgam = fs.readFileSync(`./media/nanzz.jpeg`)
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Â© ${botname}`,jpegThumbnail: virgam}}}
var order = generateWAMessageFromContent(text.split("|")[0], proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1240,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": teks, // 
"sellerJid": "6282139672290@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: text.split("|")[0]})
hisoka.relayMessage(text.split("|")[0], order.message, { messageId: order.key.id })
await sleep(3000) 
hisoka.relayMessage(text.split("|")[0], call, {})
await sleep(3000) 
hisoka.relayMessage(text.split("|")[0], order.message, { messageId: order.key.id })
m.reply(lang.succes()) 
}
break
case 'clearbrutalwarcall': {
	if(isBanned) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        if (!text) return m.reply(lang.clearwarcall(prefix, command)) 
        let clearWar = 'Clearing War Call'
        for(i = 0; i < 500; i++) {
        	clearWar += `\n`
        }
        hisoka.sendText(text, clearWar) 
        await sleep(3000) 
	await hisoka.relayMessage(text, {
        scheduledCallCreationMessage: {
            callType: 'AUDIO',
            scheduledTimestampMs: Date.now(),
            title: 'Clear War call✅'
        }
    }, {});
 m.reply('Sukses clear War call mode brutal ke grup tujuan✅') 
}
break
        	case 'banuser': case 'banneduser': case 'banned': {
        	if(isBanned && !isCreator) return m.reply(lang.banned()) 
        userData() 
        if(!isCreator) return m.reply(lang.ownerOnly()) 
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        global.db.data.user[users] = {};
        global.db.data.user[users].banned = true
        hisoka.sendText(m.chat, lang.banuser(), m) 
        }
        break
        case 'unbanuser': case 'unbanned': {
        if(isBanned && !isCreator) return m.reply(lang.banned()) 
                userData() 
                if(!isCreator) return m.reply(lang.ownerOnly())
if(!text) return m.reply(lang.target(prefix, command)) 
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        let isBan = (global.db.data.user[users]?.banned ?? false)  
if(!isBan) return m.reply(`Pengguna dengan nomor "${users}" sudah di unbanned`)
        global.db.data.user[users].banned = false
        await hisoka.sendText(m.chat, lang.unbanuser(), m) 
        }
        break
        case 'addpremium': case 'addprem': {
        	if(isBanned) return m.reply(lang.banned()) 
        userData() 
        	if(!isCreator) return m.reply(lang.ownerOnly())
        if(!text) return m.reply(lang.target(prefix, command)) 
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                let isPremi = (global.db.data.user[users]?.premium ?? false) 
                if(isPremi) return m.reply(lang.isPremi(users))
                global.db.data.user[users] = {}
                global.db.data.user[users].limit = global.limitawal.premium
                global.db.data.user[users].premium = true
                hisoka.sendText(m.chat, lang.prem(users), m) 
                }
                break
                case 'delpremium': case 'delprem': {
        	if(isBanned) return m.reply(lang.banned()) 
        userData() 
        	if(!isCreator) return m.reply(lang.ownerOnly())
        if(!text) return m.reply(lang.target(prefix, command)) 
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                let isPremi = (global.db.data.user[users]?.premium ?? false) 
                if(!isPremi) return m.reply(lang.isNotPremi(users))
                if (typeof global.db.data.user[m.sender] === 'undefined') return m.reply(`Pengguna dengan nomor "${users} tidak di temukan`) 
                global.db.data.user[users].limit = global.limitawal.free
                global.db.data.user[users].premium = false
                hisoka.sendText(m.chat, lang.delPrem(users), m) 
                }
                break
               case 'hit': {
               	let anu = await hit() 
               m.reply(jsonformat(anu)) 
               	}
               break
                case 'troli': {
                	if(!isCreator) return
                	let gamli = fs.readFileSync('./media/catalog.jpg') 
                	var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": gamli,
"itemCount": 1,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", 
"sellerJid": "0@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted : m})
hisoka.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'otakudesu': {
	if(isBanned) return m.reply(lang.banned()) 
                userData() 
m.reply(lang.wait()) 
let anu = await scp3.otakudesu(encodeURIComponent(text).toString()) 
let teks = `
*Judul* : ${anu.judul}
*Rate* : ${anu.rate}
*Episode* : ${anu.episode}
*Status* : ${anu.status}
*Rilis* : ${anu.rilis}
*Genre* : ${anu.genre}
*Batch* : ${anu.batch}

*SINOPSIS* : ${anu.desc}`

hisoka.sendImage(m.chat,anu.img,teks,m) 
}
break
                case 'getmenu': {
                	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                let anu = await hisoka.copyNForward(m.chat,global.stickmenu,true)
    hisoka.sendText(m.chat,'Ini adalah stiker menu',global.stickmenu) 
    }
    break
                case 'listcase': {
                	if(isBanned) return m.reply(lang.banned()) 
                if(!isCreator) return m.reply(lang.ownerOnly()) 
                userData() 
                let anu = await fs.readFileSync('./hisoka.js', 'utf8') 
                let regex = /case\s+'([^']+)'(?=\s*:)/g;
let matches = [];
let match;

while ((match = regex.exec(anu)) !== null) {
  matches.push(match[1]);
}
m.reply(`╭─────✧ 「 *List Case* 」
│
│⪼ Menampilkan x${matches.length} case
│
${matches.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ -> `+ v).join('\n')}
│
╰───────✧`) 
                }
                break
                case 'getcase': {
                	if(isBanned) return m.reply(lang.banned()) 
                if(!isCreator) return m.reply(lang.ownerOnly()) 
                if(!text) return m.reply(lang.query()[1]) 
               if(text === command || text === 'setcase' || text === 'listcase') return m.reply("Warn!!!") 
                userData() 
                let anu = await fs.readFileSync('./hisoka.js', 'utf8') 
let regex = new RegExp(`(case\\s+'${text}':[^]*?break)`, 'g');
let match = anu.match(regex) || [];
let splitBlocks = match.map(match => match.split(',').map(item => item.trim()));
if (splitBlocks.length > 0) {
	await fs.writeFileSync('getcase.js', splitBlocks.toString())
	let file = await fs.readFileSync('./getcase.js')
	let msg = await hisoka.sendText(m.chat, splitBlocks.toString(), m) 
    await hisoka.sendMessage(m.chat, { document: file, mimetype: 'text/javascript', fileName: text + ".js" }, { quoted: msg })
    await fs.unlinkSync('./getcase.js') 
} else {
  m.reply(`Tidak ditemukan blok kode untuk case '${text}'`);
}
                }
                break
                case 'setcase': {
  if (isBanned) return m.reply(lang.banned());
  if (!isCreator) return m.reply(lang.ownerOnly());
  if (!text) return m.reply(lang.query()[1]);
  userData();
  if (!m.quoted) return m.reply(lang.replyCode()) 
  let reg = new RegExp(`case\\s+'${text}':\\s*([^]*?)\\s*break`);
    let matches = m.quoted.text.match(reg) || [];
    let tes = await checkSyntax(`switch(command){\n${matches[0].toString().trim()}\n}`) 
  if (!tes) {
let { key } = await hisoka.sendText(m.chat, `Kode yang anda berikan mungkin terdapat error😔`, m) 
await sleep(3000) 
return hisoka.sendMessage(m.chat, { text: `${matches[1].toString().trim()}\n\n${tes.toString()}`, edit: key }) 
}
  try {
    let anu = await fs.promises.readFile('./hisoka.js', 'utf8');
    let regex = new RegExp(`(case\\s+'${text}':[^]*?break)`, 'g');
    let match = anu.match(regex) || [];

    if (match.length > 0) {
      let change = anu.replace(match[0], m.quoted.text);
      await fs.promises.writeFile('hisoka.js', change, 'utf8');
      m.reply(lang.done());
    } else {
      m.reply(`Tidak ditemukan blok kode untuk case '${text}'`);
    }
  } catch (error) {
    console.error(error);
    m.reply(lang.error());
  };
}
break
case 'addcase': {
  if (isBanned) return m.reply(lang.banned());
  if (!isCreator) return m.reply(lang.ownerOnly());
  if (!text) return m.reply(lang.query()[1]);
  userData()
  let reg = new RegExp(`:\\s*{([^]*?)}\\s*break`);
    let matches = text.match(reg) || [];
    let tes = await checkSyntax(`switch(command){\n${matches[0].toString().trim()}\n}`) 
  if (!tes) {
let { key } = await hisoka.sendText(m.chat, `Kode yang anda berikan mungkin terdapat error😔`, m) 
await sleep(3000) 
return hisoka.sendMessage(m.chat, { text: `${matches[1].toString().trim()}\n\n${tes.toString()}`, edit: key }) 
}
  try {
    let anu = await fs.promises.readFile('./hisoka.js', 'utf8');
      let change = anu.replace(/(default\s*:\s*)/, `${text}\n$1`);
      await fs.promises.writeFile('hisoka.js', change, 'utf8');
      m.reply(lang.done());
  } catch (error) {
    console.error(error);
    m.reply(error) 
      };
    }
                break
case 'delcase': {
                	if(isBanned) return m.reply(lang.banned()) 
                if(!isCreator) return m.reply(lang.ownerOnly()) 
                if(!text) return m.reply(lang.query()[1]) 
                userData() 
                let anu = await fs.readFileSync('./hisoka.js', 'utf8') 
let regex = new RegExp(`(case\\s+'${text}':[^]*?break)`, 'g');
let match = anu.match(regex) || [];
let splitBlocks = match.map(match => match.split(',').map(item => item.trim()));
if (splitBlocks.length > 0) {
	let anu = await fs.promises.readFile('./hisoka.js', 'utf8');
	let change = anu.replace(match[0], '') 
	await fs.promises.writeFile('hisoka.js', change, 'utf8');
	m.reply(lang.done())
} else {
  m.reply(`Tidak ditemukan blok kode untuk case '${text}'`);
}
                }
                break
                
						case 'zeta': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/5061a499eace584f526c8.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=${command}&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Vestia Zeta`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'frieren': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/3ae298c11358df04409b9.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=${command}&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Frieren`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'kobo': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/b5d992154c7c0fc23e036.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=Kobo+Kanaeru&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Kobo Kanaeru`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'shylily': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/5a44ea54d5327741c65e6.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=${command}&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Shylily`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'moona': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/d304e7c384d1ffa6d1260.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=Moona+Hoshinova&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Moona Hoshinova`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'gura': case 'gawrgura': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/10922e1fedbf9d8316801.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=Gawr+Gura&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Gawr Gura`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'makima': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) {
let { key } = await hisoka.sendMessage(m.chat, { text: lang.query()[1]})
await sleep(3000) 
await hisoka.sendMessage(m.chat, { text: lang.example(prefix, command)[1], edit: key })
return
}
                            var gam = "https://telegra.ph/file/76be54d092aa006352b7c.jpg"
						let anu = await fetchJson(`https://aemt.me/ai/c-ai?prompt=${command}&text=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.result, 
contextInfo: {
externalAdReply: {  
title: `Makima`, 
body: '',
thumbnailUrl: gam, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
        	case 'userlist':
case 'listuser': {
	if(isBanned) return m.reply(lang.banned()) 
	userData() 
  if (!isCreator) return m.reply(lang.ownerOnly());
let total = 0
  let capt = ``;
  for (const key in global.db.data.user) {
    const userData = global.db.data.user[key];
    if (userData.reg === true) {
      capt += `❑ Name: ${userData.name}\n`;
      capt += `❑ Number: ${userData.number}\n`;
	  capt += `❑ Status: ${userData.premium ? "Premium":"Free"} user\n`;
	  capt += `❑ Banned: ${userData.banned}\n`;
	  capt += `❑ Jadi bot: ${isJadibot}\n`;
	  capt += `❑ Limit: ${userData.limit}\n\n`;
      capt += `❑ Last time: ${userData.last_time}\n`;
      capt += `❑ Last cmd: ${userData.last_cmd}\n`;
      capt += `❑ Last place: ${userData.last_place}\n`;
      capt += `❑ Chat: https://wa.me/${userData.number}\n\n────────────────────\n\n`;
total++
    }
  }

  hisoka.sendMessage(m.chat,{
    document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: `「Database User」\n\nMenampilkan *×${total} user*\n\n` + capt,contextInfo: {
      externalAdReply: {
        title: botname,body: '',thumbnailUrl: urlmenu,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
      }
    }
  });
}
break
        case 'deleteuser': case 'deluser': {
        	if(isBanned) return m.reply(lang.banned()) 
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        if(users !== m.sender) userData() 
        	if(!isCreator) return m.reply(lang.ownerOnly())
        	if(!text) return m.reply(lang.target(prefix, command)) 
        if(!global.db.data.user[users]) return m.reply(lang.userNotFound(users)) 
	delete global.db.data.user[users]
  hisoka.sendText(m.chat, lang.deluser(users), m) 
}
break 
                case 'perbaiki': {
                    if(isBanned) return m.reply(lang.banned()) 
		userData() 
                    m.reply(lang.wait()) 
                    if(!m.quoted) m.reply(lang.replyText()) 
                    let anu = await fetchJson(`https://aemt.me/openai?text=perbaiki lah kode berikut:
${m.quoted.text}`) 
                    hisoka.sendMessage(m.chat, { text: anu.result, mentions: [m.sender] }, { quoted: m })
                    }
                break
                case 'toanime': {
                	if(isBanned) return m.reply(lang.banned()) 
                if(limited) return m.reply(lang.endLimit()) 
		revLimit() 
		userData()
		if (!/image/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
		let msg = lang.toanime() 
                    let { key } = await hisoka.sendMessage(m.chat, { text: lang.wait() }, { quoted: m })
                    let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                    let gam = await TelegraPh(media) 
                    await hisoka.sendMessage(m.chat, {text: msg[0], edit: key });
                    let anu = await fetchJson(`https://aemt.me/toanime?url=${gam}`) 
                    if(!anu.url?.img_crop_single ?? false) {
await hisoka.sendMessage(m.chat, {text: msg[2], edit: key })
hisoka.sendText(m.chat, anu.url, m) 
return
}
await hisoka.sendMessage(m.chat, {text: msg[1], edit: key });
hisoka.sendImage(m.chat, anu.url.img_crop_single, lang.succes(), m) 
await fs.unlinkSync(media)
}
break
/**case 'toanimehd': {
                	if(isBanned) return m.reply(lang.banned()) 
                if(limited) return m.reply(lang.endLimit()) 
		revLimit() 
		userData()
		if (!/image/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
		let msg = lang.toanime() 
                    let { key } = await hisoka.sendMessage(m.chat, { text: lang.wait() }, { quoted: m })
                    let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                    await hisoka.sendMessage(m.chat, {text: msg[0], edit: key });
                    let gam = await TelegraPh(media) 
                    let anu = await fetchJson(`https://aemt.me/toanime?url=${gam}`) 
                    await fs.unlinkSync(media)
                    await hisoka.sendMessage(m.chat, {text: msg[1], edit: key });
                    if(!anu.url?.img_crop_single ?? false) {
await hisoka.sendMessage(m.chat, {text: msg[3], edit: key })
hisoka.sendText(m.chat, anu.url, m) 
return
}
await hisoka.sendMessage(m.chat, {text: msg[1], edit: key });
await downloadImage(anu.url.img_crop_single, 'undefined.jpg') 
let reshd = await remini('./undefined.jpg', "enhance")
await hisoka.sendMessage(m.chat, {text: msg[2], edit: key });
hisoka.sendImage(m.chat, reshd, lang.succes(), m) 
//await fs.unlinkSync('./undefined.jpg') 
}
break
**/
	    case 'afk': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(lang.afk(m, text))
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
		if(isBanned) return m.reply(lang.banned()) 
		userData()
let anu;
try {
anu = await fs.readFileSync(global.donasi)
} catch (error) {
anu = urlmenu
}
	hisoka.sendImage(m.chat,anu,global.textdonasi,m) 
            }
            break
            case 'sc': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
if(!text) {
hisoka.sendMessage(m.chat,{ text: lang.sc(m),mentions: [m.sender,`6282139672290@s.whatsapp.net`]},{ quoted: m }) 
}
            }
            break
            case 'chat': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                if(!text) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0].toLowerCase() === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
		if(isBanned) return m.reply(lang.banned()) 
		userData()
		revLimit() 
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0].toLowerCase() === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}`)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!m.isGroup) return m.reply(lang.groupOnly()) 
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!m.isGroup) return m.reply(lang.groupOnly())
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'react': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
		if(isBanned) return m.reply(lang.banned()) 
if(!isCreator) return m.reply(lang.ownerOnly()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!text) return m.reply(lang.link()[0])
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(lang.link()[2]) 
                m.reply(lang.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                if (global.log) {
hisoka.sendMessage(`${global.owner[0]}.@s.whatsapp.net`,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: `「Bot Log」\nBot has been added by @${m.sender.split("@")[0]} \n\n❑ Date : ${tanggal}\n❑ Time : ${WIB} WIB\n❑ Link Group : ${text}`,contextInfo: {
externalAdReply: {  
title: botname,body: '',thumbnailUrl: urlmenu,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
}}})
}
            }
            break
            case 'leave': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                await hisoka.groupLeave(m.chat) 
                }
                break
            case 'setexif': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
               if (!isCreator) return m.reply(lang.ownerOnly())
               if (!text) return m.reply(lang.example(prefix, command)[3]) 
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(lang.exif())
            }
            break
	case 'kick': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!m.isGroup) return m.reply(lang.groupOnly())
        if (!isBotAdmins) return m.reply(lang.botAdmin()) 
        if (!isAdmins) return m.reply(lang.adminOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g,'')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat,users,'remove').then((res) => m.reply(res)).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!m.isGroup) return m.reply(lang.groupOnly())
        if (!isBotAdmins) return m.reply(lang.botAdmin()) 
        if (!isAdmins) return m.reply(lang.adminOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!m.isGroup) return m.reply(lang.groupOnly())
        if (!isBotAdmins) return m.reply(lang.botAdmin()) 
        if (!isAdmins) return m.reply(lang.adminOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!m.isGroup) return m.reply(lang.groupOnly())
        if (!isBotAdmins) return m.reply(lang.botAdmin()) 
        if (!isAdmins) return m.reply(lang.adminOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!isCreator) return m.reply(lang.ownerOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!isCreator) return m.reply(lang.ownerOnly())
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (!text) return m.reply(lang.query()[1]) 
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(lang.succes())).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (!text) return m.reply(lang.query()[1]) 
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(lang.succes())).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                if (!/image/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
                if (/webp/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(lang.succes())
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (!/image/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
                if (/webp/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(lang.succes())
                }
                break
            case 'tagall': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
let teks = lang.tagall(q) 
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!m.isGroup) return m.reply(lang.groupOnly())
            if (!isBotAdmins) return m.reply(lang.botAdmin()) 
            if (!isAdmins) return m.reply(lang.adminOnly())
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
               if (!m.isGroup) return m.reply(lang.groupOnly())
               if (!isBotAdmins) return m.reply(lang.botAdmin()) 
               if (!isAdmins) return m.reply(lang.adminOnly())
               if (!m.quoted) return m.reply(lang.totag(prefix, command)) 
               hisoka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
	        if(!isPremium && prem)return m.reply(lang.premOnly()) 
		revLimit() 
		if (!text) m.reply(lang.query()[0])
                let anu = await styletext(text)
                let teks = lang.search()[2] + "\n\n"
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'group': case 'grup': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isAdmins) return
if(!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (args[0].toLowerCase() === 'close'){
                    await hisoka.groupSettingUpdate(m.chat,'announcement').then((res) => m.reply(lang.group()[0])).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open'){
                    await hisoka.groupSettingUpdate(m.chat,'not_announcement').then((res) => m.reply(lang.group()[1])).catch((err) => m.reply(jsonformat(err)))
                } else {
                    hisoka.sendPoll(m.chat,lang.group()[2],[`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
             }
            }
            break
            case 'editinfo': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
             if (args[0].toLowerCase() === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(lang.group()[3])).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(lang.group()[4])).catch((err) => m.reply(jsonformat(err)))
             } else {
                hisoka.sendPoll(m.chat, lang.group()[2], [`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
            }
            }
            break
            case 'antilink': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (args[0].toLowerCase() === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(lang.switch(command)[1])
                db.data.chats[m.chat].antilink = true
                m.reply(lang.switch(command)[0])
                } else if (args[0].toLowerCase() === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(lang.switch(command)[3])
                db.data.chats[m.chat].antilink = false
                m.reply(lang.switch(command)[2])                 } else {
                 hisoka.sendPoll(m.chat, lang.group()[2], [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
             case 'mute': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (args[0].toLowerCase() === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0].toLowerCase() === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 hisoka.sendPoll(m.chat, lang.group()[2], [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isBotAdmins) return m.reply(lang.botAdmin()) 
                if (!isAdmins) return m.reply(lang.adminOnly())
                if (args[0].toLowerCase() === '1') {
                    await hisoka.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === '7') {
                    await hisoka.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === '90') {
                    await hisoka.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'off') {
                    await hisoka.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                    hisoka.sendPoll(m.chat, lang.group()[2], ["Ephemeral 1","Ephemeral 7","Ephemeral 90","Ephemeral Disable"])
                }
            }
            break
            case 'setnamabot': case 'setnamebot': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!text) return m.reply(lang.example(prefix, command)[7]) 
            let name = await hisoka.updateProfileName(text)
            m.reply(lang.editbot(text))
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!text) throw `this is a WhatsApp Bot named Novi Botz`
            let name = await hisoka.updateProfileStatus(text)
            m.reply(lang.editbot(name)[1])
            }
            break
            case 'remini': case 'hd': {
if(isBanned) return m.reply(lang.banned())
userData() 
    if ((/webp/.test(mime)) && (m.quoted.mtype == 'stickerMessage')) {
        m.reply(lang.wait()) 
        let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
        let ran = await getRandom('.png') 
        await exec(`ffmpeg -i ${media} ${ran}`,async (err) => {
            fs.unlinkSync(media)
            await sleep(3000) 
            let image = await fs.readFileSync(ran) 
            if (err) throw err
            proses = await remini(image,"enhance")
            let encmedia = await hisoka.sendImageAsSticker(m.chat,proses,m,{ packname: global.packname,author: global.author })
            await fs.unlinkSync(encmedia)
            await fs.unlinkSync(ran)
            return
        })
        } else if (/image/.test(mime)) {
        m.reply(lang.wait())
        let media = await quoted.download()
        let proses = await remini(media,"enhance")
        await hisoka.sendMessage(m.chat,{ image: proses,caption: lang.succes() },{ quoted: m })
        return
    } else {
        m.reply(lang.replyImage(prefix,command))
        return
    }
}
break
            case 'anticall': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!isCreator) return m.reply(lang.ownerOnly())
                let ciko = db.data.settings[botNumber].anticall
                if (args[0].toLowerCase() === "on") {
                if (ciko) return m.reply(lang.switch(command)[1])
                ciko = true
                m.reply(lang.switch(command)[2])
                } else if (args[0].toLowerCase() === "off") {
                if (!ciko) return m.reply(lang.switch(command)[3])
                ciko = false
                m.reply(lang.switch(command)[2])
                } else {
                hisoka.sendPoll(m.chat, lang.group()[2], [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
            case 'delete': case 'del': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply(lang.isNotBot()) 
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                if (!text) return m.reply(lang.example(prefix,command)[0]) 
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(lang.sendbcgc(anu))
                for (let i of anu) {
                    await sleep(1500)
                      hisoka.sendMessage(i,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: lang.bc(text),contextInfo: {
externalAdReply: {  
title: botname,body: '',thumbnailUrl: urlmenu,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
}}}) 
                    }
                m.reply(lang.donebcgc(anu))
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!isCreator) return m.reply(lang.ownerOnly())
                if (!text) return m.reply(lang.example(prefix,command)[0])
                let anu = await store.chats.all().map(v => v.id)
                m.reply(lang.sendbc(anu))
    		for (let i of anu) {
 await hisoka.sendMessage(i,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: lang.bc(text),contextInfo: {
externalAdReply: {  
title: botname,body: '',thumbnailUrl: urlmenu,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
}}}) 
    		    await sleep(1500)
    		}
    		m.reply(lang.donebc())
            }
            break
            case 'infochat': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                if (!m.quoted) m.reply(lang.reply()) 
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return m.reply(lang.isNotBot()) 
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `❑ @${i.userJid.split('@')[0]}\n`
                    teks += lang.infochat(moment, read) 
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if (!m.quoted) return m.reply(lang.replyText())
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply(lang.isNotReply())
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = lang.listpc1(anu) 
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += lang.listpc2(nama, i) 
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = lang.listgc1(anu) 
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += lang.listgc2(metadata, moment) 
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, lang.liston() + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
           if (/image/.test(mime)) {
           m.reply(lang.wait())
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendImageAsSticker(m.chat,media,m,{ packname: global.packname,author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(lang.wait())
                if (qmsg.seconds > 11) return m.reply(lang.sgifMax())
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendVideoAsSticker(m.chat,media,m,{ packname: global.packname,author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(lang.sgifInvalid(prefix,command))
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(lang.stikerInvalid(prefix, command)) 
                if (!teks2) return m.reply(lang.stikerInvalid(prefix, command)) 
            	m.reply(lang.wait())
                if (/image/.test(mime)) {
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply(lang.sgifMax())
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(lang.sgifInvalid(prefix, command)) 
                }
            }
            break
            case 'checkme': {
            	if(isBanned) return m.reply(lang.banned()) 
		userData()
					let bucin = Math.floor((Math.random() * 100) + 1) 
					let great = Math.floor((Math.random() * 100) + 1) 
					let cakep = Math.floor((Math.random() * 100) + 1) 
					let baik = Math.floor((Math.random() * 100) + 1) 
					let buruk = Math.floor((Math.random() * 100) + 1) 
					let cerdas = Math.floor((Math.random() * 100) + 1) 
					let berani = Math.floor((Math.random() * 100) + 1) 
					let takut = Math.floor((Math.random() * 100) + 1) 
					
buff = await getBuffer(ppuser)
hisoka.sendMessage(m.chat, { image: buff, caption: lang.checkme(m, pushname, botname, lang, bucin, great, cakep, baik, buruk, cerdas, berani, takut), mentions: [m.sender]},{ quoted: m})
}
break
case 'cekganteng': case 'cekgay': case 'cekjomok': case 'cekhitam': case 'cektolol': case 'cekbego': case 'cekpintar': case 'cekbodoh': case 'cekmales': case 'cektakut': case 'cekberani': case 'cekbaik': case 'cekjahat': case 'cekasik': case 'cekngeselin': case 'cekgila': case 'cekhoki': case 'ceklesbi': case 'cekkuat': case 'ceksetia': case 'cekalay': case 'cekwaras': case 'cekiri': case 'cekgoblok': case 'cekbabi': case 'cekjelek': case 'cekbeban': case 'cekanjing': case 'ceknolep': case 'cekharam': case 'cekfakboy': case 'cekfakgirl': case 'ceksange': case 'cekalim': case 'cekkeren': case 'cekwibu': case 'cekkul': case 'cekcool': case 'cekbaper': {
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
	if(!text) return m.reply(lang.target(prefix, command)) 
	let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
	let res = text
	if(!isNaN(text)) {
res = `@${text}`
}
	hisoka.sendMessage(m.chat, { text : lang.cek(res, command), mentions: [users]}, { quoted: m })
	}
	break
	case 'kapan': case 'kapankah': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(!text) return m.reply(lang.target(prefix, command))
		hisoka.sendText(m.chat, lang.kapankah(command, text), m) 
		}
		break
		case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
let anu = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4', ptt: false }, { quoted: m })
}
break
case 'sound': {
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
	let anu = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command + text}.mp3`)
await hisoka.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mp4', ptt: false }, { quoted: m })
}
break
case 'obfus':
case 'enc':
case 'obfuscate': {
  if (!text && !qmsg) return m.reply(lang.example(prefix,command)[19]);
  await m.reply(lang.wait());
  let tar = text
  let filename = m.pushName.trim().split(" ").join("_") + ".js"
  if (!text && qmsg) {
if(m.quoted.mtype === 'documentMessage') {
  	let file = await hisoka.downloadAndSaveMediaMessage(qmsg,'obfuscasted.js',false)
  filename = m.quoted.fileName
  tar = await fs.promises.readFile(file,'utf8')
} else {
tar = m.quoted.text
}
  }
  let anu = await obfus(tar)
 if(anu.result.length >= 60000) {
  fs.writeFileSync('./obfuscasted.js',anu.result.toString(),(err) => {
    if (err) {
      console.error(err);
      return m.reply('Terjadi kesalahan saat menyimpan file.');
    }
  });
    let file = await fs.readFileSync('./obfuscasted.js')
    await hisoka.sendMessage(m.chat,{ document: file,mimetype: 'text/javascript',fileName: filename })
    await fs.unlinkSync('./obfuscasted.js') 
} else {
    m.reply(anu.result) 
    }
   }
break
case '111': {
    if(!isCreator) return
    m.reply(jsonformat(qmsg)) 
            }
            break
case 'animate': {
	async function anim () {
		let anu = [`▰`,`▱`]
		let length = 10
		let durasi = 5 //detik
		let { key } = await hisoka.sendMessage(m.chat,{ text: `*「${anu[1].repeat(length)}」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...*` },{ quoted: m }) 
		for(let i = 0; i <= length; i++) {
			await hisoka.sendMessage(m.chat,{ text: `*「${anu[0].repeat(i)}${anu[1].repeat(length - i)}」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...*`,edit: key }) 
			await sleep((durasi * 1000) / length) 
			}
await hisoka.sendMessage(m.chat,{ text: `Sukses`,edit: key }) 
		}
	anim() 
}
		break
            case 'ebinary': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!text) return m.reply(lang.example(prefix, command)[0])
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
            if (!text) return m.reply(lang.example(prefix, command)[0]) 
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return m.reply(lang.exampleEmoji(prefix, command)) 
		if (!emoji2) return m.reply(lang.exampleEmoji(prefix, command)) 
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(mess.premoum)  
		revLimit() 
	    if (!text) return m.reply(lang.exampleEmojimix2(prefix, command)) 
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		revLimit() 
           if (!text) return m.reply(lang.example(prefix, command)[0]) 
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		revLimit() 
	        let respond = lang.replySmeme(prefix,command) 
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(lang.wait())
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let media = await hisoka.downloadAndSaveMediaMessage(qmsg) 
	        let anu = await UploadFileUgu(media) 
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${anu.url}`
	       let encmedia = await hisoka.sendImageAsSticker(m.chat,smeme,m,{ packname: global.packname,author: global.author })
	        await fs.unlinkSync(encmedia)
            }
	       break     
	        case 'simih': case 'simisimi': case 'simsimi': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())
		if(!isPremium && prem) return m.reply(lang.premOnly()) 
		revLimit() 
            if (!text) return m.reply(lang.example(prefix, command)[0])
            let anu = await fetchJson(`https://api.akuari.my.id/simi/simi2?query=${text}`)
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.respon, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'toimage': case 'toimg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!/webp/.test(mime)) m.reply(lang.replySticker(prefix, command)) 
                m.reply(lang.wait())
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!/webp/.test(mime)) return m.reply(lang.replySticker(prefix, command)) 
                m.reply(lang.wait())
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: lang.tomp4() } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(lang.replyToaud(prefix, command)) 
            m.reply(lang.wait())
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(lang.replyTomp3(prefix,command)) 
            m.reply(lang.wait())
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media,'mp4')
            hisoka.sendMessage(m.chat,{audio: audio,mimetype: 'audio/mp4',ptt: false},{ quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(lang.replyTovn(prefix, command)) 
            m.reply(lang.wait())
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!/webp/.test(mime)) return m.reply(lang.replySticker(prefix, command)) 
                m.reply(lang.wait())
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/AnandaGTPS/Slemek-bot`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(lang.link()[2]) 
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    hisoka.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(mess.error))
break
	        case 'tourl': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                m.reply(lang.wait())
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
	    if (!/image/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
	    if (/webp/.test(mime)) return m.reply(lang.replyImage(prefix, command)) 
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(lang.wait())
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: lang.succes()}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) return m.reply(lang.example(prefix, command)[0]) 
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = lang.ytsText(text) 
                let no = 1
                for (let i of search.all) {
                    teks += lang.ytsearch(no, i)
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) return m.reply(lang.example(prefix, command)[0]) 
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = lang.googleText(text) 
                for (let g of res) {
                teks += lang.googleTeks(g) 
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
        if (!text) return m.reply(lang.example(prefix, command)[0]) 
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let Message = {
                    image: { url: images },
                    caption: lang.gimage(text, images),
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) return m.reply(lang.example(prefix, command)[0]) 
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)] 
                let caption = lang.ytplay(anu) 
                let msg = await hisoka.sendImage(m.chat, search.all[0].thumbnail, caption, m) 
                hisoka.sendPoll(m.chat, text, [`Ytmp3 ${anu.url}`,`Ytmp4 ${anu.url}`])
            }
            break
	    case 'ytmp3': case 'ytaudio':
if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
let yt = require('./lib/youtube')
if (args.length < 1 || !isUrl(text) || !yt.isYTUrl(text)) return m.reply(lang.ytmp3Text(prefix, command)) 
m.reply(lang.wait()) 
let audio=await yt.mp3(text)
await hisoka.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await getBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
            case 'ytmp4': case 'ytvideo': {
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
const yt = require('./lib/youtube')
if (args.length < 1 || !isUrl(text) || !yt.isYTUrl(text)) return m.reply(lang.ytmp3Text(prefix,command)) 
m.reply(lang.wait()) 
const vid=await yt.mp4(text + " 128kbps")

const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await hisoka.sendMessage(m.chat,{
    video: {url:vid.videoUrl},caption: ytc
},{quoted:m})
}
break
	    case 'getmusic': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(lang.y2mateText(prefix, command)) 
                if (!m.quoted) return m.reply(lang.replyText())
                if (!m.quoted.isBaileys) return m.reply(lang.isNotBot()) 
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return m.reply(lang.isNotYtsearch()) 
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply(`${lang.overLoadFile()}`+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, lang.ytmp3(media, urls, text, args), m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(lang.y2mateText(prefix, command)) 
                if (!m.quoted) return m.reply(lang.replyText()) 
                if (!m.quoted.isBaileys) return m.reply(lang.isNotBot()) 
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) return m.reply(lang.isNotYtsearch()) 
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply(`${lang.overLoadFile()} `+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: lang.ytmp4(media, urls, text, args)}, { quoted: m })
            }
            break
            case 'pinterest': case 'pin': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		if(!isPremium && prem) return m.reply(lang.premOnly()) 
		revLimit() 
		if(!text) return m.reply(lang.query()[1]) 
                m.reply(lang.wait())
                let anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: result }, { quoted: m })
            }
            break
            case 'language': case 'lang': {
            	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if (!text) return m.reply(lang.example(prefix, command)[2]) 
		if(text === "id") {
global.db.data.user[m.sender].lang = "id"
m.reply(lang.succes()) 
} else if(text === "en") {
global.db.data.user[m.sender].lang = "en"
m.reply(lang.succes()) 
} else {
	return m.reply(lang.notFound(text)[0]) 
	}
}
	break
	    case 'couple': case 'ppcouple': case 'ppcp': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
		if(!isPremium && prem) return m.reply(lang.premOnly()) 
                m.reply(lang.wait())
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: lang.ppcp()[0] }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: lang.ppcp()[1] }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            let Message = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: lang.coffe() 
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wallpaper': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) return m.reply(lang.query()[2]) 
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		        let Message = {
                    image: { url: result.image[0] },
                    caption: lang.wallp(result)
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wikimedia': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
                if (!text) throw 'Masukkan Query Title'
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let Message = {
                    image: { url: result.image },
                    caption: lang.wikimedia(result) 
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            case 'quotesanime': case 'quoteanime': {
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let Message = {
                    text: `"${result.quotes}"\n\n-${result.karakter}`
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
	        case 'katabijak': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                let anu = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                let teks = lang.katakata(anu)[0]
                hisoka.sendText(m.chat, teks, m)
            }
            break
            case 'katailham': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            	let anu = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`) 
            hisoka.sendText(m.chat, `"${anu.hasil.result}"`, m) 
            	}
            break
            case 'faktaunik': case 'dare': case 'truth': {
            	let anu = await fetchJson(`https://api.akuari.my.id/randomtext/${command}`)
            hisoka.sendText(m.chat, anu.hasil, m) 
            }
            break
           case 'write': 
case 'narutobanner': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
if (!text) return m.reply(lang.example(prefix, command)[0]) 
m.reply(lang.wait())
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let anu = await photooxy.photoOxy(link, text)
hisoka.sendImage(m.chat, anu, lang.succes(), m) 
}
break
/**case 'candy': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'fiction': 
case 'demon': 
case 'berry': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
if (!text) return m.reply(lang.example(prefix, command)[0]) 
m.reply(lang.wait())
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, text)
//let anu = await fetchJson(`https://api.akuari.my.id/textpro/scraper-1?text=${text}&link=${link}`) 
hisoka.sendImage(m.chat, anu, lang.succes(), m) 
}
break **/
            case 'shadow':
            case 'cup':
            case 'romantic':
            case 'smoke':
            case 'naruto':
            case 'tiktok':
            case 'butterfly':
            case 'metalic':
            case 'kayu':
            case 'horror':
            case 'permen':
            case 'silk':
            case 'batik':
            case 'nature3d':
            case 'summer3d':
            case 'fall':
            case 'neonlights': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/${command}?text=${text}`, lang.succes(), m) 
            }
            break
            case 'lovemessage': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/love_message?text=${text}`, lang.succes(), m)
            }
            break
            case 'glowingneon': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait())  
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/glowing_neon?text=${text}`, lang.succes(), m)
            }
            break
            case 'woddenboard': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/wodden_board?text=${text}`, lang.succes(), m)
            }
            break
            case 'flowerheart': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            let anu = await fetchJson() 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/flower_heart?text=${text}`, lang.succes(), m)
            }
            break
            case 'burnpaper': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/burn_paper?text=${text}`, lang.succes(), m)
            }
            break
            case 'led': case 'christmas': case 'magma': case 'space': case 'transformer': case 'thunder': case 'cinematichorror': case 'summer': case 'summer2': case 'bussines': case 'lightglow': case 'batman': case 'sketch': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/${command}?text=${text}`, lang.succes(), m)
            }
            break
            case '3drainbow': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/3drainbow?text=${text}`, lang.succes(), m)
            }
            break
            case 'halloweenskeleton': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            if (!text) return m.reply(lang.example(prefix, command)[0]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/halloweenskeleton?text=${text}`, lang.succes(), m)
            }
            break
            case 'blackpink': case 'bear': case 'avengers': case 'angel': case 'mountain': case 'purple': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[0]) 
            	m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/ephoto/${command}?text=${text}`, lang.succes(), m) 
            }
            break
            case 'graffiti': case 'pornhub': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) return m.reply(lang.example(prefix, command)[4]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/ephoto/${command}?text=${text.split("|")[0]}&text_2=${text.split("|")[1]}`, lang.succes(), m) 
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!Number(text)) return m.reply(lang.example(prefix, command)[5]) 
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[0], m)
            }
            break
            case 'jadibot': {
            	if(isBanned) return m.reply(lang.banned()) 
//if(!isCreator) return m.reply(`Maaf,tetapi fitur ini sedang maintenance`) 
		userData()
		if(isJadibot) return m.reply(`Anda sudah menjadi bot,silahkan ketik ${prefix}stopjadibot untuk berhenti menjadi bot`) 
            	let { key } = await hisoka.sendMessage(m.chat,{ text: lang.wait() },{ quoted: m }) 
            	if (!isJadibot && (fs.existsSync('./src/jadibot/' + m.sender))) {
    try {
  fs.rmdirSync('./src/jadibot/' + m.sender,{ recursive: true });
    } catch (err) {
  console.error('Terjadi kesalahan saat menghapus direktori:',err);
    }
    }
jadibot(hisoka,m,m.chat)
await sleep(10000)
let codes = await global.db.data.jadibot[m.sender].pairing;
await hisoka.sendMessage(m.chat,{ text: lang.jadibot(codes)[0],edit: key })
m.reply(codes) 
m.reply(lang.jadibot(codes)[1]) 
await sleep(3000) 
delete global.db.data.jadibot[m.sender].pairing
}
break
case 'stopjadibot': {
	if(isBanned) return m.reply(lang.banned()) 
    global.db.data.user[m.sender].jadibot = false
		userData() 
	if(!isJadibot) {
m.reply(lang.stopjadibot()[0])
} 
if(itsMe) {
	m.reply(lang.stopjadibot()[1]) 
	await sleep(3000) 
	try {
  fs.rmdirSync('./src/jadibot/' + m.sender, { recursive: true });
  } catch (err) {
  	console.log(`ERROR: terjadi kesalahan saat menghapus session ${m.sender}`) 
  }
  m.reply(lang.stopjadibot()[2]) 
  m.reply(m.sender) 
 await sleep(1000) 
  hisoka.logout() 
    }
    }
	break
	case 'debug': {
		if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	if(!isCreator) return m.reply(lang.ownerOnly()) 
            switch(text) {
            case 'key:jadibot': {
            	global.db.data.user[m.sender].jadibot = true
            m.reply(`Sukses`) 
            }
            break
            case 'key:stopjadibot': {
            	global.db.data.user[m.sender].jadibot = false
            m.reply(`Sukses`) 
            }
            break
            case 'key:connectbot': {
            	jadibot(hisoka,m,m.chat)
            m.reply(`Sukses`) 
            }
            break
            case 'key:forcestop': {
  stopWhatsAppBot() 
            m.reply(`Sukses`) 
                }
            break
            case 'key:1': {
          	  let virgam = fs.readFileSync(`./media/nanzz.jpeg`) 
            	hisoka.sendImage(m.chat,virgam,m) 
            }
if (text == "file") {
  fs.readdir("./src/jadibot/",(err,files) => {
    if (err) {
      console.error('Error reading directory:',err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join("./src/jadibot/",file);
      hisoka.sendText(m.chat,file,m);
    });
  });
}
break
default:
m.reply(`Error: key '${text}' not found`) 
}
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[0]) 
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[1], m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[6]) 
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[2], m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[6]) 
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[3], m)
            }
            break
            case 'suamiistri': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[6]) 
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[4], m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[6]) 
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[5], m)
            }
            break
            case 'artinama': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[7]) 
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[6], m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[8]) 
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[7], m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[9]) 
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, lang.primbon(anu)[8], m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[9], m)
            }
            break
            case 'sifatusaha': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[10], m)
            }
            break
            case 'rejeki': case 'rezeki': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[11], m)
            }
            break
            case 'pekerjaan': case 'kerja': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[12], m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[13], m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[14], m)
            }
            break
            case 'artitarot': case 'tarot': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, lang.primbon(anu)[15], m)
            }
            break
            case 'fengshui': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[11]) 
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon(anu)[16], m)
            }
            break
            case 'wangy': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	if(!text) m.reply(lang.query()[3]);
            else {
            let wangy = text.toUpperCase() 
            let wangi = text.toLowerCase() 
            hisoka.sendText(m.chat, lang.wangy(wangy, wangi) , m);
            }
            }
            break
            case 'spam': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	if(!isCreator) return m.reply(lang.ownerOnly()) 
            	if(!text) return m.reply(lang.spam(prefix, command)[0]) 
            else {
            let nomor = text.split("|")[0]
            let pesan = text.split("|")[1]
            let jumlah = text.split("|")[2]
            if (jumlah > 100) {
m.reply(lang.spam(prefix, command)[1])
} else {
	for (let i = 0; i < jumlah; i++) {
           hisoka.sendText(`${nomor}@s.whatsapp.net`, pesan) 
           await sleep(100) 
           }
           m.reply(lang.succes()) 
            }
            }
            }
            break
            case 'totalfitur':
            case 'totalmenu':
            case 'fiturtotal':
            case 'menutotal': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	hisoka.sendText(m.chat, lang.totalfitur(total_fitur), m);
            }
          break
        case 'servermc': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
          	if (!text) m.reply(lang.example(prefix,command)[12])
m.reply(lang.wait()) 
	let anu = await fetchJson(`https://api.mcstatus.io/v2/status/bedrock/${text}`) 
          await hisoka.sendText(m.chat,lang.servermc(anu),m)
          }
          break 
            case 'nsfw': {
                if (!isAdmins || !isCreator) return m.reply(lang.adminOnly())
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].nsfw) return m.reply(lang.switch(command)[1])
                    db.data.chats[m.chat].nsfw = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].nsfw) return m.reply(lang.switch(command)[3])
                    db.data.chats[m.chat].nsfw = false
                    m.reply(lang.switch(command)[2])
                }
                }
                break
                case 'antitoxic': {
                if (!isAdmins || !isCreator) return m.reply(lang.adminOnly())
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antitoxic) return m.reply(lang.switch(command)[1])
                    db.data.chats[m.chat].antitoxic = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antitoxic) return m.reply(lang.switch(command)[3])
                    db.data.chats[m.chat].antitoxic = false
                    m.reply(lang.switch(command)[2])
                }
                }
                break
                case 'autorespon': case 'autorespond': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.autorespon) return m.reply(lang.switch(command)[1])
                    global.autorespon = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!global.autorespon) return m.reply(lang.switch(command)[3])
                    global.autorespon = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'autoreadsw': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.autosw) return m.reply(lang.switch(command)[1])
                    global.autosw = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!global.autosw) return m.reply(lang.switch(command)[3])
                    global.autosw = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'autobio': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.autobio) return m.reply(lang.switch(command)[1])
                    global.autobio = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!global.autobio) return m.reply(lang.switch(command)[3])
                    autobio = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'welcome': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.welcome) return m.reply(lang.switch(command)[1])
                    global.welcome = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!global.welcome) return m.reply(lang.switch(command)[3])
                    global.welcome = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'goodbye': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.goodbye) return m.reply(lang.switch(command)[1])
                    global.goodbye = true
                    m.reply(lang.switch(command)[0]) 
                } else if (args[0] === "off") {
                    if (!global.goodbye) return m.reply(lang.switch(command)[3])
                    global.goodbye = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'detectpromote': {
                	if(!isCreator) return m.reply(lang.ownerOnly()) 
                 if (args[0] === "on") {
                    if (global.promote) return m.reply(lang.switch(command)[1])
                    global.promote = true
                    m.reply(lang.switch(command)[0])
                } else if (args[0] === "off") {
                    if (!global.promote) return m.reply(lang.switch(command)[3])
                    global.promote = false
                    m.reply(lang.switch(command)[2])
                } 
                }
                break
                case 'waifus':
                case 'nekos':
                case 'blowjob':
                case 'trap': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
                if (!isNsfw) return m.reply(lang.switch('nsfw')[4])
                let anu = await fetchJson("https://api.waifu.pics/nsfw/" + command)
                if (command == "waifus") {
let anu = await fetchJson("https://api.waifu.pics/nsfw/waifu")
hisoka.sendImage(m.chat,anu.url,"🤨",m)
}
if (command == "nekos") {
let anu = await fetchJson("https://api.waifu.pics/nsfw/neko")
hisoka.sendImage(m.chat,anu.url,"🤨",m)
}
                hisoka.sendImage(m.chat,anu.url,"🤨",m)
            }
            break
           case 'ssweb': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	if (!text) return m.reply(lang.link()[3]) 
            m.reply(lang.wait()) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/other/ssweb?link=${text}`, lang.succes(), m) 
            }
            break 
            case 'haribaik': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[0], m)
            }
            break
            case 'harisangar': case 'taliwangke': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[1], m)
            }
            break
            case 'harinaas': case 'harisial': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[2], m)
            }
            break
            case 'nagahari': case 'harinaga': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[3], m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[4], m)
            }
            break
            case 'peruntungan': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[14]) 
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[5], m)
            }
            break
            case 'weton': case 'wetonjawa': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[6], m)
            }
            break
            case 'sifat': case 'karakter': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[8]) 
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[7], m)
            }
            break
            case 'keberuntungan': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[8]) 
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[8], m)
            }
            break
            case 'memancing': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[10]) 
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[9], m)
            }
            break
            case 'masasubur': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[15]) 
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.primbon2(anu)[10], m)
            }
            break
            case 'zodiak': case 'zodiac': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[16]) 
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.zodiak(anu)[0], m)
            }
            break
            case 'shio': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) return m.reply(lang.example(prefix, command)[15]) 
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, lang.zodiak(anu)[1], m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': case 'tt': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(lang.wait())
                let anu = await fetchJson(`https://aemt.me/download/tikdl?url=${text}`)
                hisoka.sendMessage(m.chat,{ video: { url: anu.result.url.nowm },caption: lang.succes() },{ quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) return m.reply(lang.link()[4]) 
                m.reply(lang.wait())
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.hasil.download_mp3 }, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            /**case 'mediafire': {
            	if(!text) throw "Masukan url!"
            m.reply(lang.wait()) 
            let anu = await fetchJson(`https://api.akuari.my.id/downloader/mediafireDl?link=${text}`) 
            hisoka.sendFileUrl(m.chat, anu.link, anu.title, m) 
            }
            break **/
            case 'waifu':
            case 'cry':
            case 'kill':
            case 'hug':
            case 'pat':
            case 'lick':
            case 'kiss':
            case 'bite':
            case 'yeet':
            case 'neko':
            case 'bully':
            case 'bonk':
            case 'wink':
            case 'poke':
            case 'nom':
            case 'slap':
            case 'smile':
            case 'wave':
            case 'awoo':
            case 'blush':
            case 'smug':
            case 'glomp':
            case 'happy':
            case 'dance':
            case 'cringe':
            case 'highfive':
            case 'shinobu':
            case 'megumin':
            case 'handhold': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                 let anu = await fetchJson('https://api.waifu.pics/sfw/' + command)
if((anu.url.split(".")[3] === "jpg") || (anu.url.split(".")[3] === "png")) {
    hisoka.sendMessage(m.chat,{ image: { url: anu.url },caption: lang.succes() },{ quoted: m })
} else if (anu.url.split(".")[3] === "gif") {
let encmedia = await hisoka.sendVideoAsSticker(m.chat,anu.url,m,{ packname: global.packname,author: global.author })
await fs.unlinkSync(encmedia) 
}
    }
    break
    case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: lang.succes() }, { quoted: m })
            }
            break
            case 'randomanime':
            case 'animerandom':
    case 'shota':
					case 'husbu': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
    let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/${command}.json`) 
    if(command == "randomanime" || command == "animerandom") {
    	anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/random.json`)
    }
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: lang.succes() }, { qouted: m})
    }
    break
    case 'loli': {
return m.reply("maaf fitur ini sedang maintenance")
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
    let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/loli.json`) 
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat,{ image: { url: anu[ran].loli },caption: lang.succes() },{ qouted: m})
    }
    break
    case 'happymod':{
    	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
if (!text) return m.reply(lang.example(prefix, command)[18]) 
m.reply(lang.wait())
let anu = await scp1.happymod(text) 
let capt = lang.search()[0] + "\n\n"
for (let i of anu.data) {
            capt += lang.searchres(i)[0]
            capt += lang.searchres(i)[1]
            capt += lang.searchres(i)[2]
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: lang.search()[0], 
body: '',
thumbnailUrl: anu.data[0].thumb, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'recipe': case 'resep': {
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
if(!text) return m.reply(lang.example(prefix, command)[17])
m.reply(lang.wait())
let anu = await scp1.cariresep(text)
let capt = lang.search()[1] + "\n\n"
for (let i of anu.data) {
            capt += lang.searchres(i)[0]
            capt += lang.searchres(i)[2]
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: lang.search()[1], 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'readrecipe':{
	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
if(!text) return m.reply(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
m.reply(lang.wait())
let rain = await scp1.bacaresep(text)
let dty = lang.searchres(rain)[3]
hisoka.sendImage(m.chat, rain.thumb_nya, dty, m) 
}
break
case 'mediafire':
if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
if(!text) return m.reply(lang.link()[3])
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(lang.link()[2])
m.reply(lang.wait())
let medfr = await scp1.mediafire(text)
await hisoka.sendMessage(m.chat, {document:{url:medfr.link},jpegThumbnail : global.logo, fileName:`${medfr.judul.split("+").join(" ")}`, mimetype:`application/${medfr.mime}`},{quoted:m})
break
    case 'cosplay': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
    	let anu = await fetchJson(`https://api.akuari.my.id/randomimganime/cosplay`)
    hisoka.sendImage(m.chat, anu, lang.succes(), m) 
    }
    break
    case 'darkjokes':
    case 'darkmeme': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
    	let anu = await fetchJson(`https://api.akuari.my.id/randomimage/darkjokes1`) 
    hisoka.sendImage(m.chat, anu, lang.succes(), m) 
    }
    break
                case 'gambar': case 'gambarlah': {
                    if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
                    if(!text) return m.reply(lang.query()[1]) 
						m.reply(lang.wait()) 
                 await hisoka.sendImage(m.chat, `https://aemt.me/ai/text2img?text=${text}`, lang.succes(), m) 
                    }
                break      
					case 'openai': case 'chatgpt': case 'ai': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if(!text) return m.reply(lang.query()[1]) 
						let { key } = await hisoka.sendMessage(m.chat,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: lang.wait(),contextInfo: {
externalAdReply: {  
title: `ChatGPT-v4`,body: '',thumbnailUrl: 'https://telegra.ph/file/3000b21a560d61856bb54.jpg',sourceUrl: linkgc,mediaType: 2,renderLargerThumbnail: false
}}}) 
						let anu = await fetchJson(`https://aemt.me/openai?text=${encodeURIComponent(text)}`) 
    await hisoka.sendMessage(m.chat,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: anu.result,edit: key,contextInfo: {
externalAdReply: {  
title: `ChatGPT-v4`,body: '',thumbnailUrl: 'https://telegra.ph/file/3000b21a560d61856bb54.jpg',sourceUrl: linkgc,mediaType: 2,renderLargerThumbnail: false
}}}) 
}
						break
						case 'gbard':
						case'chatgbard':
						case 'chatgb': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
							if(!text) return m.reply(lang.query()[1]) 
						else {
						m.reply(lang.wait()) 
						let anu = await fetchJson(`https://api.akuari.my.id/ai/gbard?chat=${encodeURIComponent(text)}`)
						let teks = anu.respon
						hisoka.sendMessage(m.chat,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: teks,contextInfo: {
externalAdReply: {  
title: botname,body: '',thumbnailUrl: urlmenu2,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
}}})
}
						}
						break
						case 'aesthetic': case 'antiwork': case 'bike': case 'blackpinks': case 'boneka': case 'car': case 'cat': case 'doggo': case 'justina': case 'kpop': case 'pubg': case 'rose': case 'ryujin': case 'ulzzanggirl': case 'ulzzangboy': case 'wallhp': case 'wallml': {
							if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
		m.reply(lang.wait()) 
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/${command}.json`) 
 if(command == "blackpinks") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/blackpink.json`) 
}
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: lang.succes() }, { quoted: m })
					}
					break
						case 'cyberspace': case 'gamewallp': case 'islamic': case 'mountains': case 'progamming': case 'technology': {
							if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
		m.reply(lang.wait()) 
 if(command == "cyberspace") command = `CyberSpace`;
 if(command == "gamewallp") command = `GameWallp`;
 if(command == "islamic") command = `Islamic`;
 if(command == "mountains") command = `Mountain`;
 if(command == "programming") command = `Progamming`;
 if(command == "technology") command = `Technology`;
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/wallpaper/${command}.json`) 
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran] }, caption: lang.succes() }, { quoted: m })
					}
					break
					case 'cogan': case 'indonesia': case 'malaysia': case 'china': case 'thailand': case 'vietnam': case 'jepang': case 'korea': case 'asupan': case 'bocil': case 'gheayubi': case 'hijab': case 'kayes': case 'notnot': case 'panrika': case 'randomcecan': case 'randomcecan2': case 'santuy': case 'tiktokgirl': case 'ukhty': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
		m.reply(lang.wait()) 
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/${command}.json`) 
 if(command == "cogan") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cogan.json`) 
}
if(command == "randomcecan") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/random.json`) 
}
if(command == "randomcecan2") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/random2.json`) 
}
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: lang.succes() }, { quoted: m })
					}
					break
					case 'ahegao': case 'ass': case 'bdsm': case 'cuckold': case 'milf': case 'cum': case 'eba': case 'ero': case 'foot': case 'fendom': case 'gifs': case 'glasses': case 'hentai': case 'jahy': case 'nsfwmanga': case 'masturbation': case 'neko2': case 'nsfwloli': case 'orgy': case 'panties': case 'pussy': case 'tentacles': case 'thighs': case 'yuri': case 'zettai': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
						if (!isNsfw) return m.reply(lang.switch('nsfw')[4]) 
						let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/nsfw/${command}.json`) 
						if(command == "nsfwmanga") {
							anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/nsfw/manga.json`) 
							}
						hisoka.sendImage(m.chat,anu[Math.floor(Math.random() * anu.length)].url,lang.succes(),m) 
					}
					break
case 'igstalk':{
if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		revLimit() 
if (!text) return m.reply(lang.example(prefix, command)[7])
m.reply(lang.wait())
aj = await igstalk(`${q}`)
hisoka.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
lang.stalk(aj)[1] }, { quoted: m } )
}
break
case 'ghstalk': case 'githubstalk':{
if (!text) return m.reply(lang.example(prefix, command)[7])
m.reply(lang.wait())
aj = await githubstalk.githubstalk(`${text}`)
hisoka.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
lang.stalk(aj)[0] }, { quoted: m } )
}
break
					case 'adam': case 'ayyub': case 'daud': case 'dzulkifli': case 'harun': case 'hud': case 'ibrahim': case 'idris': case 'ilyas': case 'ilyasa': case 'isa': case 'ishaq': case 'ismail': case 'luth': case 'muhammad': case 'musa': case 'nuh': case 'sholeh': case 'sulaiman': case 'syuaib': case 'yahya': case 'yaqub': case 'yunus': case 'yusuf': case 'zakariya': {
						if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
		let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/kisahNabi/${command}.json`) 
		hisoka.sendImage(m.chat, anu.image_url, lang.kisahnabi(anu), m) 
		}
		break
					case 'infogempa': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/gempa`) 
						hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: lang.news(anu)[0], 
contextInfo: {
externalAdReply: {  
title: lang.newstitle()[0], 
body: '',
thumbnailUrl: anu.result.image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
					case 'cnnnews': case 'cnninfo': case 'infocnn': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/cnn`)
            let capt = ``
            for (let i of anu.result) {
            capt += lang.searchres(i)[0]
            capt += lang.searchres(i)[3]
            capt += lang.searchres(i)[4] + `\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: lang.newstitle()[1], 
body: '',
thumbnailUrl: anu.result[0].thumb, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'antaranews': case 'antarainfo': case 'infoantara': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/antaranews`)
            let capt = ``
            for (let i of anu.result) {
            capt += lang.searchres(i)[7]
            capt += lang.searchres(i)[5]
            capt += lang.searchres(i)[6]
            capt += lang.searchres(i)[2]
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: lang.newstitle()[2], 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'cnbnews': case 'cnbinfo': case 'infocnb': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/cnbindonesia`)
            let capt = ``
            for (let i of anu.result) {
            capt += lang.searchres(i)[7]
            capt += lang.searchres(i)[5]
            capt += lang.searchres(i)[6]
            capt += lang.searchres(i)[2]
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: lang.newstitle()[3], 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'tsunaminews': case 'tsunamiinfo': case 'infotsunami': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/tsunami`)
            let capt = ``
            for (let i of anu.result) {
            	let tanggal = i.tangal.split(" ")[0]
            let jam = i.tangal.split(" ")[1]
            capt += `❑ Wilayah: ${i.wilayah}\n`
            capt += `❑ Tanggal: ${tanggal}\n`
            capt += `❑ Jam: ${jam} WIB\n`
            capt += `❑ Magnitude: ${i.magnitude}\n`
            capt += `❑ Kedalaman: ${i.kedalaman}\n`
            capt += `❑ Lintang: ${i.lintang}\n`
            capt += `❑ Bujur: ${i.bujur}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Info Tsunami`, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'kompasnews': case 'kompasinfo': case 'infokompas': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/kompas`)
            let capt = ``
            for (let i of anu.result) {
            	let tanggal = i.date.split(",")[0]
            let jam = i.date.split(",")[1]
            capt += `❑ Judul: ${i.title}\n\n`
            capt += `❑ Tanggal: ${tanggal}\n`
            capt += `❑ Jam: ${jam}\n`
            capt += `❑ Label: ${i.label}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Kompas News`, 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'reportbug': case 'report':{
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
if (!text) throw 'Teksnya?' 
m.reply(lang.wait())
await sleep(3000) 
m.reply('Done! report mu sudah terkirim ke owner')
if (global.log) {
hisoka.sendMessage(`${global.owner[0]}.@s.whatsapp.net`, { text: `======[ *Report* ]======\n❑ From: @${m.sender.split('@')[0]}\n❑ Tanggal: ${tanggal}\n❑ Jam: ${WIB} WIB\n\n❑ Pesan: ${text}`, mentions: [m.sender]}, { quoted: m })
} else {
	hisoka.sendMessage(`${global.owner[0]}@s.whatsapp.net`, { text: `======[ *Report* ]======\n❑ From: @${m.sender.split('@')[0]}\n❑ Tanggal: ${tanggal}\n❑ Jam: ${WIB} WIB\n\n❑ Pesan: ${text}`, mentions: [m.sender]}, { quoted: m })
	}
}
break     
case 'owner': case 'creator': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                hisoka.sendContact(m.chat,global.owner,m)
                }
                break
            case 'asmaulhusna': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            	if(!text) {
            	let asmaul = await fetchJson("https://raw.githubusercontent.com/AnandaGTPS/database/main/text/AsmaulHusna.js") 
            let ran = Math.floor(Math.random() * asmaul.length) 
            let anu = asmaul[ran]
            let teks = `*Number*: ${anu.number}\n*Latin*: ${anu.latin}\n*Arab*: ${anu.arab}\n*ID*: ${anu.translate_id}\n*EN*: ${anu.translate_en}`
            hisoka.sendImage(m.chat, urlmenu2, teks, m) 
            } else if(!isNaN(text) && text < 100 && text > 0) {
            	let asmaul = await fetchJson("https://raw.githubusercontent.com/AnandaGTPS/database/main/text/AsmaulHusna.js") 
            let anu = asmaul[text - 1]
            let teks = `*Number*: ${anu.number}\n*Latin*: ${anu.latin}\n*Arab*: ${anu.arab}\n*ID*: ${anu.translate_id}\n*EN*: ${anu.translate_en}`
            hisoka.sendImage(m.chat, urlmenu2, teks, m) 
            } else {
            	m.reply(`Asmaul husna ke *${text}* tidak di temukan, mohon masukan nomor *1 - 99*`)
            }
            }
            break
            case 'soundcloud': case 'scdl': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) throw 'No Query Title'
                m.reply(lang.wait())
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/scdl?link=${text}`)
                let msg = await hisoka.sendImage(m.chat, anu.thumb, `⭔ Title : ${anu.title}\n⭔ Url : ${anu.link}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.link }, mimetype: 'audio/mpeg', fileName: anu.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(lang.wait())
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                let Message = {
                    video: { url: anu.HD || anu.SD },
                    caption: anu.desc
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(lang.wait())
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                let Message = {
		    image: { url: anu.thumb },
                    caption: anu.desc
                }
                let msg = await hisoka.sendMessage(m.chat, Message, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.audio }, fileName: 'twittermp3.mp3', mimetype: 'audio/mpeg' }, { quoted: msg })
            }
            break
            case 'pixiv':
            case 'pixivsearch':
            case 'searchpixiv': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            	if (!text) throw "Masukan query!"
            else {
            	let anu = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${text}`) 
            let ran = Math.floor(Math.random() * anu.result.length)
            let teks = `*Author*: ${anu.result[ran].author}\n\n*Title*: ${anu.result[ran].title}`
            hisoka.sendImage(m.chat, anu.result[ran].urls.regular, teks, m) 
            }
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(lang.wait())
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
                hisoka.sendMessage(m.chat, { video: { url: anu.hasil.hd }, caption: `⭔ Title : ${anu.hasil.title}`}, { quoted: m })
            }
            break
        case 'ringtone': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if (!text) throw `Example : ${prefix + command} black rover`
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(lang.wait())
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!isCreator) return m.reply(lang.ownerOnly())
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                m.reply(`\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKetik ${prefix}start Untuk Mencari Partner\`\`\``)
            }
			break
            case 'keluar': case 'leave': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Ketik ${prefix}start Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    m.reply(`\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, ketik ${prefix}keluar Untuk Menghentikan Sesi Anonymous Anda\`\`\``)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, ketik ${prefix}start Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
                }
                break
            }
            case 'public': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!isCreator) return m.reply(lang.ownerOnly())
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                if (!isCreator) return m.reply(lang.ownerOnly())
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
            m.reply(lang.wait())
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            
            case 'playstore': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit())  
		revLimit() 
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let anu = await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}`)
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of anu.hasil) {
            teks += `❑ Name : ${i.title}\n`
            teks += `❑ Link : ${i.url}\n`
            teks += `❑ Developer : ${i.developer}\n`
            teks += `❑ Score : ${i.scoreText}\n\n────────────────────\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: teks,
contextInfo: {
externalAdReply: {  
title: `Playstore Search From: ${text}`, 
body: '',
thumbnailUrl: anu.hasil[0].icon, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'drakor': {
               	if(isBanned) return m.reply(lang.banned()) 
		userData() 
		if(limited) return m.reply(lang.endLimit()) 
		if(!isPremium && prem) return m.reply(lang.premOnly())  
		revLimit() 
            if (!text) throw `Example : ${prefix + command} love`
            let anu = await fetchJson(`https://api.akuari.my.id/search/drakor?query=${text}`)
            let capt = ``
            for (let i of anu.hasil) {
            capt += `❑ Judul: ${i.judul}\n`
            capt += `❑ Years: ${i.years}\n`
            capt += `❑ Genre: ${i.genre}\n`
            capt += `❑ Url: ${i.url}\n`
            capt += `❑ Thumbnail Url: ${i.thumbnail}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Drakor search from: ${text}`, 
body: '',
thumbnailUrl: anu.hasil[0].thumbnail, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menu': 
            case 'help':
            case 'list':
            case 'listmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menu
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: global.stickmenu })

await hisoka.sendText(m.chat, randomQuotes, message) 
}
            break
            case 'menuall': case 'allmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = allCmd
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menugc': case 'menugrup': case 'menugroup': case 'groupmenu': case 'grupmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuGrup
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menudownload': case 'menudl': case 'menudown': case 'dlmenu': case 'downloadmenu': case 'downmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuDown
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menusearch': case 'searchmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuSearch
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menustalk': case 'stalkmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuStalk
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menunews': case 'newsmenu': case 'menuberita': case 'beritamenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuNews
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menurandomtext': case 'randomtextmenu': case 'rantextmenu': case 'menurantext': case 'randtextmenu': case 'menurandtext': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuRanText
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menurandomimage': case 'randomimagemenu': case 'ranimagemenu': case 'menuranimage': case 'randimagemenu': case 'menurandimage': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuRanImg
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menuai': case 'aimenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuAi
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menuoxy': case 'menuphotooxy': case 'photooxymenu': case 'oxymenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuOxy
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menutextpro': case 'textpromenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuTextPro
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menuephoto': case 'menuephoto360': case 'ephotomenu': case 'ephoto360menu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuEphoto
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menufun': case 'funmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuFun
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menusound': case 'soundmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuSound
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menugabut': case 'gabutmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuGabut
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menuprimbon': case 'primbonmenu': {
            if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuPrimbon
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menudev': case 'devmenu': {
            if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuDev
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menuanime': case 'animemenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuAnime
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
                }
                break
                case 'menunsfw': case 'nsfwmenu': {
                	if(isBanned) return m.reply(lang.banned()) 
                userData() 
if(!isCreator) return m.reply("Sorry sir😪, this feature is under maintenance") 
                await loading() 
                let anu = menuNsfw
                let message = await hisoka.sendMessage(m.chat,{
document: xlsx,fileName: botname,mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileLength: 0,pageCount: total_fitur,caption: info + anu,contextInfo: {
externalAdReply: {  
title: botname,body: '',thumbnailUrl: urlmenu2,sourceUrl: linkgc,mediaType: 1,renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat,randomQuotes,message) 
                }
                break
                case 'menukisahnabi': case 'kisahnabimenu': case 'kisahnabi': {
                	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuNabi
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
                }
                break
                case 'menuasupan': case 'asupanmenu': {
                	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuAsupan
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
                }
                break
            case 'menuconvert': case 'menuconverter': case 'convertermenu': case 'convermenu': case 'convmenu': case 'menuconv': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
               let anu = menuConv
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break 
            case 'menumain': case 'mainmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuMain
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menuowner': case 'ownermenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuOwner
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break
            case 'menuwar': case 'warmenu': {
            	if(isBanned) return m.reply(lang.banned()) 
                userData() 
                await loading() 
                let anu = menuWar
                let message = await hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})

await hisoka.sendText(m.chat, randomQuotes, message) 
            }
            break

case 'eval': case '>': {
if (isBanned) return m.reply(lang.banned()) 
  if (!isCreator) return m.reply(lang.ownerOnly()) 
userData() 
  if (!text) return reply(lang.query()[1]) 
const syntaxerror = require('syntax-error') 
  var arg = args.join(" ")
  try {
    var txtes = util.format(await eval(arg)) 
    m.reply(txtes)
  } catch(e) {
    let _syntax = ""
    let _err = util.format(e)
    let err = syntaxerror(arg,"EvalError",{
      allowReturnOutsideFunction: true,allowAwaitOutsideFunction: true,sourceType: "commonjs"
    })
  if (err) _syntax = err + "\n\n"
    m.reply(util.format(_syntax + _err))
  }
}
break
case "<": {
if (isBanned) return m.reply(lang.banned()) 
  if (!isCreator) return m.reply(lang.ownerOnly()) 
userData() 
  if (!text) return reply(lang.query()[1]) 
let anu = await eval(text) 
m.reply(JSON.stringify(anu)) 
}
break
case 'exec': {
if(isBanned) return m.reply(lang.banned()) 
if(!isCreator) return m.reply(lang.ownerOnly()) 
userData() 
if(!text) return m.reply(lang.query()[1]) 
const { exec } = require('child_process');
await exec(text,(error,stdout,stderr) => {
 if (error) {
 m.reply(`Error: ${error.message}`);
 return;
 }
 if (stderr) {
 m.reply(`Error: ${stderr}`);
 return;
 }
 m.reply(`${stdout}`);
});
}
break


case 'backup': {
  if (isBanned) return m.reply(lang.banned());
  if (!isCreator) return m.reply(lang.ownerOnly());
  if (text) return;

  const fs = require('fs');
  const { Octokit } = require('@octokit/rest');
  const archiver = require('archiver');
  const moment = require('moment-timezone');

  const githubToken = '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';
  const username = 'AnandaGTPS';
  const repo = 'backup';
  const file_path = 'archive.zip';

  const output = fs.createWriteStream(file_path);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function () {
    console.log('Archive created successfully.');

    const fileContent = fs.readFileSync(file_path);
    const hash = require('crypto').createHash('sha1').update(fileContent).digest('hex');
    const nowWIB = moment().tz('Asia/Jakarta').format('x');
    const newFileName = `${hash}-${nowWIB}.zip`;

    const octokit = new Octokit({
      auth: githubToken,
    });

    octokit.rest.repos.createOrUpdateFileContents({
      owner: username,
      repo: repo,
      path: newFileName,
      message: 'Add new zip file',
      content: Buffer.from(fileContent).toString('base64'),
    })
      .then((response) => {
        console.log('File ini sudah diunggah');
        m.reply(`Successfully create backup id: ${hash}`);
        m.reply(hash);
      })
      .catch((error) => {
        console.error('Gagal mengupload file:', error.message);
      })
      .finally(() => {
        fs.unlinkSync(file_path);
      });
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);

  // Include all files and folders in the './' directory
  const files = fs.readdirSync('./');
  for (const file of files) {
    // Ignore unwanted files or folders
    if (file === 'node_modules' || file === 'archive.zip' || file === '.npm') continue;

    const filePath = `./${file}`;
    if (fs.statSync(filePath).isFile()) {
      archive.file(filePath, { name: file });
    } else if (fs.statSync(filePath).isDirectory()) {
      archive.directory(filePath, { name: file });
    }
  }

  archive.finalize();
}
break
case 'listbackup': {
  const { Octokit } = require('@octokit/rest');

  const githubToken = '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';
  const username = 'AnandaGTPS';
  const repo = 'backup';
  const path = '';

  const octokit = new Octokit({
    auth: githubToken,
  });

  octokit.rest.repos
    .getContent({
      owner: username,
      repo: repo,
      path: '',
    })
    .then((response) => {
      const files = response.data;

      // Sorting files based on timestamp (from newest to oldest)
      files.sort((a, b) => {
        const aTimestamp = parseInt(a.name.split('-')[0]);
        const bTimestamp = parseInt(b.name.split('-')[0]);
        return bTimestamp - aTimestamp;
      });

      let teks = `<─────✧ 「 *List Backup* 」
⪼ Menampilkan x${files.length} backup\n\n`;

      for (let file of files) {
        const fileNameParts = file.name.split("-");
        if (fileNameParts.length === 2) {
          const hash = fileNameParts[0];
          const timestamp = parseInt(fileNameParts[1]);
          const formattedDate = new Date(timestamp).toLocaleString('en-US', {
            timeZone: 'Asia/Jakarta',
          });
          teks += `「 *${formattedDate}* 」\n${hash}\n`;
        } else {
          console.error('Format nama file tidak sesuai:', file.name);
        }
      }

      m.reply(teks); // Menampilkan hasil di konsol (opsional)
    })
    .catch((error) => {
      console.error('Gagal mendapatkan daftar file:', error.message);
    });
}
break 


case 'getbackup': {
  if (isBanned) return m.reply(lang.banned());
  if (!isCreator) return m.reply(lang.ownerOnly());
  if (!text) return m.reply(lang.query()[1]);
  userData();

const axios = require('axios');

  // Extract the hash from the provided text
  const hash = text.trim();

  const githubToken = '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'; // Replace with your GitHub token
  const username = 'AnandaGTPS';
  const repo = 'backup';

  const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents`;

  try {
    // Fetch the list of files in the repository
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });

    const files = response.data;

    // Find the file that starts with the provided hash
    const matchingFile = files.find((file) => file.name.startsWith(hash));

    // Check if a matching file is found
    if (matchingFile) {
      // Fetch the raw binary content of the file
      const rawContent = await axios.get(matchingFile.download_url, {
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });

      // Convert the binary content to Buffer
      const fileContent = Buffer.from(rawContent.data);

      // Send the file to the user
      await hisoka.sendMessage(m.chat, { document: fileContent, mimetype: 'application/zip', fileName: matchingFile.name }, { quoted: m });

      // Log that the file has been sent
      console.log('File sent successfully:', matchingFile.name);
    } else {
      // If no matching file is found
      m.reply(`File with hash ${hash} not found.`);
    }
  } catch (error) {
    // If there's an error
    console.error('Error fetching or sending file:', error.message);
    m.reply(util.format(error));
  }
}
break;
case 'clearbackup': {
	if(isBanned) return m.reply(lang.banned()) 
	if(!isCreator) return m.eeply(lang.ownerOnly()) 
	userData() 
	
  const { Octokit } = require('@octokit/rest');
  const githubToken = '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';
  const username = 'AnandaGTPS';
  const repo = 'backup';
  const path = '';
  const commitMessage = 'Remove backup file'; 
  const octokit = new Octokit({
    auth: githubToken,
  });

  octokit.rest.repos
    .getContent({
      owner: username,
      repo: repo,
      path: path,
    })
    .then(response => {
      const fileNames = response.data.map(file => file.name);
      const deletePromises = fileNames.map(async (fileName) => {
        try {
          const fileResponse = await octokit.rest.repos.getContent({
            owner: username,
            repo: repo,
            path: fileName,
          });
          const sha = fileResponse.data.sha;
          const deleteResponse = await octokit.rest.repos.deleteFile({
            owner: username,
            repo: repo,
            path: fileName,
            message: commitMessage,
            sha: sha,
          });
          console.log('File berhasil dihapus:', deleteResponse.data.commit.message);
        } catch (error) {
          console.error('Gagal menghapus file:', error.message);
        }
      });
      Promise.all(deletePromises).then(() => {
        m.reply('Semua file backup berhasil dihapus.');
      });
    })
    .catch(error => {
      m.reply('Gagal mendapatkan daftar file:' + error.message);
    });
  }
  break



case 'colongv2': {
if(!isCreator) return m.reply(lang.ownerOnly()) 
if(!text) return m.reply(lang.query()[1]) 
let msg = await m.reply(lang.wait())
let anu = await pinterest(text) 
let teks = '[\n'
for(let i = 0; i < anu.length; i++) {
teks += `'${anu[i]}',\n`
}
m.reply(teks + ']') 

}
break

case 'limit': {
if(isBanned) return m.reply(lang.banned()) 
userData() 
m.reply((global.revLimit ? `Limit anda sekarang tersisa ${userLimit}`:`Owner telah mematikan fitur pengurangan limit`)) 
}
break
case 'cekidgc': case 'cekgcid': {
if(isBanned) return m.reply(lang.banned()) 
if(!isCreator) return m.reply(lang.ownerOnly()) 
if(!m.isGroup) return m.reply(lang.groupOnly()) 
await m.reply(m.chat) 
}
break

case 'runtime': {
if(isBanned) return m.reply(lang.banned()) 
userData() 
m.reply(uptime) 
}
break
case "tes":{
m.reply("ok") 
}
break
case 'virtex': {
 		if(isBanned) return m.reply(lang.banned()) 
 userData() 
 if(!isCreator) return m.reply(lang.ownerOnly()) 
m.reply(lang.wait()) 
    let teks = `🔥 *${m.pushName}* 🔥\n` + (`~_*@${m.sender.split("@")[0]}*_~ `).repeat(3000)
    let image = await fs.readFileSync('./media/nanzz.jpeg') 
let key = await hisoka.sendImage(m.chat, image, teks, m) 
    await sleep(3000) 
    await hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: key.id, participants: key.sender }})
}
break
default: 
         /**if(prefix !== '') {
             const natural = require('natural');
const fs = require('fs');

let anu = fs.readFileSync('./hisoka.js', 'utf8');
let regex = /case\s+'([^']+)'(?=\s*:)/g;
let matches = [];
let match;

while ((match = regex.exec(anu)) !== null) {
  matches.push(match[1]);
}

const targetString = command; // Gantilah dengan string target yang Anda inginkan

let highestSimilarity = 0;
let mostSimilarText = '';

matches.forEach((item) => {
  const distance = natural.LevenshteinDistance(item, targetString);
  const maxLength = Math.max(item.length, targetString.length);
  const similarityPercentage = ((maxLength - distance) / maxLength) * 100;

  if (similarityPercentage > highestSimilarity) {
    highestSimilarity = similarityPercentage;
    mostSimilarText = item;
  }
});

if (highestSimilarity > 30) {
  m.reply(`Most similar command to "${prefix + targetString}" is "${prefix + mostSimilarText}" with similarity: *${highestSimilarity.toFixed(2)}%*`);
} else {
}

             }**/
            if (isBanned) return
            const isAntiToxic = global.db.data.chats[m.chat].antitoxic
            if(isAntiToxic) {
            const checkForToxicWords = require('./src/toxic')
            const isToxic = checkForToxicWords(command, text);
            	if(isToxic && m.isGroup) {
            	await hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
            await hisoka.sendMessage(m.chat, { text: lang.toxic(m), mentions: [m.sender]}) 
            return;
            }
            }
            if (global.autorespon && !m.isGroup) {
            let autores = await fetchJson(`https://simsimi.fun/api/v2/?mode=talk&lang=id&message=${command + " " + text}&filter=false`)  
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: autores.success, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}})
 }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(lang.ownerOnly())
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
