import { useEffect, useState } from "react";

import styled from "styled-components";

import Remote from "../../assets/imgs/folderphone.png"
import { messengerMobileSize, messengerPcSize } from "../../constant/messenger";

const Messenger = () => {
  const [remoteSize, setRemoteSize] = useState(messengerPcSize);
  const [isActivate, setIsActivate] = useState(true);

  useEffect(() => {
    const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (isMobileDevice) {
      setRemoteSize(messengerMobileSize)
    }
  }, [])

  const onClick = () => {
    setIsActivate(!isActivate);
  }

  return (
    <Container $up={isActivate} onClick={onClick}>
      <Image src={Remote} alt="/folderphone.png" width={`${remoteSize.width}px`} height={`${remoteSize.height}px`}/>
    </Container>
  );
}

const BlurContainer = styled.div`
  width: 100vw;
  height: 100vh;

  /* filter: blur(10px) */
`;

const Container = styled.div`
  position: absolute;
  top: ${props => props.$up ? '50vh' : '90vh'};

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  transition: top 0.25s ease-out;

  background-color: ${props => props.$up ? 'blue' : 'red'};
`;

const Image = styled.img`
`;

export default Messenger;
