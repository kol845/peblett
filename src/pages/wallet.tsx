import React, { useEffect, useState } from 'react';
import styled from 'styled-components' 
import { navigate } from "gatsby";

import Seo from "../components/seo"

import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import QRCode from 'qrcode'

import IconButton from '../components/iconButton';
import Button from '../components/button'
import consts from '../constants/constants'
import Loading from '../components/loading'
import Modal from '../components/modal'

import { Loading as LoadingDot } from 'react-loading-dot'


import { getAddress, purgeWallet, getBalance } from '../utils/etherHandler'

// const tmpAddr="0x2cb66D7ff39178B65c080aD2775687Bfa41fC97E"
const tmpBalance="0.0"

const shrinkAddr = (addr)=>{
    return (addr.slice(0,4)+"..."+addr.slice(-3))
}

const Wallet = ({ location }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showReceive, setShowReceive] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>(null);

  const [qrSrc, setQrSrc] = useState<string>("");
  // const [balanceLoading, setBalanceLoading] = useState<boolean>(true);


  const address = getAddress()
  let shortAddr = "null"
  if(address) shortAddr = shrinkAddr(address)

  
  const resetWallet = () =>{
    purgeWallet()
    navigate('/')
  }
  const loadBalance = async() =>{
    setBalance(await getBalance(address))
  }


  useEffect(() => {
    if(!getAddress()) navigate("/") // If wallet does not exist
    else {
      QRCode.toDataURL(address).then(setQrSrc);
      setLoading(false)
      loadBalance()
    }
  }, []);
  return(
    <RootContainer>
        <Seo title="Wallet"/>
        <ContentContainer>

        {loading ? <Loading/>:
        <>
        <HeaderContainer>
            <StyledIconButton ariaLabel="Go to settings" Icon={ColoredSettingsIcon} onClick={resetWallet}/>
            <Typography variant="h6" style={{}}>
                {shortAddr}
            </Typography>
        </HeaderContainer>
        <Seperator/>
        <BodyContainer>
            <Typography variant="h4" style={{}}>
                    {balance==null ? <LoadingDot size="0.5rem" margin="0.5rem"/>:balance + " ETH"}
            </Typography>
            <ButtonContainer>
                <Button text="Receive" onClick={()=>setShowReceive(true)} size="half"/>
                <Button text="Send" onClick={()=>{}} size="half"/>
            </ButtonContainer>
        </BodyContainer>
        </>}
        <Modal show={showReceive} setShow={setShowReceive} >
          <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", flexDirection:"column",height:"100%"}}>
          <Typography variant="h6" style={{}}>
                  {address}
          </Typography>
          <img src={qrSrc} style={{borderRadius:"10px", width:"50%"}}/>
          </div>
        </Modal>
        </ContentContainer>
    </RootContainer>
  )
}

export default Wallet

const StyledIconButton = styled(IconButton)`
  position:absolute; 
  left:35%;
  @media (max-width: ${consts.media.TABLET}) {
    left: 25%;
  }
  @media (max-width: ${consts.media.MOBILE}) {
    left: 5%;
  }
`

const ColoredSettingsIcon = styled(SettingsIcon)`
    color:${consts.colors.PRIMARY};
`
const Seperator = styled.div`
    background-color:white;
    width:100%;
    height:2px; 
`
const RootContainer = styled.div`
    margin:auto;
    margin-top:30px;
    justify-content: center;
    height:70vh;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  align-items:center;
  height:100%;
  &>* {
    margin:2vh;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  align-items:center;
  &>* {
    margin:2vh 0px;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  width:100%;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  &>Button {
    margin:0px 10px;
  }
`