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

    function getChosung(str) {
      const CHOSUNG_LIST = [
        "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ",
        "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
        "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ",
        "ㅋ", "ㅌ", "ㅍ", "ㅎ"
      ];
      
      let result = "";
      for (let char of str) {
        const code = char.charCodeAt(0);
    
        if (code >= 0xac00 && code <= 0xd7a3) {
          const chosungIndex = Math.floor((code - 0xac00) / (21 * 28));
          result += CHOSUNG_LIST[chosungIndex];
        } else {
          result += char;
        }
      }
      return result;
    }
    const abbr=getChosung(name)

    dispatch(setUser({"name": abbr, "school": ""}));
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
