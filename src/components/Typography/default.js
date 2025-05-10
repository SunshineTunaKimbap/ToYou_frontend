import DungGeunMo from "../../assets/fonts/DungGeunMo.ttf";

import styled from "styled-components";

export const Text = styled.p`
  @font-face {
    font-family: 'DugGeunMo';
    src: url(${DungGeunMo}) format('truetype');
    font-weight: normal;
    font-style: normal;

    color: black;
  }

  letter-spacing: -0.5px;
`;
