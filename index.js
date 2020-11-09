const LORDZ = require('venom-bot')
const fs = require('fs-extra')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const time = moment().format('MMMM Do YYYY, h:mm:ss a')
// const options = {
//     sessionId: 'MRHRTZ',
//     headless: true,
//     qrTimeout: 0,
//     authTimeout: 0,
//     restartOnCrash: start,
//     cacheEnabled: false,
//     useChrome: true,
//     killProcessOnBrowserClose: true,
//     throwErrorOnTosBlock: false,
//     chromiumArgs: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--aggressive-cache-discard',
//         '--disable-cache',
//         '--disable-application-cache',
//         '--disable-offline-load-stale-cache',
//         '--disk-cache-size=0'
//     ]
// }
require('./msgReply')
require('./msgReply'), module => console.log(`Changed ${module} at ${time}`)

const mulai = async (lordz = new Client()) => {
	console.log('[All Status Clear] Server was succesfully started!')



	lordz.onMessage((pesan) => {
		require('./msgReply')(lordz, pesan)
		
		lordz.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[INFO]', `Loaded Message Reach ${msg}, cuting message cache...`, 'yellow')
                    client.cutMsgCache()
                }
            })

	})


function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang menunggu perubahan.')
    require('fs').watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * uncache a module
 * @param {string} module module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

}

LORDZ
	.create('LORDZ')
	.then((lrdz) => {
		mulai(lrdz)
	})
	.catch((e) => {
		console.log(e)
	})