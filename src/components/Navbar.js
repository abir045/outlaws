import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
 `

const Center = styled.div`
 flex:2;
 text-align: center;
`;

const Logo =  styled.h1`
font-weight: bold;
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const SearchContainer = styled.div`

border: 0.5px solid lightgray;
align-items: center;
margin-left: 25px;
display: flex;
padding:5px;


`
const Input = styled.input`

border: none;

`

const MenuItem = styled.div`

font-size: 14px;
cursor: pointer;
margin-left: 25px;
`




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>
                En
            </Language>
            <SearchContainer>
           <Input/>
           <Search style={{color:'grey', fontSize:'16px'}} />
            </SearchContainer>
        </Left>
        <Center><Logo>Outlaws.</Logo></Center>
        <Right>
            <MenuItem>
           Rigister
        </MenuItem>
            <MenuItem>
           Login
        </MenuItem>
        <MenuItem>
           <Badge color="primary" badgeContent={4}>
        <ShoppingCartOutlined/>
      </Badge>
        </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
