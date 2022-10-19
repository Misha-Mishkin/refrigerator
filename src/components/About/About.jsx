import {
  Header,
  Buttons,
  Items,
  Item,
  Button,
  Block,
  BigLogo,
  TextBlock,
  Text,
  Image,
  Wrapper,
  BlockItems,
  ImgBlock,
  AdvantageItems,
  AdvantageItem,
  AdvantageWrapper,
  TitleAdvantage,
  Advantage,
  ButtonPrice,
  ButtonText,
} from './About.styled';

export default function About() {
  return (
    <>
      <Header>О компании</Header>
      <Buttons>
        <Items>
          <Item>
            <Button>Описание</Button>
          </Item>
          <Item>
            <Button>Этапы работ</Button>
          </Item>
          <Item>
            <Button>Отзывы</Button>
          </Item>
          <Item>
            <Button>Сертификаты</Button>
          </Item>
        </Items>
      </Buttons>
      <Block>
        <BigLogo />
        <TextBlock>
          <Text>
            Мы помогаем клиентам подбирать решения, учитывая пожежелания к
            характеристикам окна и его стоимости. Окно - это объект, которым Вы
            будете пользоваться много лет, поэтому для нас очень важно, чтобы Вы
            сделали правильный выбор.
          </Text>
        </TextBlock>
        <Image />
      </Block>
      <Wrapper>
        <AdvantageItems>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Технологичность</TitleAdvantage>
                <Advantage>
                  Бригада профессиональных мастеров по монтажу и обслуживанию
                </Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Ценообразование</TitleAdvantage>
                <Advantage>Лучшие цены на рынке пластиковых окон</Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Мобильность качества</TitleAdvantage>
                <Advantage>Заключение договора на дому</Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Лояльность</TitleAdvantage>
                <Advantage>
                  99% клиентов рекомендуют нас своим друзьям
                </Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Скорость</TitleAdvantage>
                <Advantage>Короткие сроки установки </Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
          <AdvantageItem>
            <BlockItems>
              <ImgBlock />
              <AdvantageWrapper>
                <TitleAdvantage>Служба качества</TitleAdvantage>
                <Advantage>
                  Безупречное качество и контроль изделий ПВХ
                </Advantage>
              </AdvantageWrapper>
            </BlockItems>
          </AdvantageItem>
        </AdvantageItems>
      </Wrapper>
      <ButtonPrice>
        <ButtonText>Оформить заявку на замер</ButtonText>
      </ButtonPrice>
    </>
  );
}
