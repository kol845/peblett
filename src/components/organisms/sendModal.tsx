import React, { useState, useEffect } from 'react';
import { navigate } from "gatsby";

import styled from 'styled-components' 

import Typography from '@material-ui/core/Typography';

import Loading from '../loading'
import Modal from '../modal'
import TextField from '../textField'
import Button from '../button'
import PasswordConfirmation from '../screens/passwordConfirmation';
import consts from '../../constants/constants'

import { loadWallet, sendEth } from '../../utils/etherHandler'

const SendModal = ({  show, setShow, myAddress, balance }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const onSubmit = ()=>{
    setStep(2)
  }
  const stepBack = ()=>{
    setStep(step-1)
  }
  const confirmPassword = async (password)=>{
    setLoading(true)
    const wallet = await loadWallet(password)
    await sendEth(wallet, address, amount)
    setLoading(false)
    setStep(3)
  }

  const Step2 = ()=>(
    <ModalContainer>
      <PasswordConfirmation buttonText="Confirm & Send" onSubmit={(password)=>confirmPassword(password)}/>
    </ModalContainer>
  )
  const Step3 = ()=>(
    <ModalContainer>
      <Typography variant="h3" style={{}}>
          Ether Successfully Sent!
      </Typography>
    </ModalContainer>
  )
  const doReset=()=>{
    setStep(1)
    
  }
  return (
    <>
        <Modal show={show} setShow={setShow} disableModalExit={loading} resetState={doReset} hasBackButton={step==2?true:false} backButtonOnClick={stepBack}>
        {loading ? <Loading style={{width:"50%"}}/>:
            step==1 ? 
                <ModalContainer>
                  <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}>
                      <Typography variant="h4" style={{}}>
                          SEND FROM
                      </Typography>
                      <AddressText variant="h6" style={{}} noWrap={false}>
                              {myAddress}
                      </AddressText>
                      <Typography variant="subtitle1" style={{}}>
                              ({balance} ETH)
                      </Typography>
                  </div>
          
                  <TextFiledContainer>
                    <AmntInput size="full" id="amount" label="Enter Amount" style={{}} value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    <AddressInput size="max" id="address" label="Enter Address" style={{}} value={address} onChange={(e)=>setAddress(e.target.value)}/>
                  </TextFiledContainer>
                  <Button size="max" text="Send" onClick={()=>onSubmit()} />
                </ModalContainer>

            
            : step==2 ? <Step2/>:<Step3/>}
        </Modal>
    </>
  )



}

export default SendModal

const ModalContainer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;
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