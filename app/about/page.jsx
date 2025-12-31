import ProtectedClient from '../components/ProtectedClient';
import AboutUs from '../../src/components/Aboutus';

export default function AboutPage() {
  return (
    <ProtectedClient>
      <AboutUs />
    </ProtectedClient>
  );
}
