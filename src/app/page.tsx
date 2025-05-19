import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageSlider from '../components/ImageSlider';
import EncontreGrupo from '../components/EncontreGrupo';
import SejaMembro from '../components/SejaMembro';
import Batismo from '../components/Batismo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="mt-16"><Hero /></div>
        <ImageSlider />
        <EncontreGrupo />
        <SejaMembro />
        <Batismo />
      </main>
      <Footer />
    </>
  );
}
