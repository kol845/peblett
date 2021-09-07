import React, { useState, useEffect } from 'react';
import { navigate } from "gatsby";

import styled from 'styled-components' 

import Typography from '@material-ui/core/Typography';

import Loading from '../loading'
import Modal from '../modal'
import TextField from '../textField'
import Button from '../button'
import RecoveryBox from "../recoveryBox"


import PasswordConfirmation from '../screens/passwordConfirmation';
import consts from '../../constants/constants'

import { loadWallet, sendEth, purgeWallet } from '../../utils/etherHandler'

const SettingsModal = ({  show, setShow }) => {
  const [showRecPhase, setShowRecPhase] = useState<boolean>(false);
  const [forgetWallet, setForgetWallet] = useState<boolean>(false);
  const [mnemonic, setMnemonic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const stepBack=()=>{
    setShowRecPhase(false)
    setForgetWallet(false)
    setStep(1)
  }
  const doForgetWallet = () =>{
    purgeWallet()
    navigate('/')
  }
  const submitPassword = async (password:string) =>{
    setLoading(true)
    const wallet = await loadWallet(password)
    setMnemonic(wallet._mnemonic().phrase)
    setStep(2)
    setLoading(false)
  }
  const ConfirmForgetWallet = ()=>(
    <Wrapper>
        <Wrapper style={{ margin:"10px", padding:"0px 18px" }}>
            <Typography variant="h6" align="center" color='primary' style={{  }}>
                Are you sure you want to forget your wallet?
            </Typography>
            <Typography variant="subtitle1" align="center" style={{}}>
                Make sure you have your wallets Recovery Phrase stored safe, so that you can later recover this wallet.
            </Typography>
        </Wrapper>
        <Wrapper style={{ margin:"10px", flexDirection:"row" }}>
            <Button size="half" text="Cancel" onClick={stepBack} style={{ margin:"0px 12px"}}/>
            <Button size="half" secondary={true} text="Forgett Wallet" onClick={doForgetWallet} style={{ margin:"0px 12px"}}/>
        </Wrapper>
    </Wrapper>
  )
  return (
    <>
        <Modal show={show} setShow={setShow} disableModalExit={loading} resetState={stepBack} hasBackButton={(showRecPhase||forgetWallet)&&step!=2 ?true:false} backButtonOnClick={stepBack}>
        {loading ? <Loading style={{width:"50%"}}/>:    
            !showRecPhase && !forgetWallet? 
                <Wrapper> 
                    <Button size="max" text="Show Recovery Phrase" onClick={()=>setShowRecPhase(true)} />
                    <Button size="max" text="Forgett Wallet" onClick={()=>setForgetWallet(true)} />
                </Wrapper>
                : forgetWallet?
                    <ConfirmForgetWallet/>
                :showRecPhase && step==1?
                    <PasswordConfirmation onSubmit={(password) => submitPassword(password)}/>
                :
                    <Wrapper>
                        <Typography variant="h4" style={{margin:"20px"}}>
                            Recovery Phrase
                        </Typography>
                        <RecoveryBox recPhrase={mnemonic} style={{ width:"80%"}}/>
                    </Wrapper> 
                
            }
            
        </Modal>
    </>
  )



}

export default SettingsModal

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

const AddressText = styled(Typography)`
  @media (max-width: ${consts.media.TABLET}) {
    font-size:0.6em;
  }
  @media (max-width: ${consts.media.MOBILE}) {
    font-size:0.5em;
  }
`

const AmntInput = styled(TextField)`
  width:40%;
`
const AddressInput = styled(TextField)`
  width:80%;
`

const TextFiledContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`