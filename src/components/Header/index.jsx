import React from "react";

import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';
import { Button } from "../Button";

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
              <img src='' alt="Logo da dio"/>
              <BuscarInputContainer>
                  <Input placeholder="Buscar..."/>
              </BuscarInputContainer>      
              <Menu>Live Code</Menu>        
              <Menu>Global</Menu>   
            </Row>
            <Row>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar"/>
              <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }