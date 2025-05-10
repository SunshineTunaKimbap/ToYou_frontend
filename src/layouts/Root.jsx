import { Outlet, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deactivate } from "../features/messenger/messengerSlice";

import styled from "styled-components";

import Messenger from "../components/messenger/Messenger";
// import { useEffect } from "react";

const Root = () => {
  const isMessengerActivate = useSelector((state) => state.messenger.value);

  const isActivate = useSelector((state) => state.messenger.value);
  const dispatch = useDispatch();

  const location = useLocation();

  const LowerContainerOnClick = () => {
    if (isActivate && location.pathname !== "/") {
      dispatch(deactivate());
    }
  }

  return (
    <Overlay>
      <UpperContainer>
        <Messenger />
      </UpperContainer>


      <LowerContainer $blur={isMessengerActivate && location.pathname !== "/" } onClick={LowerContainerOnClick}>
        <Outlet />
      </LowerContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;

  //temp
`;

const UpperContainer = styled.div`
  position: absolute;
  /* display: flex;
  align-items: flex-end;
  justify-content: center; */
/* 
  width: 100vw;
  height: 100vh; */
  /* height: 100vh; */
  
  z-index: 1;

  overflow: visible;
`;

const LowerContainer = styled.div`
  position: absolute;
  z-index: 0;

  width: 100vw;
  height: 100vh;

  filter: blur(${props => props.$blur ? '3.7px' : 0});
`;

export default Root;

