import { useState } from "react";

import styled from "styled-components";

import { RemoteText } from "../Typography/default";

import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { setRemote } from "../../features/remote/remoteSlice";

import Selector from "./Selector";
import TextInput from "./TextInput";

const NameRemote = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onComplete = () => {
    if (name.length <= 0) {
      return;
    }

    dispatch(setUser({name, "school": ""}));
    dispatch(setRemote({newRemote: "browser"}));
  }

  return (
    <Container>
      <RemoteText $fontSize="24px">그대의 이름</RemoteText>
      <RemoteText $fontSize="15px">성과 이름을 입력해주세요.</RemoteText>

      <TextInput maxLength={6} input={name} setInput={setName} />

      <Selector item={["완료"]} onSelect={onComplete} />
    </Container>
  )
}

const Container = styled.div``;

export default NameRemote;
