import {
  Header,
  Buttons,
  Items,
  Item,
  Button,
  GalleryBlock,
  Image,
  Description,
  Title,
  Text,
  ParamsItems,
  ParamsItem,
  ProductDescription,
  Logo,
  BlockWrapper,
  BlockItems,
  BlockItem,
  Wrapper,
  Block,
  BlockText,
  ButtonPrice,
  ButtonText,
} from './Products.styled';

export default function Products() {
  return (
    <>
      <Header>Продукция</Header>
      <Buttons>
        <Items>
          <Item>
            <Button>Стандарт</Button>
          </Item>
          <Item>
            <Button>Бизнес</Button>
          </Item>
          <Item>
            <Button>Премиум</Button>
          </Item>
          <Item>
            <Button>Эксклюзив</Button>
          </Item>
        </Items>
      </Buttons>
      <GalleryBlock>
        <Image />
        <Description>
          <Title>Rehau Blitz New</Title>
          <Text>
            Сохраняют тепло в доме, защищают от шума и вписываются в любой
            интерьер. Практичный выбор
          </Text>
          <ParamsItems>
            <ParamsItem>
              Системная глубина
              ......................................................................60/60
              мм
            </ParamsItem>
            <ParamsItem>
              Ширина
              стеклопакета..................................................................24/31
              мм
            </ParamsItem>
            <ParamsItem>
              Воздушные
              камеры......................................................................3
            </ParamsItem>
            <ParamsItem>
              Теплосопротивление...................................................................0,70
              м2С/ВТ
            </ParamsItem>
          </ParamsItems>
        </Description>
      </GalleryBlock>
      <ProductDescription>
        <Logo />
        <BlockWrapper>
          <BlockItems>
            <BlockItem>
              <Wrapper>
                <Block />
                <BlockText>Сертифицированный производитель Rehau</BlockText>
              </Wrapper>
            </BlockItem>
            <BlockItem>
              <Wrapper>
                <Block />
                <BlockText>Инновационный оконный завод</BlockText>
              </Wrapper>
            </BlockItem>
            <BlockItem>
              <Wrapper>
                <Block />
                <BlockText>
                  Лидер по переработке профилей Rehau в России
                </BlockText>
              </Wrapper>
            </BlockItem>
            <BlockItem>
              <Wrapper>
                <Block />
                <BlockText>
                  Высокотехнологичное автоматизированное оборудование
                </BlockText>
              </Wrapper>
            </BlockItem>
            <BlockItem>
              <Wrapper>
                <Block />
                <BlockText>Широкий ассортимент продукции</BlockText>
              </Wrapper>
            </BlockItem>
          </BlockItems>
        </BlockWrapper>
      </ProductDescription>
      <ButtonPrice>
        <ButtonText>Заказать расчет</ButtonText>
      </ButtonPrice>
    </>
  );
}
