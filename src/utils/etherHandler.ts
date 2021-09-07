const ethers =  require("ethers");
// var bip32 = require('bip32')

const testNetAPIKey = "c73b6bd1d01d4152a57d6c3d686ee9ff"
const provider = new ethers.providers.InfuraProvider("rinkeby", testNetAPIKey)

const walletStorageName = "peblett_wallet"
const addressStorageName = "peblett_address"

interface IWallet{
    encrypt:((password:string)=>object),
    address:string,
    _mnemonic:()=>{phrase:string}
}
const getAddress = () =>{
    return typeof window !== 'undefined' && localStorage.getItem(addressStorageName)
}

const purgeWallet = () =>{
    typeof window !== 'undefined' && localStorage.removeItem(walletStorageName)
    typeof window !== 'undefined' && localStorage.removeItem(addressStorageName)
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

const encryptWallet = async (wallet:IWallet, password:string):Promise<string> => { // Returns wallet in JSON string format
    const jsonWallet = await wallet.encrypt(password);
    return JSON.stringify(jsonWallet)
}
const decryptWallet = async (stringWallet:string, password:string):Promise<object> => { // Returns wallet in JSON string format
    const wallet:IWallet = await ethers.Wallet.fromEncryptedJson(JSON.parse(stringWallet), password)
    return wallet
}
// saveWallet() and loadWallet() deal with localStorage
const saveWallet = async (wallet:IWallet, password:string) => {
    const jsonWallet = await wallet.encrypt(password);
    typeof window !== 'undefined' && localStorage.setItem(walletStorageName, JSON.stringify(jsonWallet))
    typeof window !== 'undefined' && localStorage.setItem(addressStorageName, wallet.address)
}
const loadWallet = async(password:string):Promise<IWallet>=>{
    const stringWallet = typeof window !== 'undefined' && localStorage.getItem(walletStorageName)
    const wallet:IWallet = await ethers.Wallet.fromEncryptedJson(JSON.parse(stringWallet), password)
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
