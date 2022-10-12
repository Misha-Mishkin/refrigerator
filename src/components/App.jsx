import Container from './Container';
import Hero from './Hero';
import Navigation from './Navigation';
import Services from './Services';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Hero />
      <Services/>
    </Container>
  );
};
