import { Outlet } from "react-router-dom";

import styled from "styled-components";

const Root = () => {
  return (
    <Overlay>
      <Outlet />

      <Messenger />
    </Overlay>
  )
}

const Overlay = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export default Root;

