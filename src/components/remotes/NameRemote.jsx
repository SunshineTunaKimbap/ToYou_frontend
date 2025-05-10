import styled from "styled-components";

import { RemoteText } from "../Typography/default";

import Selector from "./Selector";
import TextInput from "./TextInput";

const NameRemote = () => {
  return (
    <Container>
      <RemoteText $fontSize="24px">그대의 이름</RemoteText>
      <RemoteText $fontSize="15px">성과 이름을 입력해주세요.</RemoteText>

      <TextInput maxLength={3}/>

      <Selector item={["대학교 선택하기"]}/>
    </Container>
  )
}

const Container = styled.div``;

export default NameRemote;
