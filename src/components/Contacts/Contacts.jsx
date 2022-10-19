import {
  Header,
  Block,
  TextBlock,
  Text,
  TextContacts,
  Contact,
  Application,
} from './Contacts.styled';

export default function Contacts() {
  return (
    <>
      <Header>Контакты</Header>
      <Block>
        <TextBlock>
          <Text>
            Установку должны выполнять только эксперты. Нам доверяют сотни
            семей. Узнайте поробнее, какие решения вам подходят. Вы можете
            приобрести недорогие товары при гарантированно высоком качестве.
          </Text>
          <TextContacts>
            Проводится бесплатная консультация по телефонам:
          </TextContacts>
          <Contact>
            8 (4932) 34 - 31 - 40 8 (905) 109 - 31 - 40 адрес офиса мэйл все
            чаты инстаграм ссылка ютюб
          </Contact>
        </TextBlock>
        <Application />
      </Block>
    </>
  );
}
