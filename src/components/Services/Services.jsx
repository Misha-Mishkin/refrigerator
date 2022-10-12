import {
  Header,
  Items,
  Item,
  Box,
  SubTitle,
  Text,
  Wrapper,
  SubBox,
} from './Services.styled';

export default function Services() {
  return (
    <>
      <Header>Наши услуги</Header>
      <Wrapper>
        <Items>
          <Item>
            <Box>
              <SubBox>
                <SubTitle>
                  Установка пластиковых окон
                  <Text>
                    Устанавливаем пластиковые окна Rehau от проверенного
                    производителя с гарантией качества
                  </Text>
                </SubTitle>
              </SubBox>
            </Box>
          </Item>
          <Item>
            <Box>
              <SubBox>
                <SubTitle>
                  Остекление балконов и лоджий
                  <Text>
                    Занимаемся остеклением и отделкой балконов и лоджий. Теплое
                    и холодное остекление, изготовление выносов и крыш. Беремся
                    за сложные объекты
                  </Text>
                </SubTitle>
              </SubBox>
            </Box>
          </Item>
          <Item>
            <Box>
              <SubBox>
                <SubTitle>
                  Остекление коттеджей и дач
                  <Text>
                    Остекление и отделка под ключ: от коттеджей и дач до террас
                    и беседок. Выделяем личного технолога под каждый объект
                  </Text>
                </SubTitle>
              </SubBox>
            </Box>
          </Item>
          <Item>
            <Box>
              <SubBox>
                <SubTitle>
                  Остекление корпоративных объектов
                  <Text>
                    Реализуем сложные проекты по остеклению торговых центров,
                    ресторанов, производственных помещений и офисов
                  </Text>
                </SubTitle>
              </SubBox>
            </Box>
          </Item>
        </Items>
      </Wrapper>
    </>
  );
}
