import { About } from './components/about/About';
import { Heading } from './components/heading/Heading';
import { Posts } from './components/Posts';
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
      <Posts />
    </main>
  );
};

export default Home;
