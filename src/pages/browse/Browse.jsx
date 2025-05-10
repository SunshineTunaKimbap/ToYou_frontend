import styled from "styled-components";
import { useSelector } from "react-redux";

import Letter from "../letter/Letter";
import BrowseFront from "./BrowseFront";
import { useEffect, useState } from "react";

import { get_letters } from "../../apis/axios";

const Browse = (props) => {
  const [letters, setLetters] = useState([]);
  const userInfo = useSelector((state) => state.user.value);

  useEffect(() => {
    get_letters(userInfo.name).then((response) => {
      setLetters(response["letters"]);
    })
  }, []);

  // useEffect(() => {
  //   console.log(letters)
  // }, [letters])

  if (letters.length === 0) return null;

  return (
    <Container>
      <Title>{userInfo.name || "당신"}에게 온 편지</Title> {/* 타이틀 */}
      <BrowseFront />
      {
        letters.map((info, index) => (
          <Letter key={index} info={info} />
        ))
      }
    </Container>
  );
};

export default Browse;

const Container = styled.div`
  width: 100%;
  min-height: 2320px;
  background: white;
  position: relative;
  font-family: 'DungGeunMo', sans-serif;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: visible;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  border-bottom: 3px solid black;
  padding-bottom: 8px;
  margin-top: 50px;
  margin-bottom: 20px;
  align-self: flex-start;
`;
