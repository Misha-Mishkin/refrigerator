import { Block, Header, Question, Text } from './Questions.styled';

export default function Questions() {
  return (
    <Block>
      <Header>Вопрос-ответ</Header>
      <Question>
        <Text>Сколько по времени занимает изготовление пластиковых окон?</Text>
      </Question>
      <Question>
        <Text>Какие существуют способы оплаты?</Text>
      </Question>
      <Question>
        <Text>Где я могу посмотреть образцы?</Text>
      </Question>
      <Question>
        <Text>Зачем вызывать замерщика? Я могу дать размеры.</Text>
      </Question>
      <Question>
        <Text>Хотелось бы отделать балкон. Поможете?</Text>
      </Question>
      <Question>
        <Text>Мне надо нанимать грузчиков для подъема?</Text>
      </Question>
    </Block>
  );
}
