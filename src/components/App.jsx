import Container from './Container';
import Hero from './Hero';
import Navigation from './Navigation';
import Services from './Services';
import Products from './Products';
import About from './About';
import Portfolio from './Portfolio';
import Questions from './Questions';
import Contacts from './Contacts';
import Footer from './Footer';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Hero />
      <Services />
      <Products />
      <About />
      <Portfolio />
      <Questions />
      <Contacts />
      <Footer />
    </Container>
  );
};
