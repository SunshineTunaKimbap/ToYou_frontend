import styled from "styled-components"
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
  )
}

const Container = styled.div`
  align-items: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CatImage = styled.img`

    margin-right: 200px;
    width: 150px;
    height: auto;
    
    z-index: 1;
`;

const BubbleImage = styled.img`
    margin-left: 50px;
    margin-top: 100px;
    width: 300px;

    height: auto;

    z-index: -1;
`;

const GrassBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 550px; /* 원하는 높이 */
  background-image: url(${background_image});
  background-size: covesr;
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: 0;
`;

export default Profile;
