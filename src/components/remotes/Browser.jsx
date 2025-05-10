import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { setRemote } from "../../features/remote/remoteSlice";
import { deactivate } from "../../features/messenger/messengerSlice";

import { RemoteText } from "../Typography/default";
import Selector from "./Selector";
import { useEffect } from "react";

const Browser = () => {
  const userInfo = useSelector((state) => state.user.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo]);

  const onComplete = (index) => {
    dispatch(setRemote({newRemote: "comeBackHome"}));
    dispatch(deactivate());

    if (index === 1) {
      navigate("/letter");
    } else {
      navigate("/post");
    }
  }

  return (
    <>
      <RemoteText $fontSize="24px">{userInfo.name}</RemoteText>

      <Selector item={["편지함 가기", "편지쓰기"]} onSelect={onComplete} />
    </>
  );
}

const Container = styled.div``;

export default Browser;
