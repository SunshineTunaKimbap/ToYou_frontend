import { useEffect, useMemo, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { activate } from "../../features/messenger/messengerSlice";

import styled from "styled-components";

import Remote from "../../assets/imgs/folderphone.png"

import { messengerMobileSize, messengerPcSize } from "../../constant/messengerSize";
import { remoteComponents } from "../../constant/remoteComponents";

const Messenger = () => {
  const [remoteSize, setRemoteSize] = useState(messengerPcSize);

  const isActivate = useSelector((state) => state.messenger.value);
  const dispatch = useDispatch();

  const remoteName = useSelector((state) => state.remote.value);

  const RemoteComponent = useMemo(() => {
    return remoteComponents[remoteName]
  }, [remoteName]);

  useEffect(() => {
    const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (isMobileDevice) {
      setRemoteSize(messengerMobileSize)
    }
  }, [])

  const onClick = () => {
    if (!isActivate) {
      dispatch(activate());
    }
  }

  return (
    <Container $up={isActivate} $messengerWidth={remoteSize.width} onClick={onClick}>
      <LayerContainer>
        <ImageLayer>
          <Image src={Remote} alt="/folderphone.png" width={`${remoteSize.width}px`} height={`${remoteSize.height}px`}/>
        </ImageLayer>
        <RemoteLayer>
          {<RemoteComponent />}
        </RemoteLayer>
      </LayerContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: ${props => props.$up ? '50vh' : '90vh'};

  left: calc(50vw - ${props => props.$messengerWidth / 2}px);

  width: 100vw;
  height: 100vh;

  transition: top 0.25s ease-out;
`;

const LayerContainer = styled.div``;

const ImageLayer = styled.div`
  position: absolute;

  z-index: 2;
`;

const RemoteLayer = styled.div`
  position: absolute;

  z-index: 3;

  top: 150px;
  left: 70px;
`;

const Image = styled.img`
`;

export default Messenger;
