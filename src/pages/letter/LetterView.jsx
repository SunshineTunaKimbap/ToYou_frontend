import styled from "styled-components";
import catImg from "../../assets/imgs/cat_image.png";

import { Text } from "../../components/Typography/default";
import Letter from "./Letter";
//import { useState } from "react";

import { useNavigate } from "react-router-dom";

const LetterView = (props) => {
  const info = props.info;
  const navigate = useNavigate(); 

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("링크가 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
        alert("링크 복사에 실패했습니다.");
      });
  };

  const handleMoreClick = () => {
    navigate("/back", { state: info });
  };
  return (
    <Container>
      <Title>{info.abbrReceiver}에게 온 편지</Title>
      <SubTitle>누군가에게서 온 편지</SubTitle>

        <Letter info={info}/>

      <FlexRow>
        <CatImage src={catImg} alt="cat" />
        <ButtonGroup>
          <Button onClick={handleCopyLink}>공유하기</Button>
          <Button onClick={handleMoreClick}>더 많은 내용 보기</Button>
        </ButtonGroup>
      </FlexRow>
    </Container>
  );
};

export default LetterView;

const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  font-family: 'DungGeunMo', sans-serif;
  display:flex;
  align-items: center;
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
