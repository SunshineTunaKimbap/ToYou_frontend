import styled from "styled-components";
import letterBg from "../../assets/imgs/letter1.jpeg";

import { Text } from "../../components/Typography/default";
//import { useState } from "react";

const Letter = (props) => {
  const info = props.info;
  return (
    <LetterBox>
      <LetterBackground src={letterBg} alt="letter background" />
      <LetterText>
        {info.abbr_receiver} 에게<br />
        {info.content}
      </LetterText>
    </LetterBox>
  );
};

export default Letter;

const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  font-family: 'DungGeunMo', sans-serif;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  border-bottom: 3px solid black;
  padding-bottom: 8px;
  margin-top: 50px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const SubTitle = styled.div`
  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

const LetterBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 370px;
  margin-bottom: 40px;
  align-items: center;
`;

const LetterBackground = styled.img`
  width: 100%;
  border: 1px dashed #ccc;
`;

const LetterText = styled(Text)`
  position: absolute;
  top: 15px;
  left: 35px;
  right: 25px;
  font-size: 18px;
  line-height: 1.85;
  color: black;
  white-space: pre-line;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: translateX(10px);
`;

const Button = styled.button`
  background-color: #acc4a5;
  border: none;
  border-radius: 20px;
  padding: 14px 20px;
  font-size: 16px;
  font-family: 'DungGeunMo', sans-serif;
  cursor: pointer;
`;

const CatImage = styled.img`
  width: 130px;
  height: auto;
  transform: translateY(4px);
`;
