import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Letter from "../letter/Letter"

import { Text } from "../../components/Typography/default";

import letterBg1 from "../../assets/imgs/letter1.jpeg";
import letterBg2 from "../../assets/imgs/letter2.jpeg";
import letterBg3 from "../../assets/imgs/letter3.jpeg";
import letterBg4 from "../../assets/imgs/letter4.jpeg";
import letterBg5 from "../../assets/imgs/letter5.jpeg";
import letterBg6 from "../../assets/imgs/letter6.jpeg";
import writeIcon from "../../assets/imgs/write.png";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

const BrowseFront = () => {

    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.value);

  return (
    <LetterBox>
      <LetterBackground src={letterBg5} alt="letter background" />
      <LetterText>
        <span>소중한 사람에게</span>


        <ContentArea>당신의 진심을 전달해 보세요.</ContentArea>
      </LetterText>

      <FromText>{userInfo.name}(이)가</FromText>
      <WriteIcon src={writeIcon} onClick={() => navigate("/post")} onMouseEnter={() => {}}/>
    </LetterBox>

  )
}

const Container = styled.div`
  width: 100%;
  min-height: 2320px;
  /* margin: 0 auto; */
  background: white;
  position: relative;
  font-family: 'DungGeunMo', sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
  display:flex;
  align-items: center;
  flex-direction: column;

  overflow-y: visible;
`;

const LetterSub = styled.p`
  font-size: 20px;
  margin: 50px 0 10px;
  text-align: center;
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
  height: auto;
  pointer-events: none; 
`;

const LetterText = styled.div`
  position: absolute;
  top: 20px;
  left: 35px;
  right: 30px;
  z-index: 10;
  color:black;
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

const WriteIcon = styled.img`
  width: 70px;
  height: auto;
  position: absolute;
  z-index: 30;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  
`

const ReceiverInput = styled.div`
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

const Line = styled.div`
  font-size: 18px;
  line-height: 2.23;
`;

const FromText = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  font-size: 18px;
  color: black;
  font-family: 'DungGeunMo', sans-serif;
`;

const ContentArea = styled.div`
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

export default BrowseFront;
