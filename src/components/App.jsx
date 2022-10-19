import Container from './Container';
import Hero from './Hero';
import Navigation from './Navigation';
import Services from './Services';
import Products from './Products';
import About from './About';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Hero />
      <Services />
      <Products />
      <About />
    </Container>
  );
};
