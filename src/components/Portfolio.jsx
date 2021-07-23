import React, { useState } from "react";
import {
  Card,
  Icon,
  Image,
  Button,
  Header,
  Modal,
  Label
} from "semantic-ui-react";
import styled from "styled-components";
import data from "../data";

const StackWrapper = styled.div`
  min-height: 120px;
`;

const StackBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Portfolio = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <Card.Group style={{ justifyContent: "center" }}>
      {data.portfolios.map(portfolio => (
        <Card style={{ boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)" }}>
          <Image
            style={{ height: "150px" }}
            src={portfolio.img}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{portfolio.projectName}</Card.Header>
            <Card.Meta>{portfolio.date}</Card.Meta>
            <Card.Description>{portfolio.description}</Card.Description>
          </Card.Content>
          <Card.Content>
            <StackWrapper>
              <StackBlock>
                {portfolio.stacks.map(stack => (
                  <Label pointing as="a">
                    {stack}
                  </Label>
                ))}
              </StackBlock>
            </StackWrapper>
          </Card.Content>

          {portfolio.projectLink ? (
            <Card.Content extra>
              <a
                href={portfolio.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="desktop" />
                Ссылка на проект
              </a>
            </Card.Content>
          ) : (
            <Card.Content extra>Пока не вышел в продакшен</Card.Content>
          )}
          {portfolio.githubLink ? (
            <Card.Content extra>
              <a
                href={portfolio.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="code" />
                Ссылка на код
              </a>
            </Card.Content>
          ) : (
            <Card.Content extra>Репозиторий приватный</Card.Content>
          )}
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              setOpenId(portfolio.id);
            }}
          >
            Подробнее
          </Button>

          <Modal
            size="large"
            dimmer="blurring"
            open={openId === portfolio.id}
            onClose={() => {
              setOpenId(null);
            }}
            style={{ fontFamily: "'Comfortaa', cursive" }}
          >
            <Modal.Header>Подробности</Modal.Header>
            <Modal.Content image>
              <Image size="large" src={portfolio.modalImg} />

              <Modal.Description>
                <Header>{portfolio.projectName}</Header>
                <p>{portfolio.details}</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color="black"
                onClick={() => {
                  setOpenId(null);
                }}
              >
                Закрыть
              </Button>
            </Modal.Actions>
          </Modal>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Portfolio;
