/**
   * Create By Raiden.
   * Contact Me on wa.me/62859180658541
   * Follow https://github.com/NoviBotz
*/

/**
	* Recode by jas kiding
	* Contact Me on wa.me/6282139672290
	* Edit premium di command 'addprem' & 'delprem'
**/

const fs = require('fs')
const chalk = require('chalk')

global.textdonasi = `Dana: 6285175463174\n\nOwner: wa.me/6285175463174\n©SunsBot`
global.language = "id" /**default bahasa tersedia:
 * id => indonesia
 * en => english
 **/
 global.avaibiledLanguage = "id, en"

// Other
global.botname = "SunsBot" //nama bot
global.owner = ['6285175463174','6285175463174','6285175463174','6285175463174'] //ownernya
global.packname = 'Slemek' //stiker packname
global.author = 'WhatsApp Bot' //stiker author
global.sessionName = 'session' //gausah di apa2in
global.gmail = 'Sunsbot@gmail.com' //email lu
global.linkgc = 'https://chat.whatsapp.com/LGdeWLOZzqP91tARC9AN3b' //link grup wangsaf lu
global.urlmenu = 'https://telegra.ph/file/9a5e1a4aeeb89a7013355.jpg' //gambar menu 1
global.urlmenu2 = 'https://telegra.ph/file/4fcd3b3674f6e3d1325b9.jpg' //gambar menu 2
global.xlsx = './media/fake.xlsx' //gausah di apa2in
global.donasi = './media/donasi.jpg' //image donasi
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.limitawal = {
    premium: Infinity,
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
