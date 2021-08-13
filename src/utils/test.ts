const etherHandler = require('./etherHandler.ts')

const main = async ()=>{
    let wallet = await etherHandler.createWallet()
    console.log("Wallet Created:")
    console.log(wallet)
    const passwd = "pebo123"
    let jsonWallet = await etherHandler.saveWallet(wallet, passwd)
    console.log("Wallet encrypted:")
    console.log(jsonWallet)
    let loadedWallet = await etherHandler.loadWallet(jsonWallet, passwd);
    console.log("Wallet loaded:")
    console.log(loadedWallet)
}

main()