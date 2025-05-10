import { useState } from "react";

import styled from "styled-components";

import { RemoteText } from "../Typography/default";

const Selector = (props) => {
  const [cursor, setCursor] = useState(0);

  return (
    <Container>
      {props.item.map((item, index) => (
        <SelectItem key={index}>
          <RemoteText onClick={() => {setCursor(index)}}>{index === cursor ? `▶ ${item}` : item}</RemoteText>
        </SelectItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
`;

const SelectItem = styled.div``;

export default Selector;