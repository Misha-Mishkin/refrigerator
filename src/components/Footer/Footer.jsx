import {
  FooterBlock,
  Block,
  AdressBlock,
  AdressText,
  ContactsBlock,
  ContactsText,
  ServicesBlock,
  ServicesText,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterBlock>
      <Block>
        <AdressBlock>
          <AdressText>
            ООО “Окна Хаус” г. Иваново, ул. Варенцовой, д.9/18, стр. 2 оф. 11
          </AdressText>
        </AdressBlock>
        <ContactsBlock>
          <ContactsText>
            Контакты: 8 (4932) 34 - 31 - 40 8 (905) 109 - 31 - 40 E-mail:
            zakaz@oknohaus.ru
          </ContactsText>
        </ContactsBlock>
        <ServicesBlock>
          <ServicesText>
            Услуги: Пластиковые окна Остекление балконов Остакление коттеджей
            Остекление корпоративных объектов
          </ServicesText>
        </ServicesBlock>
      </Block>
    </FooterBlock>
  );
}
