import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const TextInput = (props) => {
  const inputRef = useRef(null);

  const isActivate = useSelector((state) => state.messenger.value);

  const handleChange = (event) => {
    props.setInput(event.target.value)
  }

  useEffect(() => {
    if (isActivate) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [isActivate]);

  return (
    <Container>
      <InputBox type="text" value={props.input} onChange={handleChange} onClick={(e) => {e.stopPropagation()}} maxLength={props.maxLength} ref={inputRef} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;

  width: 170px;
`;

const InputBox = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0);

  border-bottom: 5px solid #3C3434;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 5px solid #3C3434;
  }

  color: #3C3434;
  font-size: 22px;
`;

export default TextInput;
