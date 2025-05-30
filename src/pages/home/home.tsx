import About from './sections/about';
import Footer from './sections/footer';
import Hero from './sections/hero';
import Process from './sections/process';
import Services from './sections/services';
import Contact from './sections/contact';
import { Separator } from '../../components/separator/separator';
import AboutUs from './sections/aboutUs';
import ResultsSection from './sections/results';

export default function Home() {
  return (
    <>
      <div className='overflow-clip bg-black'>
        <Hero />
        <Separator className='-top-[1px]' upsideDown />
        <AboutUs />
        <Separator className='-top-2' />
        <About />
        <Separator className='-top-[1px]' upsideDown />
        <Services />
        <Separator className='-top-2' />
        <Process />
        <Separator className='-top-[1px]' upsideDown />
        <ResultsSection />
        <Separator className='-top-2' />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
