import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Close from '@material-ui/icons/Close';

import consts from '../constants/constants'
import BackButton from './backButton'


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 50%;
  height: 60%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgb(0,0,0,0.9);

  color: white;
  position: relative;
  z-index: 10;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  display:flex;
  justify-content:space-around;
  alignItems:center;
  flexDirection:column;
  @media (max-width: ${consts.media.TABLET}) {
    width: 80%;
  }
  @media (max-width: ${consts.media.MOBILE}) {
    width: 90%;
  }


`;


const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ show, setShow, children, disableModalExit=false, resetState=null, hasBackButton=false, backButtonOnClick=()=>{} }) => {
  const modalRef = useRef();

  const closeModal = () => {
    setShow(false);
    if(resetState != null) resetState();
  };
  const outBoundClick = e =>{
    if (modalRef.current === e.target && !disableModalExit) {
      closeModal()
    }
  }
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && show) {
        setShow(false);
        console.log('I pressed');
      }
    },
    [setShow, show]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {show ? (
        <Background onClick={outBoundClick} ref={modalRef}>
            <ModalWrapper>
              <ModalContainer>
                  {hasBackButton && !disableModalExit? <PositionedBackButton onClick={ backButtonOnClick } /> : null}
                  {children}
                  {!disableModalExit ? 
                  <CloseModalButton
                      aria-label='Close modal'
                      onClick={() => closeModal()}
                  />: null}
              </ModalContainer>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal

const PositionedBackButton = styled(BackButton)`
  top:10px;
  left:10px;
`
const ModalContainer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  height:100%;
  width:100%;
`