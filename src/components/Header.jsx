import React, { Component } from "react";
import { Container, List } from "semantic-ui-react";
import styled from "styled-components";
import data from "../data";
import photo from "../img/myPhoto.jpg";
import Portfolio from "./Portfolio";
import { Link, Element } from "react-scroll";

const Head = styled.header`
  position: sticky;
  top: 0;
  background: #f7f7f7;
  z-index: 3;
`;

const Wrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameBlock = styled.div`
  display: flex;
`;

const Photo = styled.img`
  width: 80px;
  border-radius: 50px;
`;

const Texts = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Name = styled.h2`
  font-family: "Comfortaa", cursive;
  margin: 0;
`;

const Spec = styled.h4`
  margin-top: 5px;
  font-family: "Comfortaa", cursive;
  color: #a9a9a9;
`;

const NavMenu = styled.div`
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

const MenuItem = styled.span`
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  margin: 0 30px;
  transition: 0.3s;
  cursor: pointer;
  & a:hover {
    color: #cb5211;
  }
  @media screen and (max-width: 650px) {
    margin-top: 10px;
  }
`;

const Banner = styled.div`
  background: #65beb4;
`;

const BannerWrapper = styled.div`
  font-family: "Comfortaa", cursive;
  font-size: 30px;
  color: #fff;
  padding: 30px 0;
  line-height: 2.5;
  text-align: center;
  @media screen and (max-width: 650px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const MainBanner = () => (
  <Banner>
    <Container>
      <BannerWrapper>
        Привет, Я Баходир, 34 года, с Киргизии, занимаюсь фриланс
        веб-разработкой. Работаю с такими технологиями: HTML, CSS, JS, React,
        Redux, React-HOC и т.д.<br></br>
        Занимаюсь коммерческой разработкой с 2018 года.<br></br>
      </BannerWrapper>
    </Container>
  </Banner>
);
const PortfolioBlock = styled.div`
  padding-top: 40px;
`;

const PortfolioTitle = styled.h3`
  padding-top: 15px;
  position: sticky;
  top: 130px;
  font-family: "Comfortaa", cursive;
  font-size: 26px;
  float: left;
  @media screen and (max-width: 650px) {
    width: 100%;
    position: static;
  }
`;

const Portfolios = ({ portfolios }) => (
  <PortfolioBlock>
    <Element name="portfolio"></Element>
    <Container>
      <PortfolioTitle>Мои работы</PortfolioTitle>
      <Portfolio></Portfolio>
    </Container>
  </PortfolioBlock>
);

const ContactsBlock = styled.footer`
  margin-top: 30px;
  padding: 30px 0;
  background: #f7f7f7;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  padding-left: 30px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  font-family: "Comfortaa", cursive;
  font-size: 14px;
`;

const Contacts = () => (
  <ContactsBlock>
    <Element name="contacts"></Element>
    <Container>
      <PortfolioTitle>Контакты</PortfolioTitle>
      <ContactsWrapper>
        <List>
          <List.Item>
            <List.Icon size="large" name="mail" />
            <List.Content style={{ fontFamily: "'Comfortaa', sans-serif" }}>
              <a href="mailto:bahobek@gmail.com">bahobek@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon size="large" name="telegram" />
            <List.Content style={{ fontFamily: "'Comfortaa', sans-serif" }}>
              <a href="https://t.me/boriskomsk">@boriskomsk</a>
            </List.Content>
          </List.Item>
        </List>
        <Copyright>Все права защищены</Copyright>
      </ContactsWrapper>
    </Container>
  </ContactsBlock>
);

export default class Header extends Component {
  render() {
    return (
      <>
        <Head>
          <Container>
            <Wrapper>
              <NameBlock>
                <Photo src={photo}></Photo>
                <Texts>
                  <Name>{data.name}</Name>
                  <Spec>Веб-разработчик</Spec>
                </Texts>
              </NameBlock>
              <NavMenu>
                <MenuItem>
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-130}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    Портфолио
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    Контакты
                  </Link>
                </MenuItem>
              </NavMenu>
            </Wrapper>
          </Container>
        </Head>
        <MainBanner></MainBanner>
        <Portfolios></Portfolios>
        <Contacts></Contacts>
      </>
    );
  }
}
