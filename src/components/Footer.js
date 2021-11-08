import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 30%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Outlaws.</Logo>
        <Desc> Live your life in Style</Desc>
        <SocialContainer>
          <SocialIcon color="d66663">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="658bc7">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="2e4569">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 354 NordHavn, Copenhagen
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +45 91437116
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> outlaws@gmail.com
        </ContactItem>
        <Payment src="https://cdn.pixabay.com/photo/2013/03/02/01/25/american-express-89024_960_720.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
