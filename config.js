/**
	* Di buat oleh Naaazzzzz
	* Contact Me on wa.me/6289688206739
	* © Slemek Community
**/

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6289688206739'] //nomor lu
global.default_options = {
	autoread: false, 
	autoreadsw: true
	}

global.mess = {
	done: "Sukses😁", 
	banned: "Anda telah di ban dari bot ini!", 
	owner: "Fitur ini khusus owner!", 
	wait: "Tunggu sebentar"
}
global.prefa = ['','!','.','🐦','🐤','🗿']

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
