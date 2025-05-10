import DungGeunMo from "../../assets/fonts/DungGeunMo.ttf";

import styled from "styled-components";

export const Text = styled.p`
  letter-spacing: -0.5px;
`;

export const RemoteText = styled.p`
  color: #3C3434;
  letter-spacing: -0.5px;

  font-size: ${props => props.$fontSize};
`
