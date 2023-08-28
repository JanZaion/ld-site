import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Heading } from './components/heading/Heading';
import { RecentWriting } from './components/recentWriting/RecentWriting';
import { Services } from './components/services/Services';
import { Work } from './components/work/Work';

const Home = () => {
  return (
    <main>
      <Heading />
      <About />
      <Services />
      <Work />
      <RecentWriting />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
