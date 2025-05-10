import styled from "styled-components";
import cat_image from '../../assets/imgs/cat_image.png';
import bubble_image from '../../assets/imgs/dear_bubble.png';
import background_image from '../../assets/imgs/background.png';

const Profile = () => {
  return (
    <Container>
      <BubbleImage src={bubble_image} alt="no bubble??" />
      <CatImage src={cat_image} alt="no cat??" />
      <GrassBackground />
    </Container>
  );
};

export default Profile;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: white;
`;

const BubbleImage = styled.img`
  margin-left: 50px;
  margin-top: 100px;
  width: 300px;
  height: auto;
  z-index: 1;
  animation: floatUpDown1 5s ease-in-out infinite;
  @keyframes floatUpDown1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;

const CatImage = styled.img`
  margin-right: 200px;
  width: 150px;
  height: auto;
  z-index: 1;

  animation: slideIn 3s ease-in-out;
  /* animation: sway 2s ease-in-out infinite; */
  @keyframes slideIn {
    0%   { transform: translateX(-200px); }
    100% { transform: translateX(0); }
  }
  @keyframes sway {
    0%   { transform: translateX(-2px);
      transform:rotate(-5deg); }
    50% { transform: translateX(5px);
      transform: rotate(5deg); }
    100%   { transform: translateX(-2px);
      transform:rotate(-5deg); }
  }
`;

const GrassBackground = styled.div`
  width: 100%;
  height: 600px; /* 원하는 높이 */
  background-image: url(${background_image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin-top: -2px; /* 고양이와 버블 아래에 여백 줘서 부드럽게 연결 */
  z-index: 0;
`;
