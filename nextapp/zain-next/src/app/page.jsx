import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services.jsx';

export default function Page() {
  return (
    <>
      <Header />
      <Nav />
      <main className="main-content">
        <Home />
        <Services />
      </main>
      <Footer />
    </>
  );
}
