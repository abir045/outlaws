import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin: 0 10px;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/6501787/pexels-photo-6501787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>
              Don't Compromise on STYLE! Get Flat 30% off for new arrivals
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://images.pexels.com/photos/6501787/pexels-photo-6501787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </ImgContainer>
          <InfoContainer>
            <Title>Christmas Sale</Title>
            <Desc>
              Don't Compromise on STYLE! Get Flat 30% off for new arrivals
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;