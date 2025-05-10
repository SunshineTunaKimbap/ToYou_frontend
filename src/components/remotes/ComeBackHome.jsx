import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setRemote } from "../../features/remote/remoteSlice";
import { deactivate } from "../../features/messenger/messengerSlice";

import styled from "styled-components";
import Selector from "./Selector";

const ComeBackHome = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goHome = (index) => {
    switch (index) {
      case 0:
        navigate("/");
        dispatch(setRemote({newRemote: "name"}));
        break;
      case 1:
        navigate("/letter");
        dispatch(deactivate());
        break;
      case 2:
        navigate("/post");
        dispatch(deactivate());
        break;
    }
  }

  return (
    <Container>
      <Selector item={["처음으로 돌아가기", "편지함 가기", "편지 쓰기"]} onSelect={goHome}/>
    </Container>
  );
}

const Container = styled.div``;

export default ComeBackHome;
