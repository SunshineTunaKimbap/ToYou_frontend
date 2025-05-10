import { useState } from "react";

import styled from "styled-components";

import { RemoteText } from "../Typography/default";

const Selector = (props) => {
  const [cursor, setCursor] = useState(0);
  const [selection, setSelection] = useState(-1);

  const onClick = (index) => {
    if (cursor !== index) {
      setCursor(index);
      setSelection(-1);
      return;
    }

    if (selection !== index) {
      setSelection(index);
      return;
    }

    if (selection === index) {
      props.onSelect(index);
    }
  }

  return (
    <Container>
      {props.item.map((item, index) => (
        <SelectItem key={index} $border={index === selection}>
          <RemoteText onClick={() => {onClick(index)}}>{index === cursor ? `▶ ${item}` : item}</RemoteText>
        </SelectItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
`;

const SelectItem = styled.div`
  border: ${props => props.$border ? "2px solid #3C3434" : "none"};
`;

const Underscore = styled.div`
  margin-top: 2px;
  height: 2px;
  width: 120px;

  background-color: #3C3434;
`;

export default Selector;