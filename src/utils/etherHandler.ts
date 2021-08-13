const ethers =  require("ethers");

const testNetAPIKey = "c73b6bd1d01d4152a57d6c3d686ee9ff"
const provider = new ethers.providers.InfuraProvider("rinkeby", testNetAPIKey)

const storageName = "peblett_wallet"

interface Wallet{
    encrypt:((password:string)=>object)
}

const createWallet = async () => {
    return await ethers.Wallet.createRandom()
}
const saveWallet = async (wallet:Wallet, password:string) => {
    const jsonWallet = await wallet.encrypt(password);
    localStorage.setItem(storageName, JSON.stringify(jsonWallet))
}
const loadWallet = async(password:string)=>{
    const stringWallet = localStorage.getItem(storageName)
    const wallet:Wallet = await ethers.Wallet.fromEncryptedJson(JSON.parse(stringWallet), password)
    return wallet;
}

export{ createWallet, saveWallet, loadWallet }
