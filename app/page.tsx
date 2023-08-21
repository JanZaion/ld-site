import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Heading } from './components/heading/Heading';
import { RecentWriting } from './components/recentWriting/RecentWriting';
import { Services } from './components/services/Services';
import { Work } from './components/work/Work';

const Home = () => {
  return (
    <main
      // clear this crap when bringing in sidebar nav
      style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Heading />
      <About />
      <Services />
      <Work />
      <RecentWriting />
      <Contact />
    </main>
  );
};

export default Home;
