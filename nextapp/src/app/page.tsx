import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <Nav />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </>
  );
}
