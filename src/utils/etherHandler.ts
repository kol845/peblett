const ethers =  require("ethers");
// var bip32 = require('bip32')

const testNetAPIKey = "c73b6bd1d01d4152a57d6c3d686ee9ff"
const provider = new ethers.providers.InfuraProvider("rinkeby", testNetAPIKey)

const walletStorageName = "peblett_wallet"
const addressStorageName = "peblett_address"

interface Wallet{
    encrypt:((password:string)=>object),
    address:string,
}
const getAddress = () =>{
    return localStorage.getItem(addressStorageName)
}

const purgeWallet = () =>{
    localStorage.removeItem(walletStorageName)
    localStorage.removeItem(addressStorageName)
}

const getBalance = async (address:string)=>{
    const balance = await provider.getBalance(address)
    const amnt = ethers.utils.formatEther(balance)
    return amnt;
}

const createWallet = async () => {
    return await ethers.Wallet.createRandom()
}

const createWalletFromMnemonic = async (mnemonic)=>{
    return await ethers.Wallet.fromMnemonic(mnemonic)
}

const encryptWallet = async (wallet:Wallet, password:string):Promise<string> => { // Returns wallet in JSON string format
    const jsonWallet = await wallet.encrypt(password);
    return JSON.stringify(jsonWallet)
}
const decryptWallet = async (stringWallet:string, password:string):Promise<object> => { // Returns wallet in JSON string format
    const wallet:Wallet = await ethers.Wallet.fromEncryptedJson(JSON.parse(stringWallet), password)
    return wallet
}
// saveWallet() and loadWallet() deal with localStorage
const saveWallet = async (wallet:Wallet, password:string) => {
    const jsonWallet = await wallet.encrypt(password);
    localStorage.setItem(walletStorageName, JSON.stringify(jsonWallet))
    localStorage.setItem(addressStorageName, wallet.address)
}
const loadWallet = async(password:string):Promise<object>=>{
    const stringWallet = localStorage.getItem(walletStorageName)
    const wallet:Wallet = await ethers.Wallet.fromEncryptedJson(JSON.parse(stringWallet), password)
    return wallet;
}

async function sendEth(wallet, toAddr, amnt){
    const walletSigner = wallet.connect(provider)
    const tx = await walletSigner.sendTransaction({
        to: toAddr,
        value: ethers.utils.parseEther(""+amnt)
    });
}

export{ createWallet, saveWallet, loadWallet, encryptWallet, decryptWallet, getAddress, purgeWallet, getBalance, createWalletFromMnemonic, sendEth }
