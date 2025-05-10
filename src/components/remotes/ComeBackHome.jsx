import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Selector from "./Selector";

const ComeBackHome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    
  }

  return (
    <Container>
      <Selector item={["홈으로 돌아가기"]} onSelect={goHome}/>
    </Container>
  );
}

const Container = styled.div``;

export default ComeBackHome;
