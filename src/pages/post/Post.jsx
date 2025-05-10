import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import letterBg1 from "../../assets/imgs/letter1.jpeg";
import letterBg2 from "../../assets/imgs/letter2.jpeg";
import letterBg3 from "../../assets/imgs/letter3.jpeg";
import letterBg4 from "../../assets/imgs/letter4.jpeg";
import letterBg5 from "../../assets/imgs/letter5.jpeg";
import letterBg6 from "../../assets/imgs/letter6.jpeg";
import writeIcon from "../../assets/imgs/write.png";

import { post_letters } from "../../apis/axios";

const letterBgList = [letterBg1, letterBg2, letterBg3, letterBg4, letterBg5, letterBg6];

const Post = () => {
  const navigate = useNavigate(); 
  const [selectedBg, setSelectedBg] = useState(letterBg1);
  const [content, setContent] = useState("");
  const [abbrReceiver, setAbbrReceiver] = useState("");

  const userInfo = useSelector((state) => state.user.value);

  const handleSendClick = () => {
    // console.log(userInfo.name, abbrReceiver, content)

    // post_letters({ name_sender: userInfo.name, name_receiver: abbrReceiver, content }).then(() => {
    //   navigate("/letter");
    // })

    alert("전송이 완료되었습니다.");
    navigate("/letter");
  };

  const handleSelectUnivClick = () => {
    alert("아직 구현되지 않은 기능입니다!");
  };

  return (
    <Container>
      <Title>ㄱㄷ에게</Title>
      <LetterSub>받는 사람을 입력하세요</LetterSub>

      <LetterBox>
        <LetterBackground src={selectedBg} alt="letter background" />
        <LetterText>
          <LineWithIcon>
            <ReceiverInput
              value={abbrReceiver}
              onChange={(e) => {
                if (e.target.value.length <= 6) setAbbrReceiver(e.target.value);
              }}
              placeholder={"상대방"}
            />
            <span>에게</span>
            <Icon src={writeIcon} alt="write icon" />
          </LineWithIcon>

          <ContentArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="당신의 진심을 전달해보세요"
            rows={6}
          />
        </LetterText>

        <FromText>{userInfo.name}(이)가</FromText>
      </LetterBox>

      <ActionText>더 많은 내용 작성 &gt;</ActionText>

      <ThumbnailRow>
        {letterBgList.map((bg, index) => (
          <Thumbnail
            key={index}
            src={bg}
            alt={`letter ${index + 1}`}
            onClick={() => setSelectedBg(bg)}
            isSelected={selectedBg === bg}
          />
        ))}
      </ThumbnailRow>

      <ButtonWrap>
        <Button onClick={handleSelectUnivClick}>대학교 선택하기</Button>
        <Button onClick={handleSendClick}>전송하기</Button>
      </ButtonWrap>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 2320px;
  margin: 0 auto;
  background: white;
  position: relative;
  font-family: 'DungGeunMo', sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  border-bottom: 3px solid black;
  padding-bottom: 8px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const LetterSub = styled.p`
  font-size: 20px;
  margin: 50px 0 10px;
  text-align: center;
`;

const LetterBox = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 20px;
`;

const LetterBackground = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
`;

const LetterText = styled.div`
  position: absolute;
  top: 20px;
  left: 35px;
  right: 30px;
  z-index: 10;
  color: black;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LineWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ReceiverInput = styled.input`
  position: relative;
  z-index: 20;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  font-family: 'DungGeunMo', sans-serif;
  width: 100px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const FromText = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  font-size: 18px;
  color: black;
  font-family: 'DungGeunMo', sans-serif;
`;

const ContentArea = styled.textarea`
  font-size: 18px;
  font-family: 'DungGeunMo', sans-serif;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  margin-top: 13px;
  line-height: 1.6;
`;

const ActionText = styled.div`
  text-align: right;
  font-size: 14px;
  margin: 10px 0 40px;
  cursor: pointer;
`;

const ThumbnailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: auto;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "3px solid #444" : "2px solid #ddd")};
  border-radius: 6px;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #acc4a5;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 14px 20px;
  font-size: 16px;
  font-family: 'DungGeunMo', sans-serif;
  cursor: pointer;
  width: 80%;
`;