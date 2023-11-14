import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Heading } from './components/heading/Heading';
import { Services } from './components/services/Services';
import { Work } from './components/work/Work';

const Home = () => {
  return (
    <main>
      <Heading />
      <About />
      <Services />
      <Work />
      {/* <RecentWriting /> */}
      <Contact />
    </main>
  );
};

export default Home;
